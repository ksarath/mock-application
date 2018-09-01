module.exports = {
  "verbose": true,
  "transform": {
    "^.+\\.jsx?$": "babel-jest"
  },
  "transformIgnorePatterns": [
    "<rootDir>/dist/", "<rootDir>/node_modules/"
  ],
  "moduleNameMapper": {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/src/test/mocks/fileMock.js",
    "\\.(css|less)$": "identity-obj-proxy"
  },
  "setupFiles": [
    "<rootDir>/setupTests.js"
  ],
  "automock": false
};
