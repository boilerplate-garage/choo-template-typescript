/* Component notFound */

const html = require('choo/html')

module.exports = function (state, emit) {
  return html`
    <body>
      <div>Page not found</div>
    </body>
  `
}
