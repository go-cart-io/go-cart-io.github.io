# go-cart.io: Online Web Interface for cartogram generator

Go-cart.io is a web-based cartogram generator. To get started:

1. Visit [https://go-cart.io/cartogram/create](https://go-cart.io/cartogram/create)
2. Follow the steps in the left panel
3. Refer to this tutorial for detailed explanations

This guide walks you through each step of the process.

## 1. Define a map

**Choose one method:**

- Select a predefined map from the dropdown OR
- Upload your own boundary file:
  - Supported formats: GeoJSON (.geojson) or Shapefile (.shp with .shx/.dbf in a ZIP)

**Important requirements:**

- Files must contain valid geometries (no self-intersections)
- Use [Mapshaper](https://mapshaper.org/) to validate and repair files
- Region names must be unique (e.g., represent Indonesia as one MultiPolygon, not separate Polygons)

💡 Tip: After select or upload the map, you'll see a data spreadsheet. Review visualization settings (next step) before entering data.

## 2. Specify visualization

- **Title**: Name your dataset
- **Colors**:
  - Choose from preset color schemes (auto-applied to regions)
  - Select "Custom" to assign colors manually (using HEX codes)
- **Insets** (Recommended for maps with islands/separate regions):
  - If enabled, regions are processed separately and merged
  - Specify positions in the `Inset` column (C/L/R/T/D)

Next, choose one method for data editing:

1. **Download Spreadsheet** (Recommended)  
   Best for complex edits - Use Excel/LibreOffice (See Step 3)
2. **Web Interface**  
   Best for quick adjustments (See Step 4)

## 3. Download data (optional)

Download spreadsheet to edit data on your device. Choose either format:

- **CSV** (Universal format)
- **Excel** (.xlsx for Office users)

## 4. Input your data

- If you edited data locally (Step 3), re-upload it here
- **Always verify** data in the right panel after uploading
- Direct editing available in the web interface

**Data Columns**

| Column        | Purpose            | Format        | Notes                                                                                |
| ------------- | ------------------ | ------------- | ------------------------------------------------------------------------------------ |
| `Region`      | Unique region name | Text          | Required, no duplicates                                                              |
| `RegionLabel` | Display text       | Text          | Optional, auto-scaled                                                                |
| `Color`       | Custom colors      | HEX (#RRGGBB) | Required for "Custom" scheme                                                         |
| `ColorGroup`  | Color categories   | Number        | Ignored if `Color` exists                                                            |
| `Inset`       | Inset positioning  | C/L/R/T/D     | "C" (center), "L" (left), "R" (right), "T" (top), or "D" (down)                      |
| `Data`        | Data values        | Number        | Allowed multiple, specify unique data name and its unit in header (e.g., "GDP ($B)") |

❗ **Don't modify** these headers:  
`Region`, `RegionLabel`, `Color`, `ColorGroup`, `Inset`

✏️ **Allowed changes:**

- Edit all values except `Region` (change via new boundary file upload)
- Add/remove data columns
- Rename data headers (keep units in parentheses)

✏️ **Editing Colors:**

- Via web interface: Click any `Color` cell to pick from palette
- Via downloaded spreadsheet: Use HEX codes (e.g., `#FF5733`) in `Color` column, see [HEX color reference](https://appendto.com/2017/02/rgb-to-hex-understanding-the-major-web-color-codes/)

## 5. Generate cartogram

1. Click the **"Generate"** button
2. Wait for processing (typically completes in seconds)
3. You'll be automatically redirected to the cartogram viewer
4. Download or share your cartogram
   - Click the :fas fa-download: button to download:
     - SVG (vector, editable)
     - GeoJSON (geospatial data)
   - Click the **Share** button (:fas fa-share-alt:) to:
     - Generate a shareable link
     - Get embed code for websites

⚠️ **Important notes about your data**:

- Unshared cartograms are automatically deleted from our servers after **1-2 days**
- Shared links remain active for **1 year** from last access
  - _Example_: Regular access keeps data available indefinitely
- **No absolute guarantee** - always keep backup copies of:
  - Your original boundary files
  - Data spreadsheets

## FAQs

### How does this website generate cartograms?

This website uses the Fast Flow-based method developed by Michael T. Gastner, Vivien Seguy, and Pratyush More. You can learn more about how this method works by reading [the paper](https://www.pnas.org/content/115/10/E2156) they published in the journal PNAS. If you publish an image produced by go-cart.io, please include a reference to the PNAS paper.

### How long does it take to generate a cartogram?

It usually takes just a few seconds to generate one cartogram using this website. It will take longer if you have multiple data columns. A progress bar will give you an indication of how far the calculation has already proceeded.

### Can I share images created by go-cart.io with others?

Yes. Images generated by go-cart.io can be distributed under a permissive liccense (CC-BY, see [Creative Commons license](https://creativecommons.org/licenses/)): "This license lets others distribute, remix, adapt, and build upon your work, even commercially, as long as they credit you for the original creation." Please read about how credit our work [here](/licenses).

### How can I download and edit the cartograms generated on this website?

Below each map or cartogram displayed on this website there is a download button. By clicking it, you can download an SVG image containing the map. SVG files contain vector images, and can be edited and converted by Adobe Illustrator or [Inkscape](https://inkscape.org/), a free, open source alternative. If you would simply like to convert your SVG map to a PNG image to use in a document or paper and don’t have access to these programs, you can use [this website](https://svgtopng.com/).
