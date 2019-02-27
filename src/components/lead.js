const { jsx } = require("@emotion/core");
const format = require("date-fns/format");

exports.Title = props =>
  jsx(
    "h1",
    Object.assign({}, props, {
      css: {
        fontSize: "2.25em",
        fontWeight: "bold",
        letterSpacing: "-0.028em",
        margin: "1em 0"
      }
    }),
    props.children
  );

exports.Description = props =>
  jsx(
    "p",
    Object.assign({}, props, {
      css: {
        borderLeft: "3px solid black",
        boxSizing: "border-box",
        paddingLeft: "calc(0.5em - 3px)",
        margin: "-1em 0 1em -0.5em",
        fontSize: "1.5em",
        fontWeight: 200,
        "@media (prefers-color-scheme: dark)": {
          borderLeftColor: "white"
        }
      }
    }),
    props.children
  );

exports.Date = props =>
  jsx(
    "time",
    Object.assign({}, props, {
      dateTime: props.date.toJSON(),
      css: {
        position: "absolute",
        right: 0,
        bottom: "100%"
      }
    }),
    "Posted on ",
    jsx("strong", null, format(props.date, "MMMM DD, YYYY"))
  );