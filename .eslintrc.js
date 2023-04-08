module.exports = {
  root: true,
  extends: ["prettier", "plugin:prettier/recommended"],
  plugins: ["prettier"],
  rules: {
    "prettier/prettier": "error",
  },
  ignorePatterns: ["**/dist/**/*"],
};
