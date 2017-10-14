# <%= projectName %>

```txt
assets/        images and fonts, if you have any
components/    views that are directly mounted on the router
stores/        states that are used in components
client.js      main application entry; programmatic manifest file
package.json   manifest file
```

You can use choo-cli to generate pieces of your project as you are developing.
For example you can generate

Components
```bash
$ choo generate component my-component
```

Stores
```bash
$ choo generate store my-store
```

## npm scripts

Choo-cli was made for generating choo projects and code, and leverages npm scripts
for certain project task. So in our project a set of npm scripts have already
been generated that perform various tasks such as testing/serving/building/etc.

At any time you can review the complete list of `npm scripts` available by viewing
[package.json](./package.json) or by running the following command:

```
$ npm run
```

Here is complete list the the commands and their function
- start - start dev server at [localhost:8080](https://localhost:8080)
- build - builds your project to deploy to a server
- test - runs unit tests, for now it will just run linting.
- lint - runs eslint against your code

So for example you can run `npm start` to start a dev server. You can now see your
app running at [localhost:8080](https://localhost:8080)
