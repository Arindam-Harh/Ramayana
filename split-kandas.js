import fs from "fs";
import path from "path";

// Path to the original JSON file
const inputFile = path.join("public", "Valmiki_Ramayan_Shlokas.json");

// Output folder
const outputDir = "public";

// Read and parse the JSON
const data = JSON.parse(fs.readFileSync(inputFile, "utf8"));

// Group by Kanda
const grouped = {};

data.forEach((item) => {
  const kanda = item.kanda?.trim();

  if (!grouped[kanda]) {
    grouped[kanda] = [];
  }

  grouped[kanda].push(item);
});

// File names (must match your JSX)
const fileMap = {
  "Bala Kanda": "bala-kanda.json",
  "Ayodhya Kanda": "ayodhya-kanda.json",
  "Aranya Kanda": "aranya-kanda.json",
  "Kishkindha Kanda": "kishkindha-kanda.json",
  "Sundara Kanda": "sundara-kanda.json",
  "Yuddha Kanda": "yuddha-kanda.json",
  "Uttara Kanda": "uttara-kanda.json",
};

// Write each Kanda file
for (const [kanda, fileName] of Object.entries(fileMap)) {
  const shlokas = grouped[kanda] || [];

  // Sort by Sarga, then Shloka
  shlokas.sort((a, b) => {
    if (Number(a.sarga) !== Number(b.sarga)) {
      return Number(a.sarga) - Number(b.sarga);
    }
    return Number(a.shloka) - Number(b.shloka);
  });

  const outputPath = path.join(outputDir, fileName);

  fs.writeFileSync(
    outputPath,
    JSON.stringify(shlokas, null, 2),
    "utf8"
  );

  console.log(
    `Created ${fileName} (${shlokas.length} shlokas)`
  );
}

console.log("All Kanda files created successfully!");