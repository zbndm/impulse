module.exports = {
  root: true,
  "rules": { "react/no-unescaped-entities": 0 },
  // This tells ESLint to load the config from the package `eslint-config-custom`
  extends: ["custom"],
  settings: {
    next: {
      rootDir: ["apps/*/"],
    },
  },
};
