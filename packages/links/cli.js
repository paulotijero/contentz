const meow = require("meow");
const chalk = require("chalk");

const pkg = require("./package.json");
const command = require("./src/index");

async function main() {
  const cli = meow(
    `${chalk.white("Usage")}
    $ ${chalk.cyan("contentz-links")} Generate a link for content
    $ ${chalk.cyan("contentz-links help")} Show this message
  `,
    {
      description: `${chalk.cyan("Contentz Links")} - ${pkg.description}`
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
