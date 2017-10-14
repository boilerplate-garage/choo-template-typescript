/* Component: <%= name %> */

const html = require('choo/html')

module.exports = function (state, prev, send) {
  return html`
    <main>
      <h1><%= name %></h1>
    </main>
  `
}
