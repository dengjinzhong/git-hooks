module.exports = {
  env: { es6: true },
  extends: ["eslint:recommended", "prettier"],
  parserOptions: {
    ecmaVersion: 6,
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    "no-unused-vars": [2, { vars: "local", args: "after-used" }],
  },
};
