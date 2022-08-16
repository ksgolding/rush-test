// This is a workaround for https://github.com/eslint/eslint/issues/3458
require('@rushstack/eslint-config/patch/modern-module-resolution');
// Please see https://www.npmjs.com/package/@rushstack/eslint-config for
// information about options.
module.exports = {
  extends: [
    "@rushstack/eslint-config/profile/web-app"
  ],
  parserOptions: { tsconfigRootDir: __dirname }
};