const path = require("path");

module.exports = {
  mode: "production",
  entry: {
    "class-entry": "./src/class-entry.js",
    "module-entry": "./src/module-entry.js",
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "webpack-build"),
  },
};
