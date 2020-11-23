// const person = ["John", 24, "Programmer", true];
// const sayHello = function(){}
const person = {
    name: "John",
    age: 24,
    job: "Programmer",
    isMarried: true,
    sayHello: function(){
        console.log("Hello World");
    },
};


person.age = 25;
person["address"] = "Manado";

console.log(person.name);
console.log(person["age"]);
// console.log(person);

delete person.address;
console.log(person);

person.sayHello();

