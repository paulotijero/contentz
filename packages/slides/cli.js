#!/usr/bin/env node
const meow = require("meow");
const chalk = require("chalk");

const pkg = require("./package.json");
const command = require("./src/index");

async function main() {
  const cli = meow(
    `${chalk.white("Usage")}
    $ ${chalk.cyan("contentz-slide")} Write a new slide using Contentz
    $ ${chalk.cyan("contentz-slide help")} Show this message
  `,
    {
      description: `${chalk.cyan("Contentz slide")} - ${pkg.description}`
    }
  );

  let args = cli.input;
  cmd = args[0].toLowerCase();

  switch (cmd) {
    case "help": {
      return cli.showHelp(0);
    }
    default: {
      await command(args);
      return;
    }
  }
}

main().catch(error => {
  console.error(error);
  process.exit(1);
});
