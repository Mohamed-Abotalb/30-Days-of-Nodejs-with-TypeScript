# Console

The **console** module provides us with debugging console similar to javascript console mechanism web browsers provide us. It exports two components :

1. **console class** : It includes methods such as `console.log()` , `console.warn()` , `console.error()` which we can use to write to node.js streams.
2. **Global console instance** : This method is configured to write on `process.stderr()` , `process.stdout()` and it can be used without exclusively calling the module `require('console')`.

In this part of node.js tutorial series we learned about the following :

- Introduction to console
  1. Console class
  2. Global console instance
- console.log() and all its variations
- Create a new console
- console.clear()
- console.count()
- console.countReset()
- console.error()
- console.time() and console.timeEnd()
- console.warn()
