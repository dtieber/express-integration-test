module.exports = {
    roots: [
        "<rootDir>/src"
    ],
    transform: {
        "^.+\\.tsx?$": "ts-jest"
    },
    testMatch: [
        "<rootDir>/**/__tests__/*.test.ts"
    ],
    moduleFileExtensions: [
        "ts",
        "js",
        "json",
        "node"
    ],
    testEnvironment: "node"
}