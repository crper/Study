/**
 * new 操作符创建的对象及赋值
 */
// var person = new Object();
// person.name = "Nicholas";
// person.age = 29;

/**
 * 使用字面量法创建的对象
 * var person = {} 的写法与 new Object()的写法等同
 */
/* var person = {
     name: "CRPERLIN",
     age: 23,
     job: "Software Engineer",
     sayName: function(){
        console.log(this.name);
}
 };
 console.log(person.name);
 console.log(person.age);
 console.log(person.sayName());*/

function Person(){

}

/*
Person.prototype.name  = "crper";
Person.prototype.age = 29;
Person.prototype.job = "Software Engineer";
Person.prototype.sayName = function(){
    console.log(this.name);
};

var person1 = new Person();
var person2 = new Person();

person1.name = "fasfsa";
console.log(person1.name);
console.log(person2.name);

console.log(person1.hasOwnProperty("name"));
console.log(person2.hasOwnProperty("name"));

console.log("age" in person1);
console.log("aname" in person1);*/


function Person(){

}

/*
Person.prototype = {
    name: "CRPERLIN",
    age: 23,
    job: "Software Engineer",
    sayName: function(){
        console.log(this.name);
    }
}

console.log(Person.prototype.name);

var person3 = new Person();
person3.name = "apple";
person3.age=5;

console.log(person3.name);
console.log(person3.age);
console.log(person3.sayName());*/


function SuperType(name){
    this.name = name
}

function SubType(){
    SuperType.call(this,"crperlin");
    this.age = 20;
}

var instance = new SubType();

console.log(instance.age);
console.log(instance.name);