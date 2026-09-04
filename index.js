function Person(name,age){
    this.name=name;
    this.age=age;
}

let rahul=new Person("Rahul",23);
console.log(rahul.prototype)    // undefined
console.log(rahul.__proto__)    // {}