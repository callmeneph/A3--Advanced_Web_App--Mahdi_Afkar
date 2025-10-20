// functions/eslint.config.js
export default [
  {
    files: ["**/*.js"],
    ignores: ["node_modules/**", "lib/**"], // adjust if you have a build output folder
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "module", // you’re on Node 20; Firebase Functions supports ESM
      globals: {
        console: "readonly",
        fetch: "readonly",
      },
    },
  },
];
