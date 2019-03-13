const { jsx } = require("@emotion/core");

const ui = require("./ui");
const { Title, Description, Date } = require("./lead");

const Header = require("./header");
const Footer = require("./footer");
const CanonicalURL = require("./canonical");
const Translated = require("./translated");
const ReadNext = require("./read-next");

function Layout({ config, data, path, Component }) {
  if (!data.title) throw new Error("Article title is required!");
  return jsx(
    "div",
    { css: { position: "relative" } },
    jsx(Header, { ...config }),
    jsx(
      "section",
      {
        css: {
          margin: "0 auto",
          maxWidth: "40em",
          width: "100%",
          "@media (max-width: 40em)": {
            fontSize: "0.9em",
            boxSizing: "border-box",
            padding: "0 2em"
          }
        }
      },
      jsx(Title, null, data.title),
      data.date && jsx(Date, { date: data.date }),
      data.description && jsx(Description, null, data.description),
      data.canonical_url && jsx(CanonicalURL, { value: data.canonical_url }),
      data.translated_from && jsx(Translated.From, data.translated_from),
      data.translated_to &&
        jsx(Translated.To, { translations: data.translated_to }),
      jsx(Component, { components: ui }),
      data.next && jsx(ReadNext, data.next)
    ),
    jsx(Footer, {
      patreon: config.patreon,
      repository: config.repository,
      file: path || null
    })
  );
}

module.exports = Layout;
