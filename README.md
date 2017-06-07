# fp-reduce

A curried reduce function that takes a reducer, initial value and collection. When invoked it will iterate the collection values over the reducer function returning a single value.

`reduce(reducer : function, initialValue : any, list : array)`

## What is a reducer function?

A reducer function is a function that takes two arguments:

* accumulator
* value

The accumulator is the initialValue on the first turn of the
reduce process, then it is is the returned value of each reduce function.

for example: if we wanted to implement a count reducer function.

```
const count = function (accumulator=0, value) {
  return accumulator + 1  
}
```

When we use the count reducer in a reduce statement we will
get the count of the list.

`reduce(count, 0, [1,2,3,4]) // === 4`

Using `fp-reduce` you can create a pure count function by
leveraging the auto-curry feature.

```
const count = reduce(function(acc, v) {
  return acc + 1
}, 0)

count([1,2,3,4])
```

Using `fp-reduce` you can also create a sum function

```
const sum = reduce(function (acc, v) {
  return acc + v
}, 0)

sum([1,2,3]) // === 6
```

Visual Example: https://goo.gl/Jtn08A

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
