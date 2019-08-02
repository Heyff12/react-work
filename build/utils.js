const path = require("path")
// TODO: change static file's path
exports.assetsPath = function(_path) {
  const assetsSubDirectory = "static"

  return path.posix.join(assetsSubDirectory, _path)
}
