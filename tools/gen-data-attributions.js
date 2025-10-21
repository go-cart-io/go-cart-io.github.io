const fs = require("fs");
const https = require("https");

const url =
  "https://raw.githubusercontent.com/go-cart-io/cartogram-web/refs/heads/main/internal/handler_metadata.py";
const outputFile = "licenses-data-attributions.md";

// 1. Fetch the file
https
  .get(url, (res) => {
    let data = "";

    res.on("data", (chunk) => {
      data += chunk;
    });

    res.on("end", () => {
      // 2. Parse cartogram_handlers block
      const regex = /cartogram_handlers\s*=\s*{([\s\S]*?)^\}/m;
      const match = data.match(regex);
      if (!match) {
        console.error("Could not find cartogram_handlers in file.");
        return;
      }

      const handlersBlock = match[1];

      // Match only the *first-level* handler entries.
      // Capture the handler object body so we can inspect for "hidden": True.
      // Example matched block: "argentina": { "name": "Argentina", "hidden": True, ... },
      const entryRegex = /"([^"]+)"\s*:\s*{([\s\S]*?)}\s*,?/g;

      let entries = [];
      let m;
      while ((m = entryRegex.exec(handlersBlock)) !== null) {
        const key = m[1]; // e.g. argentina
        const body = m[2]; // the contents of the { ... } for this handler

        // Extract name (support both single or double quotes around the key)
        const nameMatch = body.match(/['"]name['"]\s*:\s*['"]([^'"]+)['"]/);
        if (!nameMatch) continue;
        const name = nameMatch[1];

        // Skip entries where hidden is set to True (Python literal True)
        // Support "hidden": True, 'hidden': True, or hidden: True
        const hiddenMatch = body.match(/['"]?hidden['"]?\s*:\s*True/);
        if (hiddenMatch) {
          // skip this handler
          continue;
        }

        entries.push({ key, name });
      }

      // 3. Sort alphabetically by name
      entries.sort((a, b) => a.name.localeCompare(b.name));

      // 4. Build links
      const links = entries.map(
        ({ key, name }) =>
          `[${name}](https://github.com/go-cart-io/cartogram-web/tree/main/internal/static/cartdata/${key})`
      );

      // 5. Join with " | "
      const output = links.join(" | ") + "\n";

      // 6. Write to file
      fs.writeFileSync(outputFile, output, "utf8");
      console.log(`✅ Saved sorted output to ${outputFile}`);
    });
  })
  .on("error", (err) => {
    console.error("Error fetching file:", err);
  });
