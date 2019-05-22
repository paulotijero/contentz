const prompt = require("cli-prompt");
const { join, parse } = require("path");
const openEditor = require("open-editor");

const { writeFile, exists, makeDir } = require("@contentz/utils/fs");

async function main([path], force = false) {
  if (!force && (await exists(join("./slides/", path)))) {
    return prompt(
      `The file ${path} already exists, do you want to overwrite it? (y/N) `,
      forceIt => {
        if (forceIt.match(/y|yes|true/)) {
          return main([path], forceIt);
        } else {
          console.log("Keeping the file untouched.");
          process.exit(1);
        }
      }
    );
  }
  const content = [
    "---",
    "title: Just Another Contentz Slide",
    "description: Just Another  description Contentz.",
    `date: ${new Date().toJSON()}`,
    "published: false # Change to `true` to list it",
    "---",
    "",
    "# Here be dragons",
    "",
    "---",
    "",
    "# Here be emojics 👋",
    ""
  ].join("\n");

  const { dir } = parse(path);
  if (dir !== "") await makeDir(join("./slides", dir));
  await writeFile(join("./slides/", path), content);

  if (process.env.EDITOR) {
    console.log(`Slide ${join("./slides/", path)} created, opening editor...`);
    openEditor([{ file: join("./slides/", path), line: 7 }]);
  } else {
    console.log(`Slide ${join("./slides/", path)} created.`);
  }
}

module.exports = main;
