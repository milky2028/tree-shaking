const path = require("path");

module.exports = {
  mode: "production",
  entry: {
    "class": "./src/class-entry.js",
    "module": "./src/module-entry.js",
  },
  output: {
    filename: "[name]-webpack.js",
    path: path.resolve(__dirname, "webpack-build"),
  },
};
