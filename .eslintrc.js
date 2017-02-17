module.exports = {
  "extends": ["eslint:recommended", "plugin:react/recommended", "standard"],
  "plugins": ["react"],
  "rules": {
    "no-console": 1,
    "no-var": 2,
    "no-confusing-arrow": ["error", {"allowParens": false}],
    "no-const-assign": 2,
    "object-shorthand": ["error", "always"],
    "prefer-const": 2,
    "prefer-template": 2
  }
}
