export default [
  {
    files: ["**/*.js"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
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
