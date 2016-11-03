const EventEmitter = require('events')

class OpenTracingAPI extends EventEmitter {
  constructor (options) {
    super()
  }

  init (options) {
    this.options = Object.assign({}, options)
  }
}

// export constructor for the API
module.exports.OpenTracing = OpenTracingAPI
// export actual module
module.exports = new OpenTracingAPI()
