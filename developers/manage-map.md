# Managing maps in go-cart.io

This tutorial explains how to use `batch_generator.py` to add maps and generate visualizations from command line. The following tutorial should be run in devcontainer bash (see [Setting Up Development Environment](http://localhost:3000/#/developers/cartogram-web?id=setting-up-development-environment)).

## Adding New Maps from Sample Data in cartogram-cpp

This guide shows how to copy and process **GeoJSON**, **CSV**, and **MD** files from `cartogram-cpp/sample_data` into `cartogram-web`, generate cartograms, and add them to the map list.

1. **Clone `cartogram-cpp`**

   ```bash
   git clone https://github.com/mgastner/cartogram-cpp
   ```

2. **Generate maps from sample data**

- Copy only **new** folders:

  ```bash
  python tools/batch_generator.py add_folders cartogram-cpp/sample_data
  ```

- Copy **all** folders (overwrite existing):

  ```bash
  python tools/batch_generator.py --overwrite add_folders cartogram-cpp/sample_data
  ```

3. **Check results**
   Open [http://localhost:5000/view](http://localhost:5000/view) to confirm the maps were added.

4. **(Optional) Rename maps**
   Edit `internal/handler_metadata.py` to give maps friendlier names. For example:

```python
"world_by_region": {
    "name": "world_by_region",
    "types": {"Population (people)": "contiguous"},
},
```

becomes:

```python
"world_by_region": {
    "name": "World (by region)",
    "types": {"Population (people)": "contiguous"},
},
```

5. **(Optional) Customize labels and colors**
   Edit `internal/static/cartdata/<folder_name>/data.csv` to adjust:

- `RegionLabel` → label text in visualization.
- `ColorGroup` → group regions by color.

6. **Commit and submit changes**
   Once satisfied, commit:

- New folders in `internal/static/cartdata/`
- Updates in `internal/handler_metadata.py`

Then create a Pull Request to the `dev` branch of `cartogram-web`.

### Using Other Data Folders

You can run the script with another data folders:

```bash
python tools/batch_generator.py add_folders another-data-folder
```

**Requirements for each subfolder:**

- **1 GeoJSON** file.
- **At least 1 CSV** file with the following format:
  - Column 1 → region names
  - Column 2 → data values (e.g., population)
  - `Label` column → optional labels for visualization

### Adding a Single Map

To add just one map, use `add_map` instead of `add_folders`:

```bash
python tools/batch_generator.py --overwrite --prompt_friendly_name add_map cartogram-cpp/sample_data/singapore_by_planning_area_since_1999
```

**Notes:**

- The folder must contain **1 GeoJSON** and **at least 1 CSV** (same as `add_folders`).
- Use `--prompt_friendly_name` to enter a friendly name from the command line (no manual editing needed).
- After adding, follow the same steps for customization and committing changes if needed.

## Regenerating an Existing Map

To update cartograms for an existing map in `internal/static/cartdata`, use `gen_map`.
This is useful if the map already exists but you want to **re-run the cartogram generation** (e.g., after algorithm updates).

**Example:**

```bash
python tools/batch_generator.py gen_map thailand
```

## Customizing Visualization Types

By default, all data columns are treated as **contiguous cartograms**.
To specify different visualization types, use `--vis_types` with `add_folders`, `add_map`, or `gen_map`.

**Example:**

```bash
python tools/batch_generator.py --overwrite --vis_types '{"Population (people)":"contiguous","Density":"choropleth"}' gen_map thailand
```

**Format:**

```json
{ "column_name": "type" }
```

The type can be `contiguous`, `noncontiguous`, or `choropleth`.

## Removing a Map

- **If already in production:**
  Do not delete the map. Instead, hide it so that existing embedded maps remain accessible.
  Add `"hidden": True` in `internal/handler_metadata.py`. Example:

  ```python
  "world_by_country_since_2022": {
    "hidden": True,
    "name": "world_by_country_since_2022",
    "types": {"Population (people)": "contiguous"},
  },
  ```

- **If only in development/local:**
  You can safely remove:

  - The map folder from `internal/static/cartdata/`
  - Its entry in `internal/handler_metadata.py`
