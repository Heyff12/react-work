module.exports = {
    "setupFiles": ['<rootDir>/tests/setup'],
    "preset": "ts-jest",
    "verbose": true,
    "testRegex": "./src/.*.spec.(t|j)sx?$",

    "transform": {
        "^.+\\.(j|t)sx?$": "ts-jest",
        "^.+\\.(css|png)$": "jest-transform-stub",
        // "^.+\\.js$": "<rootDir>/node_modules/babel-jest",
        // "^.+\\.tsx?$": "<rootDir>/node_modules/ts-jest/preprocessor.js"
    },
    "moduleNameMapper": {
        "^@/(.*)$": "<rootDir>/src/$1",
        "\\.(css|less)$": 'identity-obj-proxy',
        // "\\.(css|less)$": '<rootDir>/tests/__mock__/styleMock.js',
        "\\.(jpg|png|jpeg|svg|gif|otf|webp|eot|ttf|woff|woff2|mp4)$": '<rootDir>/tests/__mock__/fileMock.js',
    },
    "testPathIgnorePatterns": ['/node_modules'],
    "moduleFileExtensions": [
        "js",
        "json",
        "ts",
        "tsx",
    ],
    // 支持源代码中相同的 `@` -> `src` 别名
    "collectCoverage": true,
    "collectCoverageFrom": [
      "./src/components/**/*.{js,tsx,ts}",
      "./src/pages/**/*.{js,tsx,ts}",
      "./src/utils/**/*.{js,ts}",
      "./src/store/reducers/**/*.{js,ts}",
    ],
    "coverageThreshold": {
        global: {
            statements: 0,
            branches: 0,
            functions: 0,
            lines: 0,
        }
    },
    "globals": {
        'ts-jest': {
            'diagnostics': false,
            'tsConfig': '<rootDir>/tsconfig.test.json'
        }
    }
    // "testEnvironment": "node"
    // "coverageReporters": ["html", "text-summary"],//默认格式的测试覆盖率报告
    // 快照的序列化工具
    // "snapshotSerializers": ["jest-serializer-vue"],
}