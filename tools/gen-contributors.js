const { execSync } = require("child_process");
const fs = require("fs");

const repos = [
  ["mgastner", "cartogram-cpp"],
  ["go-cart-io", "cartogram-web"],
];
const outputFile = "contributors.md";

const options =
  "--showlogin true --filter dependabot[bot] --sortOrder desc --imagesize 50";

for (let i = 0; i < repos.length; i++) {
  try {
    if (i === 0) fs.writeFileSync(outputFile, `#### ${repos[i][1]}\n\n`);
    else fs.appendFileSync(outputFile, `#### ${repos[i][1]}\n\n`);

    execSync(
      `githubcontrib --owner ${repos[i][0]} --repo ${repos[i][1]} ${options} >> ${outputFile}`
    );
    console.log(`Successfully add contributors of ${repos[i][1]}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
  }
}
