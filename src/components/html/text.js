const { jsx } = require("@emotion/core");
const parse = require("parse-url");

exports.P = props =>
  jsx(
    "div",
    Object.assign({}, props, {
      css: {
        margin: "1em 0",
        fontSize: "1.25em"
      }
    })
  );

exports.Blockquote = props =>
  jsx(
    "blockquote",
    Object.assign({}, props, {
      css: {
        borderLeft: "3px solid black",
        boxSizing: "border-box",
        paddingLeft: "calc(2em - 3px)",
        marginLeft: "-2em",
        marginRight: 0,
        fontWeight: "normal",
        fontSize: "1em",
        P: {
          margin: 0
        },
        "@media (prefers-color-scheme: dark)": {
          borderLeftColor: "white"
        }
      }
    })
  );

// exports.Mark = props =>
//   jsx(
//     "mark",
//     Object.assign({}, props, {
//       css: {
//         backgroundColor: "#f81ce5",
//         color: "white",
//         padding: "0.125em 0.2em"
//       }
//     })
//   );

exports.Anchor = props =>
  jsx(
    "a",
    Object.assign(
      {},
      props,
      {
        target: !parse(props.href).resource ? "_self" : "_blank",
        css: {
          color: "#067df7",
          textDecoration: "underline"
        }
      },
      !parse(props.href).resource ? {} : { rel: "nofollow noopener" }
    )
  );