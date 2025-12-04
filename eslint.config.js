module.exports = [
  {
    files: ["**/*.js"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "script",
      globals: {
        window: "readonly",
        document: "readonly"
      }
    },
    rules: {
      semi: "error",
      quotes: ["error", "single"],
      "no-unused-vars": "warn"
    }
  }
];
