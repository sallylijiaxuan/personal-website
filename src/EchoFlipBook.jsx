import React, { forwardRef, useEffect, useImperativeHandle, useRef, useState } from 'react';
import { appendCoverText } from './EchoCoverText';
import { PAGE_COUNT, pageImage, pageLabel } from './echoPages';

const EchoFlipBook = forwardRef(function EchoFlipBook({ single, onPage }, ref) {
  const container = useRef(null);
  const engine = useRef(null);
  const currentPage = useRef(0);
  const onPageRef = useRef(onPage);
  onPageRef.current = onPage;
  const [size, setSize] = useState(null);
  useImperativeHandle(ref, () => ({
    next: () => engine.current?.flipNext('bottom'),
    previous: () => engine.current?.flipPrev('bottom'),
    jump: number => engine.current?.turnToPage(number),
  }), []);
  useEffect(() => {
    const measure = () => {
      const available = container.current?.clientWidth || 0;
      if (!available) return;
      // Leave room for pagination beneath the magazine within one viewport.
      const viewportHeight = window.visualViewport?.height || window.innerHeight;
      const pageHeight = Math.max(160, viewportHeight - (single ? 180 : 120));
      const width = Math.max(100, Math.floor(Math.min(650, available / (single ? 1 : 2), pageHeight * 612 / 792)));
      setSize(previous => previous?.width === width ? previous : { width, height: Math.round(width * 792 / 612) });
    };
    const observer = new ResizeObserver(measure);
    observer.observe(container.current);
    window.addEventListener('resize', measure);
    measure();
    return () => { observer.disconnect(); window.removeEventListener('resize', measure); };
  }, [single]);
  useEffect(() => {
    if (!size) return;
    let cancelled = false;
    let flip;
    const host = document.createElement('div');
    host.className = 'echo-real-book';
    host.style.width = `${size.width * (single ? 1 : 2)}px`;
    host.style.height = `${size.height}px`;
    container.current.appendChild(host);
    import('page-flip').then(({ PageFlip }) => {
      if (cancelled) return;
      const leaves = Array.from({ length: PAGE_COUNT }, (_, page) => {
        const leaf = document.createElement('div');
        leaf.className = 'echo-magazine-leaf';
        leaf.setAttribute('aria-label', `ECHO, ${pageLabel(page)}`);
        const image = pageImage(page);
        const printed = document.createElement('div');
        printed.className = `echo-printed-page${page === 0 ? ' echo-issue-cover' : ''}${image.half ? ` crop-${image.half}` : ''}${image.fit === 'contain' ? ' cover-composition' : ''}`;
        const img = document.createElement('img');
        if (image.src) { img.src = image.src; img.alt = `ECHO, ${pageLabel(page)}`; img.draggable = false; printed.appendChild(img); } if (page === 0) appendCoverText(printed); leaf.appendChild(printed); host.appendChild(leaf);
        return leaf;
      });
      const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      flip = new PageFlip(host, {
        width: size.width, height: size.height, size: 'fixed',
        showCover: true, usePortrait: single, autoSize: false,
        drawShadow: true, maxShadowOpacity: .42, flippingTime: reduced ? 1 : 900,
        useMouseEvents: true, showPageCorners: !reduced, disableFlipByClick: true,
        mobileScrollSupport: true, swipeDistance: 25,
        startPage: currentPage.current,
      });
      flip.on('flip', event => { currentPage.current = event.data; onPageRef.current(event.data); });
      flip.loadFromHTML(leaves);
      engine.current = flip;
    });
    return () => { cancelled = true; engine.current = null; if (flip) flip.destroy(); else host.remove(); };
  }, [size, single]);
  return <div className="echo-flipbook-mount" ref={container} />;
});
export default EchoFlipBook;
