/* Store: home */

module.exports = function (state: any, emitter: any) {
  state.name = ""

  emitter.on('name:update', function(name: any) {
    state.name = name
    emitter.emit('render')
  })
}
