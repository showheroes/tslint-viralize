# tslint-viralize

Tslint rules to enforce Viralize standards and best practices during development of typescript project in Viralize

## Install

1. Install the correct versions of each package, which are listed by the command:

  ```sh
  npm info "tslint-viralize@latest" peerDependencies
  ```

  If using **npm 5+**, use this shortcut

  ```sh
  npx install-peerdeps --dev tslint-viralize
  ```

  If using **npm < 5**, Linux/OSX users can run

  ```sh
  (
    export PKG=tslint-viralize;
    npm info "$PKG@latest" peerDependencies --json | command sed 's/[\{\},]//g ; s/: /@/g' | xargs npm install --save-dev "$PKG@latest"
  )
  ```

  If using **npm < 5**, Windows users can either install all the peer dependencies manually, or use the [install-peerdeps](https://github.com/nathanhleung/install-peerdeps) cli tool.

  ```sh
  npm install -g install-peerdeps
  install-peerdeps --dev tslint-viralize
  ```

2. Add `"extends": "tslint-viralize"` to your tslint.json.

Some of the rules require type information. So in order to provide as much value as possible run TSLint with [type-checker](https://palantir.github.io/tslint/usage/type-checking/)