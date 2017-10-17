/// <reference path="../typings/index.d.ts" />

import * as choo from 'choo'
import * as log from 'choo-log'

const app = new choo({})

app.use(log())
app.use(require('./stores/home'))

app.route('/404', require('./components/not-found'));
app.route('/', require('./components/home'));

// Support for Server-Side Rendering
if (!module.parent) {
  app.mount('body')
} else {
  module.exports = app
}
