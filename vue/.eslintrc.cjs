module.exports = {
  parserOptions: {
    parser: '@typescript-eslint/parser',
    sourceType: "module"
  },
  env: {
    es6: true,
    browser: true
  },
  plugins: ["simple-import-sort", "import", "@typescript-eslint"],
  extends: [
    'plugin:vue/vue3-recommended',
    '@vue/typescript/recommended',
  ],
  rules: {
    "simple-import-sort/imports": [
      "error",
      {
        groups:[
          ["^.+\\.s?css$"],
          ["^vue$"],
          ["^src/\\w"],
          ["^src\/.*\.vue$"]
        ]
      }
    ],
    "simple-import-sort/exports": "error",
    "import/first": "error",
    "import/newline-after-import": "error",
    "import/no-duplicates": "error",
  },
}
