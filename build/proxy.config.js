const yargs = require("yargs").argv

const { env } = yargs
const mockData = {
  dev: "https://dev-yaya.com/",
  uat: "https://uat-yaya.com/",
  qauat: "https://qa-yaya.com"
}

// eg cli: `yarn start --env.m local`
const target =
  env && env.m !== undefined ? mockData[env.m] || mockData.dev : mockData.dev

console.log(`
Proxy url is:

${target}\n`)

module.exports = {
  context: pathname =>
    !!pathname.match("^/api") || !!pathname.match("^/log(in|out)"),
  target: mockData.local,
  changeOrigin: true,
}
