Lexical environement (lexial scope)
------------------------------------
- lexical environment = a code which is physically placed inside the code
- Scope is directly related to lexical scope (lexical environment)
- Lexical environement = current lexical env. `+` reference to lexical env. of parent 
- Lexical env. = local memory `+` reference to lexical env. (local memory) of parent
- Lexical env == Lexical scope 

```js
function b()
{
    function a()
    {

    }
}
```
- a() is lexically sitting inside in function b
- b() is lexically sitting inside in global execution context
- every function create their on `Function Execution Context`

Scope Chain 
------------
- the collection or chain of lexical environment is called scope chain.
```js
let a = 10; // Global scope

function outer() {
  let b = 20;

  function inner() {
    let c = 30;

    console.log(a); 
    console.log(b); 
    console.log(c);
  }

  inner();
}

outer();
```
- Looks for c → found inside inner LE
- Looks for b → not in inner LE, goes to outer LE ✅
- Looks for a → not in inner LE, goes to outer LE(not found), goes to global LE✅

👉 This searching path = Scope Chain


Important Points (Interview Gold)
-------------------------------------
- JavaScript uses `Lexical Scoping` (defined at write time, not run time)
- Scope chain is `created` when functions are defined, not called
- Stops searching when variable is found
- If not found → ❌ ReferenceError

```js
let x = 10;

function test() {
  console.log(x);
}

function wrapper() {
  let x = 20;
  test();
}

wrapper();

// Output : 10
```
- Because test() is defined in global scope, so it uses global x = 10, not wrapper's x.
👉 This proves: scope chain depends on where function is defined, not where it is called