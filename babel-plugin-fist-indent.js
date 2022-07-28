const { parse } = require("@babel/parser");

module.exports = function () {
  return {
    name: "babel-plugin-fist-indent",
    parserOverride: (code, opts) => {
      const tokens = ["🤜"];
      const reg = new RegExp(`^${tokens.join("")}+`, "giu");
      const indented = code
        .split("\n")
        .map((line) => line.replace(reg, ""))
        .join("\n");
      return parse(indented, opts);
    },
  };
};
