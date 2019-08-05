module.exports = {
  plugins: {
    // to edit target browsers: use "browserslist" field in package.json
    autoprefixer: { 
      browsers: ['last 10 Chrome versions', 'last 5 Firefox versions', 'Safari >= 6', 'ie> 8'] 
    },
    "postcss-px2rem": {
      baseDpr: 1, // base device pixel ratio (default: 2)
      threeVersion: false, // whether to generate @1x, @2x and @3x version (default: false)
      remVersion: true, // whether to generate rem version (default: true)
      remUnit: 37.5, // rem unit value (default: 75)
      remPrecision: 6, // rem precision (default: 6)
    },
  },
}


// module.exports = {
//   plugins: {
//     // to edit target browsers: use "browserslist" field in package.json
//     autoprefixer: {},
//     "postcss-px2rem": {
//       baseDpr: 1, // base device pixel ratio (default: 2)
//       threeVersion: false, // whether to generate @1x, @2x and @3x version (default: false)
//       remVersion: true, // whether to generate rem version (default: true)
//       remUnit: 37.5, // rem unit value (default: 75)
//       remPrecision: 6, // rem precision (default: 6)
//     },
//   },
// }
