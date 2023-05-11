module.exports = {
  "env": {
    "browser": true,
    "es6": true,
    "node": true, // Add this line if you're using Node.js
    "jest/globals": true
  },
  "plugins": [ // Add this section
    "jest"
  ],
  "extends": [
    'eslint:recommended',
    'plugin:jest/recommended' // Add this line
  ],
  "parserOptions": {
    "ecmaVersion": 'latest'
  },
  "rules": {
    "indent": [
      "error",
      2
    ],
    "linebreak-style": [
      "error",
      "unix"
    ],
    "quotes": [
      "error",
      "single"
    ],
    "semi": [
      "error",
      "never"
    ]
  }
}
