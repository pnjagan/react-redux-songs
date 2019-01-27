module.exports = {
  "extends": ["airbnb"],
  "rules": {
    "react/jsx-filename-extension": [
      1,
      {
        "extensions": [".js", ".jsx"]
      }
    ],
    "react/prop-types": 0,
    "no-underscore-dangle": 0,
    "import/imports-first": ["error", "absolute-first"],
    "import/newline-after-import": "error",
    "react/destructuring-assignment": 0,

    "no-plusplus": ["error", { "allowForLoopAfterthoughts":true } ],
    "key-spacing": ["error", { "align": "colon" } ],
    "no-multi-spaces": 0,
  },
  "globals": {
    "window": true,
    "document": true,
    "localStorage": true,
    "FormData": true,
    "FileReader": true,
    "Blob": true,
    "navigator": true
  },
  "parser": "babel-eslint"
}
