const test = require('tape')

test('require module without throwing', function (t) {
  t.plan(1)
  t.doesNotThrow(function () {
    require('../')
  })
})
