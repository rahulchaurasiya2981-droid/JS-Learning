Data Types in JS
-----------------
- In JavaScript, data types tell us what kind of value a variable is holding.
- DT tells a computer compiler or interpreter how the programmer intends to use that data

Types
------
1. Primitive Data Types — 7
- Primitive values are individual values, not objects.
| Data Type   | Example                 | Meaning             |
| ----------- | ----------------------- | ------------------- |
| `Number`    | `let age = 23`          | Numbers             |
| `String`    | `let name = "Rahul"`    | Text                |
| `Boolean`   | `let isLogin = true`    | `true` / `false`    |
| `Undefined` | `let x;`                | Value not assigned  |
| `Null`      | `let x = null`          | Intentionally empty |
| `BigInt`    | `let x = 123n`          | Very large integers |
| `Symbol`    | `let id = Symbol("id")` | Unique identifier   |


2. Non-Primitive Data Type — 1
- Objects store collections of values of Primitive DT.
```js
const user = {
  name: "Rahul",
  age: 23
};
```
- Arrays and functions are also technically objects:
```js
const arr=[10,20,30];
function hello()
{
    console.log("Hello");
}
```

How to check a data type
-------------------------
- Used typeof
```js
typeof 10              // "number"
typeof "Rahul"         // "string"
typeof true            // "boolean"
typeof undefined       // "undefined"
typeof 123n            // "bigint"
typeof Symbol("id")    // "symbol"
typeof {}              // "object"
typeof []              // "object"
typeof function() {}   // "function"
```
- One very important JavaScript interview point:
```js
typeof null // "object"
```
- null mean "There is intentionally no value here."
- null is simply a special primitive value representing absence of an object/value.
```js
let user = null; // user → no value
```
null
│
├── Is it primitive? ✅ YES
│
├── Does it represent an object? ❌ No
│
├── Does typeof null return "object"? ✅ Yes
│
└── Why? Historical JavaScript behavior


Summary
-------
JavaScript Data Types
│
├── Primitive
│   ├── Number
│   ├── String
│   ├── Boolean
│   ├── Undefined
│   ├── Null
│   ├── BigInt
│   └── Symbol
│
└── Non-Primitive
    └── Object
        ├── Array
        ├── Function
        ├── Date
        ├── Map
        └── Set