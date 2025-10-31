## Javascript

JS mai
function
hositing
promise
closure
calllback
micro task ,callback queue etc
es6 function
setTimeout
debounce
throttle
pollyfill
es6 function

---

Data Types

---

- In JavaScript, var, let, and const are not data types.
  They are declaration keywords that control scope and reassignment rules.
- 3 ways to declare variables:
  1.  var -> Function-scoped (or globally scoped if declared outside) -> re-declared and updated.
  2.  let -> Block-scoped. -> can't re-declared but updated(mutable) -> avoid duplicate variable in same block scope
  3.  const -> Block-scoped -> Must be initialized at declaration.
      -> can't re-declared & updated(immutable) -> but if it holds an object or array, the contents are still mutable.

## Note:

- const always prevents variable reassignment(immutable) of the variable itself.
- But immutability of the value inside depends on whether it’s primitive (immutable) or non-primitive (mutable).

---

Data Types (Primitive & Reference)

---

1. Primitive Data Types

- Primitive data types store simple, immutable values and are copied by value —
  that means when you assign them to another variable, both variables hold separate copies
- working
  - Primitives are immutable: original value cannot be changed.
  - New memory is allocated for every updated primitive value.
  - The variable simply points to the new value.
  - Old memory is cleaned up by the garbage collector if no references exist.
- Include: string, number, bigint, boolean, undefined, symbol, null
- Stored directly in the stack (fast access).
- Lightweight and efficient for storing single values.

Example:

let a=100; // a pointing to memory have 100 value
let b=a; // b memory block is created and a's memory value is copied in b's memory block
b=b+1; // upate the b's memory block value (not affect the a's memory block)
console.log(a);
console.log(b);

| Step             | Action        | Memory blocks created | Garbage collected |
| ---------------- | ------------- | --------------------- | ----------------- |
| 1                | `let a = 100` | 1                     | 0                 |
| 2                | `let b = a`   | 1                     | 0                 |
| 3                | `b = b + 1`   | 1 (new value 101)     | 1 (old `b`=100)   |
| Total at the end | `console.log` | 2 active              | 1 recycled        |

- | Primitive | Example Value   | Notes                       |
  | --------- | --------------- | --------------------------- |
  | string    | `"Rahul"`       | Textual data, immutable     |
  | number    | `25`, `19.99`   | Integers or decimals        |
  | bigint    | `1234567890n`   | Very large integers         |
  | boolean   | `true`, `false` | Logical value               |
  | undefined | `undefined`     | Default uninitialized value |
  | symbol    | `Symbol("id")`  | Unique identifier           |
  | null      | `null`          | Explicitly empty value      |

2️. Non-Primitive Data Types

- Non-primitive data types like objects and arrays store references to memory locations and are copied by reference —
  so changing one affects the other.
- Include: Object, Array, Function, Date, Map, Set, etc.
- Mutable: Can modify properties or elements without creating a new object.
- Stored in the heap, with the stack holding a reference (pointer) to that heap memory.
- Copied by reference: multiple variables can point to the same object.
- Changes via one variable reflect in all references.

Summary :
PDT : stack,immutable,call by copy,efficient for signle value
NPDT : heap,mutable,call by reference,efficient for complex value

Example:
let obj1 = { name: "Rahul" };
let obj2 = obj1; // reference copy
obj2.name = "Boss";
console.log(obj1.name); // "Boss"

| Feature                 | Primitive                                                | Non-Primitive (Object)                               |
| ----------------------- | -------------------------------------------------------- | ---------------------------------------------------- |
| **Examples**            | string, number, boolean, null, undefined, symbol, bigint | object, array, function, Map, Set                    |
| **Mutability**          | Immutable                                                | Mutable                                              |
| **Memory storage**      | Stack (direct value)                                     | Heap (stack holds reference)                         |
| **Copy behavior**       | By value (independent copy)                              | By reference (shared object)                         |
| **Performance**         | Fast due to stack storage                                | Slightly slower due to heap access                   |
| **Operations on value** | Produce a new value                                      | Modify the original object                           |
| **Example behavior**    | `let a=10; let b=a; b=20;` → `a=10`                      | `let obj={x:1}; let obj2=obj; obj2.x=2;` → `obj.x=2` |
| **Use case**            | Single values, constants                                 | Complex structures, dynamic data                     |

Reference1: https://www.geeksforgeeks.org/javascript/primitive-and-non-primitive-data-types-in-javascript/

---

Type Conversion & Coercion

---

1.Type Conversion (Explicit Conversion)

- One DT into other DT by developer using some function
- Common methods: String(numeber), Number(string), Boolean(number/string), parseInt(number/string), parseFloat(number/string)

  2.Type Coercion (Implicit Conversion)

- JS auto convert DT during operations
  1.String context → everything is converted to string (+) - If operand are number :> addition - If any operand are string : string concatenation
  console.log(5+5); // 10
  console.log(5+true); // 6
  console.log(5+false); // 5
  console.log(5+null); // 5
  console.log(5+undefined); // NaN
  console.log(5+NaN); // NaN
  console.log(5+"5"); // "55"
  console.log(5+""); // "5"

  console.log("5"+true); // 5true
  console.log("5"+false); // 5false
  console.log("5"+null); // 5null
  console.log("5"+undefined); // 5undefined
  console.log("5"+NaN); // 5NaN

  console.log(true+"5"); // true5
  console.log(false+"5"); // false5
  console.log(null+"5"); // null5
  console.log(undefined+"5"); // undefined5
  console.log(NaN+"5"); // NaN5

  2.Number context → everything is converted to number for arithmetic (-, \*, /, %):
  console.log(5-5); // 5-5=0
  console.log(5-true); // 5-1=4
  console.log(5-false); // 5-0=5
  console.log(5-null); // 5-0=5
  console.log(5-undefined); // 5-NaN=NaN
  console.log(5-NaN); // 5-NaN=NaN
  console.log(5-"5"); // 5-5=0
  console.log(5-""); // 5-0=5

  console.log("5"-true); // 5-1=4
  console.log("5"-false); // 5-0=5
  console.log("5"-null); // 5-0=5
  console.log("5"-undefined); // 5-NaN=NaN
  console.log("5"-NaN); // 5-NaN=NaN

  console.log(true-"5"); // 1-5=-4
  console.log(false-"5"); // 0-5=-5
  console.log(null-"5"); // 0-5=-5
  console.log(undefined-"5"); // NaN-5=NaN
  console.log(NaN-"5"); // NaN-5=NaN
  note: check - by replacing (\*,/,%) almost smae pattern

  3.Boolean context → in conditions (if, while), values are converted to boolean: - Falsy values: 0, "", null, undefined, NaN, false - Truthy values: everything else

✅ Key point for Interviews

- JavaScript is loosely typed, so coercion happens frequently.
- loosely typed = no need to mention data types for the vairable in js
- JavaScript, Python → Weakly typed (dynamic coercion allowed)
- Use strict equality (===) to avoid unexpected coercion.
- Always be aware of context (string, number, boolean).
- Conversion can be explicit or implicit — know both.

---

Operators

---

-> Used to perform the operation on operands (values or variables).
| **Category** | **Operators** | **Example** |
| --------------------- | ------------------------------------ | --------------------------------------------- |
| **Arithmetic** | `+  -  *  /  %  **` | `10 + 5 → 15`, `2 ** 3 → 8` |
| **Assignment** | `=  +=  -=  *=  /=  %= **=` | `x = 10`, `x += 5 → 15` |
| **Comparison** | `==  ===  !=  !==  >  <  >=  <=` | `5 == "5" → true`, `5 === "5" → false` |
| **Logical** | `&&  ||  !` | `(5 > 2 && 10 > 5) → true`, `!(true) → false` |
| **Unary** | `+  -  ++  --  typeof  delete  void` | `typeof "Hi" → "string"`, `x++` |
| **Ternary** | `? :` | `(age >= 18) ? "Yes" : "No"` |
| **Bitwise** | `&  |  ^  ~  <<  >>` (work on binary)| `5 & 1 → 1`, `5 << 1 → 10` |
| **Nullish** | `??` | `null or undefined ?? "Guest" → "Guest"` |
| **Optional Chaining** | `?.` | `user?.profile?.name` |

---

Conditional Statements (if, switch,ternary operator)

---

---

Control Flow (Loop)

---

0. forEach (can't use break,constant)(return undefined)
1. for loop (iterate over index) (full control on index) (used break,constant)
   -> let : New memory allocation in each iteration (cuase block scoped)(differ memory used)
   -> var : same memory is used (cause function scoped & not block)(same memory used)
2. while loop (first check than do)
3. do-while loop (first do than check)
4. for...of Loop (for arrays, strings, etc.)
5. for...in Loop (for object keys)

break -> Stops the loop completely (exits out of the loop) and start executing next statement
continue -> Skips the current iteration and moves to the next iteration of the loop.

---

Functions (Declaration, Expression/defination/body, Arrow Functions)

---

| Feature                | Declaration        | Expression(normal F        | Arrow Function                          |
| ---------------------- | ------------------ | -------------------------- | --------------------------------------- |
| **Syntax**             | `function foo(){}` | `const foo = function(){}` | `const foo = () => {}`                  |
| **Name**               | Must have name     | Can be anonymous           | Always anonymous (assigned to variable) |
| **Hoisted**            | ✅ Yes             | ❌ No                      | ❌ No                                   |
| **`this` binding**     | Own `this`         | Own `this`                 | Inherits from surrounding scope         |
| **Use as Constructor** | ✅ Yes             | ✅ Yes                     | ❌ No                                   |

---

Scope (Global, Local, Block)

---

- var is function block(if outside function block hoisted to global scope)
- let/const block scope

---

Hoisting

---

| Keyword / Type                      | Hoisted? | Initial Value in Memory Phase | Usable Before Declaration? |
| ----------------------------------- | -------- | ----------------------------- | -------------------------- |
| `var`                               | ✅ Yes   | `undefined`                   | ✅ (but gives `undefined`) |
| `let`                               | ✅ Yes   | In **TDZ**                    | ❌ Error                   |
| `const`                             | ✅ Yes   | In **TDZ**                    | ❌ Error                   |
| Function Declaration                | ✅ Yes   | Full function definition      | ✅ Works                   |
| Function Expression (`var`)         | ✅ Yes   | `undefined`                   | ❌ Error                   |
| Function Expression (`let`/`const`) | ✅ Yes   | In **TDZ**                    | ❌ Error                   |

# JAVASCRIPT ARRAY & OBJECT METHODS

## ARRAY METHODS

push() -> Add item to END
pop() -> Remove item from END
unshift() -> Add item to START
shift() -> Remove item from START
map() -> Transform each element into new array
filter() -> Keep elements that match condition
reduce() -> Reduce array to single value
forEach() -> Loop through array (no return)
find() -> Find first element matching condition and return otherwise give undefined
includes() -> Check if value exists
indexOf()/lastIndexOf() -> Get index of element
slice(startIndex,endIndex)  
-> Return new array extracted item
-> Extract portion of array (non-destructive) (startIndex:included endIndex:ex-cluded)
splice(startIndex,numberOfItemNeedToTemove,newItem1,newItem2..)  
-> Return new array of deleted item
-> Add/Remove elements (destructive)
sort()  
-> Sort array
-> array.sort((a,b)=> a-b) (aescending order)
-> array.sort((a,b)=> b-a) (descending order)
reverse() -> Reverse array order (only used for array)
concat() -> Merge arrays and give new array without chnaging the original array
split() -> Separete string and give array (for string)
join() -> Convert array to string with separator (for string)

---

## OBJECT METHODS

Object.keys(obj) -> Get all keys [key1,key2..]
Object.values(obj) -> Get all values [value1,value2..]
Object.entries(obj) -> Get key-value pairs [ [key1,value1] ,[key1,value1], ...]
Object.assign(obj1, obj2) -> Copy/merge objects : obj2 copy into obj1 (original object is modified)
-> Object.assign(target, ...sources);
-> let clone = Object.assign({}, user); :> give new object without affecting original object
-> let merged = Object.assign({}, obj1, obj2, obj3);

Spread {...obj} -> Copy/merge using spread

Object.freeze(obj)  
-> shallow freeze (only first level Object)
-> So, Object.freeze() makes the outer object immutable, but not nested objects are mutable
-> Lock object (no changes allowed) only read only (both key & value)
-> If need freeze all object including inner object
function deepFreeze(obj) {
Object.freeze(obj);
Object.keys(obj).forEach(key => {
if (typeof obj[key] === "object" && obj[key] !== null) {
deepFreeze(obj[key]); // recursively freeze
}
});
return obj;
}

Object.seal(obj) -> Prevent adding/removing keys (values can change)
->
obj.name="Anna"; // value updation allowed
obj.place="mulund"; // key additon not allowed
delete obj.age; // key deletion not allowed
hasOwnProperty(key) -> Check if object has property

---

## Destructuring

-> Destructuring allows you to unpack values from arrays or objects into variables easily.
-> Assign values quickly
let temp=[1,2,3];
let [x,y,z]=temp; // get value
let [x=10,y=20,z=30]=temp; // set default value =defaultValue and :newName
let [x,,z]=temp; // get skip

const person = { name: "Rahul", age: 25 };
const { name } = person; (set defualt value ="newName" or set new key name :newNameKey)

---

## Spread Operator (...)

-> The spread operator is used to expand elements of arrays/objects.
-> Used for Merge, copy, or override
-> Gives Shallow copy of the array,object
-> Used in Function Call, Array/Object Destructuring (right side)
const nums = [1, 2, 3];
const more = [...nums, 4]; // [1, 2, 3, 4]

---

## Rest Operator (...)

-> The rest operator collects multiple elements into a single array/object.
-> It’s like the opposite of spread.
-> Used in Function Parameters, Array/Object (left side)

📝 Difference between Spread and Rest
| Feature | Spread (`...`) | Rest (`...`) |
| --------- | ------------------------------- | ------------------------------ |
| Purpose | Expands values | Collects values |
| Works in | Arrays, Objects, Function calls | Function params, Destructuring |
| Example | `[...arr]` → `[1,2,3]` | `(...args)` → `[1,2,3]` |
| Direction | **Expands outward** | **Gathers inward** |

---

## Shallow Copy

-> Only top level copied, nested objects are still shared.
-> Ways to make shallow copies: 1. Spread operator { ...obj } 2. Object.assign({}, obj) 3. Array methods like .slice(), .concat(), [...arr]
-> Example ::>
let user={
name:"rahul",
address:{
city:"mumbai"
}
}
// let user1={...user};
// let user1=Object.assign({},user);
user1.name="Anna";
user.address.city="UPdfdf";
console.log(user);
console.log(user1);

---

## Deep Copy

-> Every level is copied, no shared references.
-> Deep copy
M1 : Using JSON - let obj2 = JSON.parse(JSON.stringify(obj1));
M2 : Using structuredClone() (Modern JS) - let obj2 = structuredClone(obj1);

---

NOTE:

- Arrays are ordered lists of values.
- Objects are key-value pairs.
- Many array methods (map, filter, reduce) are widely used in React & modern JS.
- Object methods (keys, values, entries) are useful for iterating and transforming data.

## this keyword (different behaviou in differ area)

1. vale of this in global scope?
   ans :

- globalObject it can we window(in browser),global(in nodejs) etc,it depend on where u running the js code
- Different JS engines have different global objects

2. in function scope ?
   ans:

- defualt js code is in non-strict mode
- defualt value of this is undefined/null
- if in non-strinct mode this is set reference of globalObject (this substitution)
- if in "use strict" mode this is not set anything

Learn Resources: https://youtu.be/9T4z98JcHR0?si=QNz-CtYMyoQbZ7ul

--------------------------------------------------------------------------------------------------->>>
Normal Functions

- Have own this (this binded with current scope where is used)

Arrow Function

- not have own this (this binded with lexical scope )(this opjecct refer) :> o/p:> undefined

Default Parameters
→ Provide fallback values for missing args.

Template Literals
→ Backticks + ${} for cleaner strings. (Allows variable interpolation with ${})

--------------------------------------------------------------------------------------------------->>

---

## ES6+ Features – Interview Concepts

1.let/const vs var
2. Normal Function Vs Arrow function
Normal → function add(a,b){ return a+b }
Arrow → const add = (a,b) => a+b

-> AF are shorter, inherit this, no arguments, not constructors. (can't access before intialization)
-> AF Does not have its own this, it inherits this from the surrounding scope (lexical this).
-> NF have their own this, arguments, hoisting (can be access befor intializaton), and can be constructors.
-> NF → Has its own this (depends on how the function is called).

Note : In the global scope (this in strict mode = undefined, in browsers it can be window),

3. Default Parameters/Template Literals/Destructuring/Spread operatore & Rest/ (readed above)
4. Object shorthand & dynamic keys
Object Shorthand
→ Use variable names directly. (If variable name and property name are same)

Dynamic Keys
→ [ ] lets you compute property names.

🔹 Object Shorthand

- If key & variable name are same → write only once
  let user = { name, age };

🔹 Dynamic Keys (Computed Properties)

- Use [] to set keys dynamically
  let key = "email";
  let obj = { [key]: "test@example.com" };

5. Classes

🔹 Classes in JS

- Blueprint for objects (syntactic sugar over prototypes).

🔹 Features

1. constructor → runs on object creation
2. methods → define functions inside class without function keywords (no need)
3. extends → inheritance between classes
4. super → call parent constructor/method from child class
5. static → method belongs to class, not instance
6. getters/setters → control property access (get,set ketword)(access bey .name)

🔹 Example
class Person {
constructor(name) { this.name = name; }
greet() { console.log(`Hi, ${this.name}`); }
}

“JavaScript classes are syntactic sugar over prototype-based inheritance.
They let us organize code with constructors, methods, inheritance, getters/setters,
and static methods, making OOP in JS more structured and readable.”

🔹 Common Interview Questions
Difference between class and constructor function?
→ Class is just syntactic sugar over prototype-based inheritance.

What is the role of super()?
→ Used to call the parent class constructor or methods.

Can we have private fields in classes?
→ Yes, using # (ES2022 feature). -> #password = "secret123";

---

Event Loop
-----------

- callstack ::>
- Whenever a function is called, a new execution context is created and pushed onto the call stack.
- When the function finishes execution, its execution context is popped off the call stack.
- If we want to execute a function after 1 seconds than it not possible in callsatack cause not have any timer related concept
- callstack job is only execut the pushed code and after done poped out the code (clean the callstack)
- pushed & poped handled by js engine (js engine contain callstack)

- Browser::>
- The browser is the environment where JavaScript runs.
- It provides extra features (Web APIs) that allow JS to interact with the outside world.
  1.  setTimeout()
  2.  DOM APIs
  3.  fetch()
  4.  localStorage
  5.  console
  6.  location
- Web APIs allow the js code to use Browser feature.
- so js become more super-powerfull
- All Web APIs wrapped inside the global window object, so JavaScript can use them through the global execution context(window is attached to this global scope).
- When any function execution context (FEC) is created, it also gets access to the global scope (via the scope chain).
- window.console.log("") == console.log("")

```js
console.log("Start");
setTimeout(() => {
  // callback method is register + timer start
  console.log("CallBack");
}, 1000);
console.log("End");

output: Start;
End;
CallBack;
```

- when timer expired than this register callback method put in callback Queue
- Event loop : check continuosly is callStack empty & if any cB is parsent in cB Q than push in callStack (than callStack take care of this).
- The Event Loop is a mechanism in JavaScript that continuously monitors the Call Stack and the Callback Queue (or Task Queue) to manage the execution of asynchronous code.
- callStack follow LIFO rule
- callBack Queue (Tak Queue) follow FIFO rule

- microtask Queue (high execution prioirty than cB Q)
  - All cb Function comes through promises & mutationObserver (mutation in dom)
- callBack Queue (Task Queue)

  - Everything comes excluding promises & mutationObserver in cB Q

- Microtask Queue → Collection of CB Function comes from Promises, MutationObserver (higher priority)
- Callback Queue → Collection of CB Function comes from Timers, Events, Network (lower priority)

- Event loop monitor if callstack is empty than execute microtask Queue task one by one thann callback Queue taks

```js
console.log("Start");

setTimeout(()=>{ 						// register cB - if expired - want to execute - goto cB Queue
    console.log("CB SetTimeout");
},5000)

fetch('https://api.netflix.com')       // register cB - if responce successfull - want to execute - goto microtask Queue (high execution prioirty than cB Q)
.then(function cbF(){
    console.log("CB Netflix");
})

console.log("End")

Output:
Start
End
CB Netflix
CB SetTimeout
```

- Starvation of task in callback queue happen if task waiting for long time due to blocking of mircrotask queue tasks

## Executino flow of the taks

- In Window : sync code → microtasks → macrotasks → render
| Step | Type                                 | Examples                                                                                |
| ---- | ------------------------------------ | --------------------------------------------------------------------------------------- |
| 1    | **Synchronous (Call Stack)**         | `console.log()`, loops, normal functions                                                |
| 2    | **Microtask Queue**                  | `Promise.then()`, `async/await` (after `await`), `queueMicrotask()`, `MutationObserver` |
| 3    | **Macrotask Queue (Callback Queue)** | `setTimeout()`, `setInterval()`, I/O callbacks, `setImmediate()` (Node.js)              |
| 4    | **Rendering Phase**                  | Browser repaints or reflows UI changes                                                  |


- In nodejs : sync code → process.nextTick → microtasks → macrotasks
- process.nextTick
  - special, high-priority microtask in Node.js.
  - used to schedules a callback to run after the current operation completes,
    before any other microtasks or macrotasks.

Microtasksa
1. Promise.then
2. Promise.catch
3. Promise.finally
4. async/await (after await)
5. queueMicrotask
6. MutationObserver

Macrotasks (callback Qeue)

1. setTimeout
2. setInterval
3. setImmediate (Node.js)
4. I/O callbacks
5. requestAnimationFrame (browser)

- Quick Tip:
  Microtasks → run before macrotasks, immediately after call stack is empty.
  Macrotasks → run after microtasks, in the next event loop tick.

  6.Callback

---

- Callback hell so we use promises
  fetch("https://dummyjson.com/users", function (err, data) {
  if (err) {
  console.log("Error:", err);
  } else {
  console.log("Data:", data);
  }
  });

7. Promises & Async/Await

---


## Promises

-> Synchronous operation involves sequential, blocking execution
-> asynchronous operation is non-blocking and non-sequential execution(API Data)
-> Asynchronous taks return promise
-> A Promise is a JavaScript object that represents the status of an asynchronous task—whether it is pending, resolved, or rejected.
fetch("https://dummyjson.com/users")
.then((response) => {
if (!response.ok) throw new Error("HTTP error!!");
return response.json();
})
.then((jsonData) => {
console.log(jsonData); // actual data
})
.catch((err) => {
console.log("Error", err);
});

Disadvantage ::> Defficult to error handling , Harder to read due to chaining

8. Async/Await

---

-> Cleaner, readable code – asynchronous code looks like synchronous code.(easy to read)
-> Easier error handling

const getData = async () => {
try {
const response = await fetch("https://dummyjson.com/users");
const jsonData = await response.json();
} catch (err) {
console.log("Error fetching data:", err.message);
} finally {
console.log("Fetch operation completed ✅");
}
};

getData();

| Feature        | Callback                         | Promise                 | Async/Await                 |
| -------------- | -------------------------------- | ----------------------- | --------------------------- |
| Syntax         | Nested function                  | `.then().catch()`       | `async` + `await`           |
| Readability    | ❌ Hard with nesting             | ✅ Better than callback | ✅ Cleanest                 |
| Error handling | Manual try/catch inside function | `.catch()`              | `try/catch`                 |
| Returns value  | Nothing                          | Promise                 | Actual value (inside async) |
| Composability  | ❌ Hard to chain                 | ✅ Easy chain           | ✅ Easy chain               |

## Tips

Old: Callbacks → messy, nested, error handling scattered.
Better: Promises (then/catch) → flat chaining, centralized error handling.
Modern / Best: async/await → synchronous-like code, try/catch, clean & readable.
Note: async/await is not faster, it’s more readable and easier to handle errors, but internally it’s still Promise-based.

9. Optional Chaining ?.

---

-> Avoid errors when accessing nested properties
const user = { profile: { name: "Rahul" } };
console.log(user.profile?.name); // Rahul
console.log(user.contact?.email); // undefined (no error)

10. Nullish Coalescing operator ??

---

-> Return a default value if null or undefined.
const val = null ?? "Default";
console.log(val); // Default

------------------------------------------------**\*\***\***\*\***

## Learn at nights

URL : https://github.com/rhaulChaurasiya786/js-learning/blob/main/basic/01-Execution-Context-Hoisting-callstack-Heap.md

1. Exection context
2. Hoisting
3. Callstack
4. stack and heap

URL : https://github.com/rhaulChaurasiya786/js-learning/blob/main/basic/02-Scope.md

1. types of scope : logial bounday,in which varaibal/fucnti are accessible and visible
2. scope chain : collection of lexical environement is call scope chain
3. closure : function bundled with lexical scope/surrounding state

## New concept

Callback : A callback is a function passed as an argument to another function, which is invoked later.
setTimeout

Debounce :

- Debounce ensures a Expensive function is called only once after a specified time of inactivity.
- Prevent frequent firing of events (input).

Throttle :

- Throttle ensures a function is called at most once in a specified time interval.
- (avoid continue click button) to get api data (limits the user click rates)
- Use: limit the Expensive function call on resize,scroll or continue button click

Pollyfill :

- "A polyfill is just a fallback implementation of a feature to ensure older browsers can still run modern JavaScript code."
- Used To maintain backward compatibility for legacy websites.

Event bubbling

- (child-> top parent)(event are propagating upward direction)(from bottom to top)
- addEventListener("click",()=>{},false) : by defualt 3rd parameter is fals (trigger bubbling mode)
- during event bubbling skip the trickling event

Event trickling (capturing)

- (parent to child) (move from top to bottom)
- addEventListener("click",()=>{},true)
- during event trickling skip the bublling event

Event Delegation

- A technique in JavaScript where a single event listener is attached to a parent element
  to handle events on its child elements using event bubbling.
  -Advantages
  Performance → fewer listeners = less memory usage.
  Dynamic elements → works for elements added later via JS.
  Clean code → one parent handler vs multiple child handlers.

---

## 🪟 Window Object in JS

-> DOM + BOM + JS core + etc = window (whole websites)
-> it represents browser window in which code is running and it is created by browseer it self
-> it is object of browser not js
-> it is global objecct containe differnt property and method and browser API

## Key Properties

- window.document → DOM
- window.location → URL info (href, reload)
- window.history → back(), forward()
- window.navigator → browser info (userAgent,language)
- window.screen → device screen info
- window.localStorage / sessionStorage → storage

## Key Methods

- alert(), prompt(), confirm()
- setTimeout(), clearTimeout()
- setInterval(), clearInterval()
- open(), close()
- addEventListener("resize", ...)

## Important

- window.innerHeight vs outerHeight
- window.onload → after full load
- DOMContentLoaded → after HTML parse
- window === globalThis(this) (in browser) (but in nodejs gloab is used instead window)

## Interview Qs

Q1. window vs document?

- window: Represents the browser window (global object).
- document: Represents the DOM of the page inside the window

Q2. localStorage vs sessionStorage?

- local: persists even after browser is closed.
- session: cleared when the tab/window closes.

Q3. How do you detect browser or OS info?

- Using window.navigator.userAgent

Q4. onload vs DOMContentLoaded?

- onload: after full page load
- DOMContentLoaded: after HTML fully parsed

Q5. What are window.innerHeight and window.outerHeight?

- innerHeight: viewport height.
- outerHeight: full browser window height including toolbars.

---

## DOM Manipulation

-> DOM (Document Object Model): Representation of the HTML document as a tree structure (nodes/elements).

(A) Read DOM elements:
1.document.getElementById("id")
-> Returns SINGLE element (not HTMLCollection)
-> Fastest method

2.document.getElementsByClassName("className")
-> Returns HTMLCollection (live)

3.document.getElementsByTagName("tagName")
-> Returns HTMLCollection (live)

4.document.querySelector("cssSelector")
-> Returns FIRST matching element
-> Node (not NodeList)

5.document.querySelectorAll("cssSelector")
-> Returns ALL matching elements
-> Static NodeList
HTMLCollection vs NodeList

---

a.HTMLCollection

- Returned by: getElementsByClassName, getElementsByTagName
- Live collection (auto-updates if DOM changes)
- Access: index-based or by name/id
- Does NOT support forEach() (cuase older design need to convert into array first)
  Example:
  let elems = document.getElementsByTagName("p");
  console.log(elems.length); // 2
  document.body.appendChild(document.createElement("p"));
  console.log(elems.length); // 3 (auto-updated)

b.NodeList

- Returned by: querySelectorAll, childNodes
- Static collection (does NOT auto-update when DOM changes)
- Access: index-based
- Supports forEach() (in modern browsers)
  Example:
  let elems = document.querySelectorAll("p");
  console.log(elems.length); // 2
  document.body.appendChild(document.createElement("p"));
  console.log(elems.length); // still 2 (no update)

(B) Updating DOM elements:

- Used to modify element properties, attributes, or styles.
- element.textContent = "new text" (get/set both)(w.r.t as text shown in code level)
- element.innerText = "new text" (get/set both)(w.r.t as text shown in web page)
- element.setAttribute("attr", "value")
- element.style.color = "red"

(C) Create elements:

- Used to create and f new elements into the DOM.
- document.createElement("tag") → creates element.
- document.createTextNode("text") → creates text node.
- appendChild(element)(at last),
  append(element),
  prepend(element)(at first),
  insertBefore(element, target) → insert into DOM.
  insertAdjacentElement("position",element) -> inserts a an element into a specified position
  - positon: beforebegin, afterbegin, beforeend, afterbegin

(D) Remove elements:

- Used to remove elements from the DOM.
- element.remove() (modern, simple).
- parent.removeChild(child) (older way)

Learn1 : https://youtu.be/uoII7VSDF3k?si=d-kKW41IId0ilvXt
Learn2 : https://youtu.be/5Udw0F6DIhA?si=HWZPdpwe5qXD1khR
Learn3 : https://youtu.be/x2gl4KwUIV8?si=mPaFr275QvANCrHY

---

## Higher Order Functions(type of functinal programming)

-> note : funciton is first class citizens in JS
-> A function take a function as argument(callbackfunction) or return as function (Closure) is called HOR
-> Example

const numbers = [1, 2, 3];

function myMap(arr, fn) {
const result = [];
for (let i = 0; i < arr.length; i++) {
result.push(fn(arr[i])); // call callback on every iterations
}
return result;
}

// Callback accepts only 1 parameter
const doubled = myMap(numbers, x => x \* 2);
console.log(doubled); // [2,4,6]

map() → transforms each element of an array
filter() → selects elements based on a condition
reduce() → reduces an array to a single value
forEach() → executes a function for each element

-> Teach: https://youtu.be/HkWxvB1RJq0?si=cz6dps-HFpq2_iV7

Event Loop (microtask vs macrotask) (Pending)

## JS Questions

1. Highest and lowest number in array and DOM related UI task with JS.
2. Different ways to centre div
   3.Question : A = [nos of 0s, no of 1s, no of 2s] and sort them accordingly.
   4.What is closure? Give an example
3. https://www.ambitionbox.com/interviews/media-dot-net-software-services-india-pvt-ltd-interview-questions/ui-developer
4.

## JS

Event loop in js

- The Event Loop is a mechanism in JavaScript that handles asynchronous operations (like setTimeout,
  Promises, API calls) and ensures non-blocking execution on a single thread.
- Execution Flow
  1️⃣ Call Stack → runs sync code
  2️⃣ Web APIs → handles async tasks (like setTimeout, fetch)
  3️⃣ Callback Queue → for setTimeout callbacks
  4️⃣ Microtask Queue → for Promises, process.nextTick
  5️⃣ Event Loop → moves tasks from queues → stack

------------------>
