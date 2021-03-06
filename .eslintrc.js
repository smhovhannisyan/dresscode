const path = require('path');

module.exports = {
  "root": true,
  "extends": [
    "airbnb"
  ],
  "env": {
    "browser": true
  },
  "parser": "babel-eslint",
  "settings": {
    "import/resolver": {
      "webpack": {
        "config": path.resolve(__dirname, '.storybook', 'webpack.config.js')
      }
    }
  },
  "rules": {
    "react/no-find-dom-node": "off",
    "jsx-quotes": ["error", "prefer-single"],
    "react/jsx-filename-extension": ["error", { "extensions": [".jsx", ".js"] }],
    "no-plusplus": "off",
    "no-continue": "off",
    "no-case-declarations": "off",
    "jsx-a11y/label-has-for": 0,
    "jsx-a11y/label-has-associated-control": 0,
    "import/prefer-default-export": "off",
    "no-console": "off",
    "react/no-danger": "off",
    "react/forbid-prop-types": "off",
    "import/no-extraneous-dependencies": "off",
    "no-nested-ternary": "off",
    "object-curly-newline": ["error", {
      "ExportDeclaration": { "multiline": true, "minProperties": 6, "consistent": true }
    }],
    "no-param-reassign": ["error", { "props": false }],
    "jsx-a11y/accessible-emoji": 0,
    "react/no-array-index-key": 0,
    "max-len": ["error", 120, 2, {
      'ignoreUrls': true,
      'ignoreComments': false
    }],
    "import/no-webpack-loader-syntax": 0,
    "react/jsx-props-no-spreading": 0,
    "arrow-parens": [2, "as-needed", { "requireForBlockBody": true }],
    "react/static-property-placement": [0],
    "react/state-in-constructor": [0, 'never']
  }
};
