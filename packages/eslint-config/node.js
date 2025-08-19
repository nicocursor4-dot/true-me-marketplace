module.exports = {
  extends: ["./base.js"],
  env: {
    node: true,
    es6: true
  },
  rules: {
    "no-console": "warn",
    "@typescript-eslint/no-var-requires": "off"
  }
};
