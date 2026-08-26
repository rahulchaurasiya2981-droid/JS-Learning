Operator in js
---------------
- An operator is a symbol or keyword that tells JavaScript to perform a specific operation on one or more operands
- Operators can be unary, binary, or ternary depending on the number of operands they operate on.”
```js
let a = 10 + 20;
```
- expression = "10 + 20" (Expression produce a value)
- Example :<>
```js
10 + 20
x > 10
user?.name
condition ? "yes" : "no"
```
- operand = "10,20"
- operator = "+"    


Types :
--------

1. Arithmetic Operators 
------------------------
- Used for mathematical operations.
| Operator | Meaning        |
| -------- | -------------- |
| `+`      | Addition       |
| `-`      | Subtraction    |
| `*`      | Multiplication |
| `/`      | Division       |
| `%`      | Remainder      |
| `**`     | Exponentiation |

- '%' : Give remainder after division
- '**' : 2**3 = 2^3 = 2*2*2 = 8 = a**b = a^b = a raised to b

2. Assignment Operators 
------------------------
- An operator that assigns a value or expression result to a variable.
- The basic assignment operator is =, and JavaScript also provides compound assignment operators like +=, -=, *=, /=, %=, and `=` that perform an operation and then assign the result back to the same variable.**
- Logical Assignment Operators (ES2021) = (&&=,||=,??=)

a. How assignment works in memory
-------------------------------
- The variable is binding with value
![variable pointing to memory block](./image/img1.png)

![variable rassignment pointing to next memory block](./image/img2.png)

b. Compound Assignment Operators
---------------------------------
- These operators combine an operation with assignment.
| Operator | Equivalent To |
| -------- | ------------- |
| `+=`     | `a = a + b`   |
| `-=`     | `a = a - b`   |
| `*=`     | `a = a * b`   |
| `/=`     | `a = a / b`   |
| `%=`     | `a = a % b`   |
| `**=`    | `a = a ** b`  |


3. Comparison Operators
-------------------------
- Comparison operators compare values and return a boolean.
```js
>    greater than
<    less than
>=   greater than or equal
<=   less than or equal
==   loose equality
!=   loose inequality
===  strict equality
!==  strict inequality
```

- "==" = Loose equality = JavaScript may perform type coercion before comparing. = (5 == '5') = (5 == 5) = true = compare only value by converting
```js
5 == "5" // true
```
- "===" = Strict equality = (5 == '5') = false = check both value and Data types
```js
5 === "5" // false
```
- Same idea also for (!=)(loose inequality) and (!==)(strict inequality)

4. Logical Operators
----------------------
1. AND && = Both conditions must be truthy.
2. OR || = At least one conditon must be truthy.
3. ! = Flips the boolean value (!true = false)

```js
let loggedIn = false;

if (!loggedIn) {
    console.log("Please login");
}
```

- && and || used in Short-Circuiting Logic
- && returns the first falsy value; if there is no falsy value, it returns the last value.
```js
0 && 10        // 0
"" && "Hello"  // ""
null && 10     // null

10 && 20       // 20
"Hi" && 100    // 100
```

- || returns the first truthy value; if there is no truthy value, it returns the last value.
```js
0 || 10          // 10
"" || "Hello"    // "Hello"
null || 100      // 100

10 || 20         // 10
"Hi" || "Hello"  // "Hi"
```

5. Nullish Coalescing ??
---------------------------
- This operator is similar to ||, but importantly different
- left ?? right = returns the right side only when the left side is:null/undefined

```js
let username = null/undefined;
console.log(username ?? "Guest")  // Guest


let username = "";
console.log(username ?? "Guest") // ""
console.log(username || "Guest")// Guest 
```


6. Unary Operators
--------------------
- A operator that performs an operation on a single operand is called UO.
- Ex: ~,!,+,-,++,--,typeof,delete,void
- For example, in typeof x, typeof is the unary operator and x is its single operand.

1. Unary `+`
-------------
- The unary + attempts to convert a value into a number.
```js
let x=10;
console.log(+x); // 10

let x="10";
console.log(+x); // "10" into number output : 10

let x="10";
console.log(typeof x) // string
console.log(typeof +x) // number
```
- EX :
```js
+"10"      // 10
+"5.5"     // 5.5
+true      // 1
+false     // 0
+null      // 0
+""        // 0
```
- If conversion isn't possible: it will return "NaN"
```js
+"hello" // NaN
+"true" // NaN
```


2. Unary `-`
-------------
- converts the operand to a number and then negates it.
- EX :
```js
-"10"      // -10
-"5.5"     // -5.5
-true      // -1
-false     // -0
-null      // -0
-""        // -0
```
- If conversion isn't possible: it will return "NaN"
```js
+"hello" // NaN
+"true" // NaN
```

3. Increment `++` (Same rule as 4. Decrement `--`)
-------------------------------------------
- The `++` operator increases a value by 1.
```js
let x=1;
x++
console.log(x); // 2
++x;
console.log(x); // 3
```
- Pre-increment : first increment than assigne 
```js
let x=1;
let y=++x;
console.log(x) // 2
console.log(y) // 2
```
- Post-increment : first assign than increment 
```js
let x=1;
let y= x++;
console.log(x) // 2
console.log(y) // 1
```

5. Logical NOT `!`
-------------------
- `!` converts a value to `Boolean` and then `reverses` it.
- 0, null, undefined, "", NaN, and false are falsy.
```js
!true       // false
!"hello"    // false
!0          // true
!null       // true
!undefined  // true
!""         // true 
!NaN        // true 
!false      // true
```

6. Double NOT `!!`
-----------------
- `!!` is technically two unary ! operations.
- It is commonly used to convert a `value into a Boolean`.
- `!!` is used to `explicitly` convert a value into a Boolean when I need a reliable true or false value
```js
!!true       // true
!!"hello"    // true
!!0          // false
!!null       // false
!!undefined  // false
!!""         // false 
!!NaN        // false 
!!false      // false
```
- `When to use !! in application` ?
1. Use !! when you need to convert any value into a Boolean (true / false).
2. Commonly used for checking existence of values like tokens, API data, optional properties, or config values.
3. Don't use it when the value is already a Boolean.


7. `typeof`
- return type of value
```js
console.log(typeof "rahul");    // "string"
console.log(typeof true);       // "boolean"
console.log(typeof false);      // "boolean"
console.log(typeof 10);         // "number"
console.log(typeof 10.5);       // "number"
console.log(typeof 0);          // "number"
console.log(typeof 1);          // "number"
console.log(typeof "");         // "string"
console.log(typeof null);       // "object" (That's a historical JavaScript behavior.)
console.log(typeof undefined);  // "undefined"
console.log(typeof NaN);        // "number"
```

8. `delete`
- used to remove property in object
```js
const user={
    name:"rahul",
    age : 21
}
console.log(user) // { name: 'rahul', age: 21 }
delete user?.age; // delete is operator and user?.age is operands
console.log(user) // { name: 'rahul' }
```

9. `void`
---------
- `void` evaluates an expression and `returns undefined`.
- It's `rarely` needed in everyday application code, but it can be used when I intentionally want to ignore a return value or in some JavaScript expression patterns.
```js
console.log(void 10) // undefined
```
- Uses :
```js
<a href="javascript:void(0)">Click</a>

void function () {
    console.log("Hello");
}();
```

10. Bitwise NOT `~`
---------------------
- `~` is a unary bitwise operator.
- It performs bitwise NOT on the number.
- ~ works on the 32-bit integer representation of a number and flips its bits.
- Formula : `~x = -(x + 1)`


7. Bitwise Operators
----------------------
- Bitwise operators work on the binary representation of integers.
- JavaScript Number is normally a 64-bit floating-point value, but when you use a bitwise operator, JavaScript converts the value to a 32-bit signed integer, performs the operation, and converts the result back to a Number.

| Operator | Name                 | Purpose                         |                 
| -------- | -------------------- | ------------------------------- |
| `&`      | Bitwise AND          | Check/combine bits              |                  
| `|`      | Bitwise OR           | Set/combine bits                |
| `^`      | Bitwise XOR          | Toggle/detect different bits    |                  
| `~`      | Bitwise NOT          | Flip every bit                  |                  
| `<<`     | Left Shift           | Shift bits left                 |    
| `>>`     | Signed Right Shift   | Shift bits right                |                  
| `>>>`    | Unsigned Right Shift | Shift bits right with zero-fill | 

```js
console.log(5 & 3) // 1
console.log(5 | 3) // 7
console.log(5 ^ 3) // 6
console.log(~5) // -6
console.log(~3) // -4
console.log(5 << 1); // 10 (Shift the bits of 5 to the left by 1 positions.)
console.log(5 << 2); // 20
console.log(5 >> 1); // 2  (Shift the bits of 5 to the right by 1 positions.)
console.log(-5 >> 1) // -3
```


8. Ternary Operator `(?:)`
-------------------------
- The ternary operator is a compact conditional expression.
```js
let result;

if (age >= 18) {
    result = "Adult";
} else {
    result = "Minor";
}
```
```js
{isLoggedIn ? <Dashboard /> : <Login />}
```

9. Optional Chaining `?.`
--------------------------
- modern js feature
```js
const user={}
console.log(user.profiles.name); // throw error and below action will not executed applicatio down
console.log("next action of application")
// Output : TypeError
// console.log(user.profiles.name);
//                           ^
// TypeError: Cannot read properties of undefined (reading 'name')
```
- Solution
```js
const user={}
console.log(user.profiles?.name); // return undefined instead error and execute the below action
console.log("next action of application") 
```
- You can chain it : `user?.profile?.address?.city`

Optional Function Call 
------------------------
- If user exists and login exists as a callable value, call it.
```js
const user = {
  login() {
    console.log("Logged in");
  }
};
user?.login?.(); // "Logged in"

// const user = null;
// user?.login?.(); // undefined
```

Optional Array Access
----------------------- 
- Useful when an array may not exist.
```js
const user = [
  { name: "Rahul" }
];

console.log(user?.[0]?.name);
```
Nullish Coalescing + Optional Chaining
---------------------------------------
- const city = user?.address?.city ?? "Unknown";
```js
const city = user?.address?.city ?? "Unknown";
```

10. 