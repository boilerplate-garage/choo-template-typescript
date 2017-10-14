/* Component: home */

const html = require('choo/html')

module.exports = function (state, emit) {
  return html`
    <body>
      <h1>Hello, World!</h1>
      <p>If you are seeing this, then the generator works!</p>
      <h2>Demo</h2>
      <h3>${state.name}</h3>
      <input type="text" oninput=${update} value=${state.name} />
    </body>
  `

  function update (e) {
    emit('name:update', e.target.value)
  }
}
