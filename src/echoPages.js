// The original 18-page zine, without the separate cover design.
export const PAGE_COUNT = 18;
export function pageLabel(page) {
  return `page ${page + 1}`;
}
export function pageImage(page) {
  return {
    src: `/images/project/echo/zine-${page === 0 ? 1 : page === 17 ? 10 : Math.floor((page + 1) / 2) + 1}.png`,
    half: page === 0 || page === 17 ? null : page % 2 === 1 ? 'left' : 'right',
  };
}
export function visiblePages(page, single) {
  if (single || page === 0 || page === PAGE_COUNT - 1) return [page];
  const left = page % 2 === 1 ? page : page - 1;
  return [left, left + 1];
}
export function turnPage(page, direction, single) {
  const visible = visiblePages(page, single);
  return Math.max(0, Math.min(PAGE_COUNT - 1, direction > 0 ? visible.at(-1) + 1 : visible[0] - 1));
}
