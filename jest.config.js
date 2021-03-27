// https://www.gatsbyjs.org/docs/unit-testing/

module.exports = {
  transform: {
    "^.+\\.[jt]sx?$": "<rootDir>/jest.transform.js",
  },
  moduleNameMapper: {
    ".+\\.(css|styl|less|sass|scss)$": "identity-obj-proxy",
    ".+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/__mocks__/file.mock.js",
    "^@src/(.*)$": "<rootDir>/src/$1",
    "^@components/(.*)$": "<rootDir>/src/components/$1",
  },
  testPathIgnorePatterns: ["node_modules", "\\.cache", "public", "cypress"],
  transformIgnorePatterns: ["node_modules/(?!(gatsby)/)"],
  collectCoverageFrom: ["src/**/*"],
  globals: {
    __PATH_PREFIX__: "",
  },
  testURL: "http://localhost:8000",
  setupFiles: ["<rootDir>/jest.setup.js"],
  setupFilesAfterEnv: ["<rootDir>/jest.setupAfterEnv.js"],
}
