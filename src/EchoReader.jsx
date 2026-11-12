import React, { useEffect, useRef, useState } from 'react';
import { PAGE_COUNT, visiblePages, pageLabel } from './echoPages';
import EchoFlipBook from './EchoFlipBook';
export default function EchoReader() {
  const [page, setPage] = useState(0);
  const [single, setSingle] = useState(false);
  const book = useRef(null);
  useEffect(() => {
    const query = window.matchMedia('(max-width: 700px)');
    const update = () => setSingle(query.matches);
    update(); query.addEventListener('change', update);
    return () => query.removeEventListener('change', update);
  }, []);
  const pages = visiblePages(page, single);
  const label = pages.map(pageLabel).join(' / ');
  function turn(step) { if (step > 0) book.current?.next(); else book.current?.previous(); }
  function keyDown(event) {
    if (event.target.tagName === 'SELECT') return;
    if (event.key === 'ArrowRight') { event.preventDefault(); turn(1); }
    if (event.key === 'ArrowLeft') { event.preventDefault(); turn(-1); }
    if (event.key === 'Home') { event.preventDefault(); book.current?.jump(0); }
    if (event.key === 'End') { event.preventDefault(); book.current?.jump(PAGE_COUNT - 1); }
  }
  const spreads = [
    [0],
    ...Array.from({ length: (PAGE_COUNT - 2) / 2 }, (_, index) => [index * 2 + 1, index * 2 + 2]),
    [PAGE_COUNT - 1],
  ];
  const controls = <nav className="echo-reader-controls echo-pagination echo-spread-pagination" aria-label="Zine pages">
    <button type="button" onClick={() => book.current?.jump(0)} disabled={pages[0] === 0} aria-label="First page" title="First page">«</button>
    <button type="button" onClick={() => turn(-1)} disabled={pages[0] === 0} aria-label="Previous page" title="Previous page">‹</button>
    {spreads.map(spread => {
      const current = spread.includes(page);
      const spreadLabel = spread.map(number => number + 1).join('/');
      return <button key={spread[0]} type="button" className={current ? 'is-current' : undefined} aria-current={current ? 'page' : undefined} aria-label={`Go to ${spread.length === 1 ? 'page' : 'pages'} ${spreadLabel}`} onClick={() => book.current?.jump(spread[0])}>{spreadLabel}</button>;
    })}
    <button type="button" onClick={() => turn(1)} disabled={pages.at(-1) === PAGE_COUNT - 1} aria-label="Next page" title="Next page">›</button>
    <button type="button" onClick={() => book.current?.jump(PAGE_COUNT - 1)} disabled={pages.at(-1) === PAGE_COUNT - 1} aria-label="Last page" title="Last page">»</button>
    <span className="echo-pagination-status" aria-live="polite">{label}</span>
  </nav>;
  const restart = pages.includes(PAGE_COUNT - 1) && <aside className="echo-reader-restart echo-reader-side-note"><span className="echo-side-kicker">ECHO / ISSUE 01</span><span className="echo-side-title">the end</span><button type="button" className="text-link" onClick={() => book.current?.jump(0)}>back to the front ↶</button></aside>;
  return <section className="echo-reader" aria-labelledby="echo-spreads-title" onKeyDown={keyDown}>
    <div className="echo-reader-heading"><div><span className="eyebrow">FLIP THROUGH THE ISSUE</span><h2 id="echo-spreads-title" className="design-section-title">the complete issue</h2></div><a className="text-link" href="/projects/echo/zine.pdf" target="_blank" rel="noopener">open PDF ↗</a></div>
    <div className="echo-book-stage echo-glossy-stage" tabIndex={0} role="region" aria-label="ECHO magazine. Drag the page corners to turn, or use left and right arrow keys.">
      {page === 0 && <aside className="echo-reader-instruction echo-reader-side-note"><span className="echo-side-kicker">ECHO / ISSUE 01</span><span className="echo-side-title">turn the page</span><p>{single ? 'drag a corner or swipe to turn' : 'drag a page corner to turn'}</p></aside>}
      {restart}
      <EchoFlipBook ref={book} single={single} onPage={setPage} />
    </div>
    {controls}
  </section>;
}
