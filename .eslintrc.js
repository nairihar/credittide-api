module.exports = {
  "extends": "airbnb-base",
  "rules": {
    "indent": ["error", 4],
    "no-console": process.env.ENV === 'production' ? "error" : "off",
    "func-names": "off",
    "camelcase": [0, {"properties": "never"}],
    "consistent-return": "off",
    "key-spacing": ["error", { "align": "colon" }],
    "no-param-reassign": "off",
    "no-plusplus": "off",
    "default-case": "off",
    "no-underscore-dangle": "off",
    "eqeqeq": "off",
    "brace-style": "off",
    "no-nested-ternary": "off",
    "import/no-extraneous-dependencies": ["error", {"devDependencies": true}],
    "semi": ["error", "never"]
  },
  "env": {
    "node": true,
    "es6": true,
    "mocha": true,
  }
};
