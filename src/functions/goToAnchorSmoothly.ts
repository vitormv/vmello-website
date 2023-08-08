function goToAnchorSmoothly(this: HTMLElement, e: Event) {
  e.preventDefault(); // Stop Page Reloading
  const href = (e.currentTarget as HTMLAnchorElement).getAttribute('href');
  const targetId = href?.replace(/^\/+/, '').replace(/^#+/, '');

  if (!targetId) return;

  const el = document.getElementById(targetId);
  if (!el) return;

  el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

export { goToAnchorSmoothly };
