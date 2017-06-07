# fp-reduce

A curried reduce function that takes a reducer, initial value and collection. When invoked it will iterate the collection values over the reducer function returning a single value.

## Install

`npm install fp-reduce`

## Usage

```
const add = function (a, b) {
  return a + b
}

const sum = reduce(add, 0)

console.log(sum([1,2,3]))
```
