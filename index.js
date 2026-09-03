// # Issue: Using __proto__ is legacy behavior (deprecated in ES6). 
// # More importantly, objects created with Object.create(null) do not have __proto__ inherited from Object.prototype, 
//   which can cause issues or unexpected behavior.
// # Standard approach: Use Object.getPrototypeOf(obj).

function instanceOf(obj,target){
    if(obj === null || obj === undefined) return false;
    let objPrototype = Object.getPrototypeOf(obj);

    while (objPrototype !== null) {
        if (objPrototype === target.prototype) {
            return true;
        }
        objPrototype = Object.getPrototypeOf(objPrototype);
    }
    return false
}


console.log(instanceOf(1,Number))   // true