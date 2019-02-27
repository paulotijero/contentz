const getArticle = require("./lib/get-articles");
const getConfig = require("./lib/get-config");
const renderArticle = require("./lib/render-article");
const renderHome = require("./lib/render-home");
const renderArchive = require("./lib/render-archive");

async function main() {
  console.log("Getting configuration and list of articles");
  const [config, articles] = await Promise.all([getConfig(), getArticle()]);
  console.log("Rendering articles and home page");
  await Promise.all([
    ...articles.map(article => renderArticle(article, config)),
    renderHome(config),
    renderArchive(config, articles)
  ]);
}

main()
  .then(() => console.log("Done! Your website has been succesfully built."))
  .catch(error => {
    console.error("Error building your website.");
    console.error(error);
    process.exit(1);
  });
