/// <reference path="./typings/index.d.ts" />

const choo = require('choo')
const log = require('choo-log')
const app = choo()

app.use(log())
app.use(require('./stores/home'))

app.route('/404', require('./components/not-found.js'));
app.route('/', require('./components/home'));

// Support for Server-Side Rendering
if (!module.parent) {
  app.mount('body')
} else {
  module.exports = app
}
