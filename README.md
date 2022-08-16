# Notes:

## prettier

I followed the rush prettier instructions here: https://rushjs.io/pages/maintainer/enabling_prettier/

I think everything, but maybe the pre-commit hook is good. Might re-evaluate that later.

Running: `rush prettier` will fix all git staged files.

If prettier is installed globally (`npm install -g prettier`), the prettier commands can be used anywhere in the project, and it will work with the root prettier config.

Installing the vscode prettier plugin is recommended.

https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode

Only 1 prettier config is needed for the entire monorepo.



## eslint

  eslint and prettier as separate things. Adding this note, as I was mixing their purposes. RUSH keeps these tools separate, which is actually a good thing, as prettier can be applied  globally, where as eslint needs different behavior depending on the project type. 

Installing the vscode eslint plugin is recommended.

https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint

For configuration options See:
https://www.npmjs.com/package/@rushstack/eslint-config

Every project requires a .eslint.rc file, and needs to add the following npm package @rushstack/eslint-config:

Example:

```javascript
// This is a workaround for https://github.com/eslint/eslint/issues/3458
require('@rushstack/eslint-config/patch/modern-module-resolution');

module.exports = {
  extends: [
    "@rushstack/eslint-config/profile/web-app"
  ],
  parserOptions: { tsconfigRootDir: __dirname }
};
```

See https://www.npmjs.com/package/@rushstack/eslint-config for options.