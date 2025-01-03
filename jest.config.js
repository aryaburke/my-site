/** @type {import('ts-jest').JestConfigWithTsJest} **/
module.exports = {
  testEnvironment: "node",
  transform: {
    "^.+.tsx?$": ["ts-jest", {}],
  },
  // Mock image imports
  moduleNameMapper: {
    ".+\\.(css|styl|less|sass|scss|png|jpg|jpeg|ttf|woff|woff2|JPG)$":
      "identity-obj-proxy",
  },
};
