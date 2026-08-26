- A variable is a named container to store data.
- Variable name should be in cammel case and not start with number and special symbol
- Variable name should be meaning full

Types of Variable Declarations
------------------------------
1. var
- var can be `Gloabl` if declared outside of function/block
- var can be `Funtion` if declared inside function block
- var not support `Block scope` (unsafe sometimes)
- Can be redeclared & updated
- Hoisted (initialized with undefined)

✅ Loop Behavior
```js
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1000);
}
// output : 333
```

2. let 
- Block scoped
- Can't be redeclared but updated is possible
- Hoisted but placed in TDZ (not initialized)(not get an memory)

✅ Loop Behavior
```js
for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1000);
}
// output : 333
```


3. const 
- Block scoped
- Can't be redeclared & updated but check below
- "address can't change but data on that address we can change"
- const creates an immutable binding (reference), not an immutable object.
- This binding cannot be reassigned after initialization.
```js
const a=10;
a=20; // Not Allowed cause we changing or assigning new reference to a variable of memorblock of 20 value 

const obj = { name: "Rahul" };
obj.name = "Boss"; // ✅ Update Allowed

const arr = [1, 2];
arr.push(3); // ✅ Update Allowed
```
- Hoisted but placed in TDZ (not initialized)(not get an memory)


| Feature     | `var`           | `let`    | `const`   |
|-------------|-----------------|----------|-----------|
| Scope       | Function        | Block    | Block     |
| Re-declare  | ✅ Yes         | ❌ No    | ❌ No    |
| Re-assign   | ✅ Yes         | ✅ Yes   | ❌ No    |
| Hoisting    | ✅ (undefined) | ✅ (TDZ) | ✅ (TDZ) |
| Block scope | ❌ No          | ✅ Yes   | ✅ Yes   |

Trick : scope -> redeclared & updated -> hoisted