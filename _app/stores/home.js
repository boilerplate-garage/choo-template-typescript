/* Store: home */

module.exports = function (state, emitter) {
  state.name = ""

  emitter.on('name:update', function(name) {
    state.name = name
    emitter.emit('render')
  })
}
