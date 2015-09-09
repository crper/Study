/*-------------------------构造函数---------------------------------------*/
//标准的构造函数,把属性和方法都脱离出来,只留下一个指向
function Person( name, age, job ) {
    this.name = name;
    this.age = age;
    this.job = job;
    this.sayName = sayName;
}

function sayName() {
    console.log( this.name );
}

var person1 = new Person( "mumu", 23, "Software Engineer" );
var person2 = new Person( "crper", 23, "Doctor" );
person1.sayName();
person2.sayName();


/*-----------------------------------原型------------------------------------------*/
//原型模式
function PersonE() {

}

PersonE.prototype.name = "crperlin";
PersonE.prototype.age = 29;
PersonE.prototype.job = "Software Engineer";
PersonE.prototype.sayName = function () {
    console.log( this.name );
};

var personE1 = new PersonE();
personE1.sayName();

var personE2 = new PersonE();
personE2.sayName();

console.log( personE1.sayName === personE2.sayName );

/*简单化的的原型语法*/
function PersonS() {

}
PersonS.prototype = {
    contructor: PersonS, //设置为构造函数,看需求设置
    name: 'Nicholas',
    age: 29,
    job: 'Software Engineer',
    sayName: function () {
        console.log( this.name );
    }

}


/*测试是否为原型*/
console.log( PersonE.prototype.isPrototypeOf( personE1 ) ); //return true;
console.log( PersonE.prototype.isPrototypeOf( personE2 ) ); //return true;
console.log( Person.prototype.isPrototypeOf( person1 ) ); //return false;
console.log( Person.prototype.isPrototypeOf( person2 ) ); //return false;
console.log( Person.hasOwnProperty( person2 ) ); //return false;
console.log( PersonE.hasOwnProperty( person1 ) ); //return false;


/*---------------实例属性屏蔽原型属性--------------------------*/
function PersonN() {

}

PersonN.prototype.name = "Nicholas";
PersonN.prototype.age = 29;
PersonN.prototype.job = "Software Engineer";
PersonN.prototype.sayName = function () {
    console.log( this.name );
}

var personN1 = new PersonN();
var personN2 = new PersonN();
console.log( personN1.name );
console.log( personN2.name );



/*---------------更简单的原型语法-------------------------*/

function PersonN3(){};

PersonN3.prototype = {
    constructor: PersonN3,
    name : "crper",
    age : 23,
    job :"software engineer",
    sayInfo:function(){
        console.log("my name is :" +  this.name + " : age is " + this.age)

}
};

var persona = new PersonN3();
persona.name = "crperlin";
persona.sayInfo();


/*---------------组合构造函数和原型-------------------------*/
function p(name,age,job){
    this.name = name;
    this.age = age;
    this.job = job;
}

p.prototype = {
    constructor:p,
    sayInfo:function(){
        console.log("WAAAAAA" + this.name + " " + this.age )
    }
}

var pp = new p();
pp.name = "crperlin";
pp.age = 23;
pp.job = "software engineer";
pp.sayInfo();
