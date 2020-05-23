<div align="center">
  <a href="https://github.com/webpack/webpack">
    <img width="200" height="200" src="https://webpack.js.org/assets/icon-square-big.svg">
  </a>
</div>

[![npm][npm]][npm-url]
[![node][node]][node-url]
[![cover][cover]][cover-url]
[![chat][chat]][chat-url]
[![size][size]][size-url]

# jsonc-loader

The `jsonc-loader` resolves `import/require()` on a JSONC(or [jsonc](https://komkom.github.io/)) file into legit JSON object.

## Getting Started

To begin, you'll need to install `jsonc-loader`:

```bash
$ npm install jsonc-loader --save-dev
```

Then add the loader to your `webpack` config. For example:

**harrypotter.jsonc**

```jsonc
/**
 * @description This is a json file describing harrypotter book series, with some comment enabled
 * @author John Doe
 */
{
  "1st": { "name": "Harry Potter and the Sorcerer's Stone" }, // inline comment is also fine
  "2nd": { "name": "Harry Potter and the Chamber of Secrets" },
  "3rd": { "name": "Harry Potter and the Prisoner of Azkaban" },
  "4th": { "name": "Harry Potter and the Goblet of Fire" },
  "5th": { "name": "Harry Potter and the Order of the Phoenix" },
  "6th": { "name": "Harry Potter and the Half-Blood Prince" },
  "7th": { "name": "Harry Potter and the Deathly Hallows" }
}
```

**webpack.config.js**

```js
module.exports = {
  module: {
    rules: [
      {
        test: /.jsonc$/,
        use: [
          {
            loader: `jsonc-loader`,
          },
        ],
      },
    ],
  },
};
```

And run `webpack` via your preferred method.

## Contributing

Please take a moment to read our contributing guidelines if you haven't yet done so.

[CONTRIBUTING](./.github/CONTRIBUTING.md)

## License

[MIT](./LICENSE)

[npm]: https://img.shields.io/npm/v/jsonc-loader.svg
[npm-url]: https://npmjs.com/package/jsonc-loader
[node]: https://img.shields.io/node/v/jsonc-loader.svg
[node-url]: https://nodejs.org
[tests-url]: https://dev.azure.com/webpack-contrib/jsonc-loader/_build/latest?definitionId=2&branchName=master
[cover]: https://codecov.io/gh/webpack-contrib/jsonc-loader/branch/master/graph/badge.svg
[cover-url]: https://codecov.io/gh/rianma/jsonc-loader
[chat-url]: https://gitter.im/webpack/webpack
[size]: https://packagephobia.now.sh/badge?p=jsonc-loader
[size-url]: https://packagephobia.now.sh/result?p=jsonc-loader
