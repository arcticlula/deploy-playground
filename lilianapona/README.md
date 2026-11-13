# Liliana Pona Jewellery — website

The site of [lilianaponajewellery.pt](https://lilianaponajewellery.pt), rebuilt from the old WordPress/WooCommerce
site as a static site with [Astro](https://astro.build). Every page exists in Portuguese and English. No database: the
content lives in the files below, the wishlist is kept in the visitor's browser, and the two forms send email.

## Commands

Node 22 or newer. Run them in this folder.

| Command                 | What it does                                                  |
| ----------------------- | ------------------------------------------------------------- |
| `npm install`           | Installs Astro (once).                                        |
| `npm run dev`           | Local site at http://localhost:4321 that reloads on changes.  |
| `npm run build`         | Builds the finished site into `dist/`.                        |
| `npm run preview`       | Serves `dist/` locally to check the build.                    |

## Where things are

| To change…                                     | Edit                                                                 |
| ---------------------------------------------- | -------------------------------------------------------------------- |
| Products (texts, order, photos, price)         | `src/data/products.ts` + photos in `src/assets/images/products/<slug>/` and `collections/` |
| Slides of the Products page                    | `src/data/carousel.ts` + `src/assets/images/carousel/`               |
| Interface texts (menu, buttons, footer, …)     | `src/i18n/ui.ts` (Portuguese and English side by side)               |
| Page addresses and languages                   | `src/i18n/routes.ts`                                                 |
| Legal pages                                    | `src/content/legal/pt/*.md` and `en/*.md`                            |
| Emails, phones, WhatsApp, social links         | `src/data/site.ts`                                                   |
| Home photo, logo and tagline                   | `src/components/Hero.astro` and `src/styles/sections/hero.css`      |
| Styles                                         | `src/styles/base.css` and `src/styles/sections/<section>.css`        |

Every page in every language comes out of `src/pages/[...path].astro`, which picks a view from `src/views/`.
Views are made of sections in `src/components/`.

### Common tasks

- **Add a product:** follow the steps at the top of `src/data/products.ts`. The Collections page, search, wishlist,
  product page and sitemap pick it up. Its position in the list is its position on the Collections page.
- **Show prices:** set `price` on a product (in euros). `null` shows "Preço sob consulta".
- **Take the Christmas slide down:** delete the `christmas` line in `src/data/carousel.ts`.
- **Change the home photo:** replace `src/assets/images/home/hero-model.png`. On tablets and computers the logo and
  tagline are placed in percentages of the photo (`hero.css`); check them if the new photo is framed differently.

## Publishing

1. `npm run build`
2. Upload the **contents** of `dist/` to `public_html/` on the cPanel host, including the hidden files
   `.htaccess` and `_astro/.htaccess`.
3. Old WordPress addresses that no longer exist are redirected in `public/.htaccess`.

Not done yet: the server side of the two forms. The contact form posts to `/api/contact.php` and the newsletter
form to `/api/newsletter.php`; until those PHP files exist on the server, both forms show their error message.
