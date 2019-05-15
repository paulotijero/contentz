const prompt = require("cli-prompt");
const { join, parse } = require("path");
const openEditor = require("path");

const { writeFile, exists, makeDir } = require("@contentz/utils/fs");

async function main([path], force = false) {
  // -----------------------
  // TODO: Reviewr code read file .yml
  // var fs = require("fs");

  // fs.readFile("temp.txt", function(err, buf) {
  //   console.log(buf.toString());
  // });
  // -----------------------
  // TODO: this code verify if exist path and overwrite
  // if (!force && (await exists(join("./links.yml/", path)))) {
  //   return prompt(
  //     `The file ${path} already exists, do you want to overwrite it? (y/N) `,
  //     forceIt => {
  //       if (forceIt.match(/y|yes|true/)) {
  //         return main([path], forceIt);
  //       } else {
  //         console.log("Keeping the file untouched.");
  //         process.exit(1);
  //       }
  //     }
  //   );
  // }
  const content = [
    "---",
    `- url: ${path}`,
    "  title: Just Another Contentz Title Link",
    "  comment: Just Another Contentz Comment Link",
    `  date: ${new Date().toJSON()}`
  ].join("\n");

  await writeFile(join("./links.yml"), content);

  if (process.env.EDITOR) {
    console.log(`Link ${path} created, opning editor...`);
    openEditor([{ file: "./links.yml", line: 5 }]);
  } else {
    console.log(`Link ${path} created.`);
  }
}

module.exports = main;
