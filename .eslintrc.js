module.exports = {
  parser: '@typescript-eslint/parser', //定义ESLint的解析器
  extends: [
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended'
  ], //定义文件继承的子规范
  plugins: ['@typescript-eslint'], //定义了该eslint文件所依赖的插件
  parserOptions: {
    //指定ESLint可以解析JSX语法
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      modules: true,
    },
  },
  settings: {
    //自动发现React的版本，从而进行规范react代码
    react: {
      pragma: 'React',
      version: 'detect',
    },
  },
  env: {
    //指定代码的运行环境
    browser: true,
    node: true,
    es6: true,
    jest: true,
  },
  rules: {
    "@typescript-eslint/explicit-function-return-type":0,
    "@typescript-eslint/no-var-requires":0,
    "@typescript-eslint/no-explicit-any":0,
    // "@typescript-eslint/interface-name-prefix":[2,'always']
    "@typescript-eslint/interface-name-prefix":0,
    'eqeqeq':[
      'error',
      'always',
      {
        null:'ignore'
      }
    ],
    'indent':[
      'error',2,{
        'SwitchCase':1,
        'MemberExpression':1,
        'ObjectExpression':1,
        'ImportDeclaration':1,
        // 'outIIFEBody':1,
      }
    ],
    'default-case':2,
    'no-constant-condition':2,
    'no-return-await':2,
    'no-tabs':2,
    'quotes':[2,'single'],
    'no-console':0
  },
}
