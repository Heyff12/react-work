const path = require("path")

module.exports = {
  alias: {
    "@": path.resolve(__dirname, "../src"),
  },
  extensions: [".ts", ".tsx", ".js", ".json", ".scss", ".less"],
}