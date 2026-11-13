/**
 * Wishlist kept in the visitor's browser (localStorage), so it needs no account and no server.
 *
 * - Heart buttons:   <button data-wishlist="product-slug">   (see HeartButton.astro)
 * - Wishlist page:   elements with data-wishlist-item="product-slug" are shown only when saved,
 *                    [data-wishlist-empty] is shown when nothing is saved,
 *                    [data-wishlist-count] receives the number of saved products.
 */
const KEY = 'lp_wishlist';

function read(): string[] {
  try {
    const value = JSON.parse(localStorage.getItem(KEY) || '[]');
    return Array.isArray(value) ? value.filter((x) => typeof x === 'string') : [];
  } catch {
    return [];
  }
}

function write(slugs: string[]) {
  try {
    localStorage.setItem(KEY, JSON.stringify(slugs));
  } catch {
    // Private browsing or storage disabled: the hearts still toggle for this page view.
  }
}

let saved = read();

function render() {
  document.querySelectorAll<HTMLElement>('[data-wishlist]').forEach((button) => {
    const on = saved.includes(button.dataset.wishlist || '');
    button.setAttribute('aria-pressed', String(on));
    const label = on ? button.dataset.labelRemove : button.dataset.labelAdd;
    if (label) button.setAttribute('aria-label', label);
  });

  const items = document.querySelectorAll<HTMLElement>('[data-wishlist-item]');
  let visible = 0;
  items.forEach((item) => {
    const on = saved.includes(item.dataset.wishlistItem || '');
    item.hidden = !on;
    if (on) visible += 1;
  });

  document.querySelectorAll<HTMLElement>('[data-wishlist-empty]').forEach((el) => (el.hidden = visible > 0));
  document.querySelectorAll<HTMLElement>('[data-wishlist-count]').forEach((el) => (el.textContent = String(visible)));
}

document.addEventListener('click', (event) => {
  const button = (event.target as Element).closest<HTMLElement>('[data-wishlist]');
  if (!button) return;
  event.preventDefault();

  const slug = button.dataset.wishlist || '';
  saved = read();
  saved = saved.includes(slug) ? saved.filter((s) => s !== slug) : [...saved, slug];
  write(saved);
  render();
});

// Keep several open tabs in step.
window.addEventListener('storage', (event) => {
  if (event.key === KEY) {
    saved = read();
    render();
  }
});

render();
