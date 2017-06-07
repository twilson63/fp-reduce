const test = require('tape')

const reduce = require('./')
const add = (x, y) => x + y

test('sum 1234', function(t) {
  const total = reduce(add, 0, [1, 2, 3, 4])
  t.equals(total, 10)
  t.end()
})

test('curried sum 1234', function(t) {
  const sum = reduce(add, 0)
  t.equals(sum([1, 2, 3]), 6)
  t.end()
})
