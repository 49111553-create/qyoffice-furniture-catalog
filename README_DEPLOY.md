# QianYang Furniture Static B2B Catalog Website

This is a GitHub Pages-ready static website for QianYang Furniture / QY Office Furniture.

## Files

- `index.html` - Home page
- `products.html` - Filterable product catalog
- `product-detail.html?id=QY-RD-001` - Dynamic product detail page
- Category pages: `reception-desks.html`, `nurse-stations.html`, `office-desks.html`, `bar-counters.html`, `display-showcases.html`, `custom-commercial-furniture.html`
- Business pages: `solutions.html`, `customization.html`, `projects.html`, `factory.html`, `catalog.html`, `contact.html`
- `assets/css/styles.css` - All website styling
- `assets/js/site.js` - Product data, filtering, detail rendering, inquiry forms
- `assets/images/` - Editable SVG placeholder assets
- `assets/catalog/qianyang-commercial-furniture-catalog.pdf` - Starter PDF catalog

## Deploy to GitHub Pages

1. Create a new GitHub repository.
2. Upload all files and folders from this package to the repository root.
3. Go to Repository Settings > Pages.
4. Under "Build and deployment", choose "Deploy from a branch".
5. Select branch `main` and folder `/root`.
6. Save. GitHub will publish the website.

## Before launch

1. Replace placeholder contact details in `assets/js/site.js`:
   - `CONTACT.email`
   - `CONTACT.whatsappNumber`
2. Replace SVG placeholder images with real product, factory, packing and project photos.
3. Replace the starter PDF catalog with your final PDF.
4. Verify the Alibaba Store button points to: https://qyofficefurniture.en.alibaba.com

## Notes

This is a static site. Forms open the buyer's email app through `mailto:`. For real form submissions and file uploads, connect a form service such as Formspree, Basin, Netlify Forms, or your own backend.
