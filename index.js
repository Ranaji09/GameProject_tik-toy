// prototypes and its Properties...
function Person(name) {
     this.name = name;
     this.age = 21;
     this.cou
}
const person = new Person("Rana ji");
console.log(person)

// Object ProtoTypes in javascript..
//  Examples Of Vehicle  constructor function
// function Vehicle(numberOfWheel) {
//      this.numberOfWheel = numberOfWheel;
// }
// Vehicle.prototype.getWheelsInfo = function () {
//      return `${this.numberOfWheel}`
// }
// function Car(numberOfWheel, compnyName, model) {
//      Vehicle.call(this, numberOfWheel);
//      this.compnyName = compnyName;
//      this.model = model;
//      this.carInfo = function () {
//           return `Car  info is , number of wheels ${this.numberOfWheel} compny name is ${compnyName} and model number is :${model} `
//      }
// }
// // child ke andar bhi dalna hai
// const car = new Car(5, "Swipt", 2023);
// console.log(car.carInfo());
// car.prototype = Object.create(Vehicle.prototype);
// console.log(car.getWheelsInfo);

// function Person(name, age) {
//      this.name = name;
//      this.age = age;
//      // this.country = " India";
// }
// Person.prototype.country = "Denmark";
// const result = new Person("Rana ji", 21);
// console.log(result);
// console.log(result.country);


// Syncronaous
// console.log("a");
// console.log("b");
// console.log("c");

// Ascronous code
// console.log("a");
// setTimeout(() => {
//      console.log("b");
// }, 1000);
// console.log("c");

/*
// Find the even number in javascript
// function* findEven(number) {
//      let a = 0;
//      while (a < number) {
//           if (a % 2 == 0) {
//                yield a;
//           }
//           a++;
//      }
// }
// const result = findEven(100);
// for (const num of result) {
//      console.log(`This is Even Number : ${num}`);
// };


// // Fibunachi series
// console.log("Fibunachi series..")
// function* Fibunachi(maxNumber) {
//      let a = 0;
//      let b = 1;
//      while (a < maxNumber) {
//           yield a;
//           const c = b;
//           b = a + b;
//           a = c;
//      }
// }
// const result = Fibunachi(10);
// for (const num of result) {
//      console.log(num);
// }

// function* range(start, end) {
//      for (let counter = start; counter <= end; counter++) {
//           console.log("Inside range ", counter);
//           yield counter;
//      }
// }
// const Rangeresult = range(2, 6);
// for (const num of Rangeresult) {
//      console.log(num)
// }

// function* genratfun() {
//      console.log("Before Running..")
//      yield 1;
//      console.log("Before Running 1")
//      yield 2;
//      console.log("Before Running 2")
//      yield 3;
//      console.log("Before Running 3")
//      yield 4;
//      console.log("Before Running 4")
//      result;
// }
// const result = genratfun();
// console.log(result);
// console.log(result.next());
// console.log(result.next());
// console.log(result.next());
// console.log(result.next());
// console.log(result.next());
// console.log(result.next());

// for (const num of result) {
//      console.log(num);
// }
*/

// Module Export And Import
// import { add, div, mul, Sub } from "./module.js";
// console.log(add(10, 10))
// console.log(Sub(20, 10));
// console.log(mul(9, 4));
// console.log(div(30, 3));
/*
// STATIC and Class
// class StaticMethod {
//      static num = 0;

//      increment() {
//           StaticMethod.num++;
//           console.log(`The value of increment is : ${StaticMethod.num}`)
//      }
// }
// const num = new StaticMethod();
// num.increment();
// num.increment();

// const num1 = new StaticMethod()
// num.increment()
// num.increment()
// num.increment()
// num.increment()


// class IncreNum {
//      constructor() {
//           this.num = 0;

//      }
//      increment() {
//           this.num++;
//           console.log(`The value of incement is : ${this.num}`)
//      }
// }
// const num = new IncreNum();
// num.increment();
// num.increment();

// const num1 = new IncreNum();
// num1.increment();
// num1.increment();
 */

/*
// CONSTRUCTOR in javascript.......
// class car {
//      constructor() {
//           console.log("constructor is colled...")
//           this.model = "Apachi"
//           this.year = "2025"
//           this.brand = "Toyata"
//           this.price = "2cr"
//      }
//      setCarDetails(model, year, brand, price) {
//           this.setCarDetails = model, brand, year, brand, price
//      }
//      printCarDetails() {
//           console.log(`The Car Model is ${this.model} , car Year ${this.year} , car brand  ${this.brand} and car price is ${this.price} `)
//      }
// }
// const car1 = new car();
// car1.model = "Wegnor";
// car1.year = 2024;
// car1.brand = "Toyota";
// car1.price = "3cr";
// car1.printCarDetails()
*/

/*
// OOPS Object orianted Programing............
// like  a blue print
// parts of classes  {constritor , propeties ,  functions}

// class Rana {
//      constructor() {
//           console.log("Constuctor is called...")
//           this.owner = "Rana ji"
//           this.year = "2023"
//           this.company = "Software Company"
//           this.patner = " android gyan"
//           this.setWebUserAge = ""
//           this.setWebUserName = ""
//      }
//      printWebDetails() {
//           console.log(`The Website owner is : ${this.owner} , Company ${this.company} , partener  ${this.patner} , start year  ${this.year}`)
//      }

//      setWebUserName(username) {
//           this.username = username;
//           console.log(username);
//      }
//      setWebUserAge(userAge) {
//           this.userAge = userAge;
//           console.log(userAge)
//      }
//      printWebUserDetails() {
//           console.log(`Company ${this.company} , partener  ${this.patner} , start year  ${this.year} and ${this.printtable} and user is : ${this.username} and user age is : ${this.userAge}`)
//      }
//      printtable() {
//           for (let i = 1; i <= 10; i++) {
//                console.log(i + 1);
//           }
//      }


// }
// const rana = new Rana();
// rana.printWebDetails();
// rana.printtable()
// console.log("**************************")
// rana.userAge = 21;
// rana.username = "king"
// rana.printWebUserDetails();
// rana.printWebDetails()




// class wegnoR {
//      constructor() {
//           console.log("construcor called..");
//           this.model = " wegno R Sports";
//           this.year = "2023";
//           this.carNumber = ""

//      }
//      setCarNumber(carNumber) {
//           this.carNumber = carNumber;
//      }
//      printmodelandyear() {
//           console.log(`The Model of : ${this.model} and Year is : ${this.year}`)
//      }
//      printmodeNumberlandyear() {
//           console.log(`The Model of : ${this.model} and Year is : ${this.year} and model number : ${this.carNumber}`)
//      }
// }

// const wegnorcar1 = new wegnoR();
// wegnorcar1.printmodelandyear();

// let wegnorcar1 = new wegnoR();
// wegnorcar1.setCarNumber = ("jdjddjhgjg");
// wegnorcar1.printmodeNumberlandyear();

// const wegnoR1 = new wegnoR();
*/

/*
// High Order function
// function multiplyBy(factor) {
//      function multiply(number) {
//           let a = factor * number;
//           if (a % 2 == 0) {
//                return true;
//           }
//           return false;
//      }
//      return multiply;
// }
// const result = multiplyBy(3);
// console.log(result(2));

// add
// function add(a, b) {
//      return a + b;
// }

// // Multiply
// function multiply(a, b) {
//      return a * b;
// }

// function highOrde(x, y, observation) {
//      try {
//           return observation(x, y);
//      } catch (error) {
//           console.error(`The Error :${error.name} `)
//      }
// }
// const result = highOrde(2, 4, add);
// console.log(result);

// const result1 = highOrde(4, 5, multiply);
// console.log(result1)



// CLoSURE in javascript
// counter in javascript
// function counter() {
//      let count = 0;
//      function docount() {
//           count++;
//           console.log(count);
//      }
//      return docount;
// }
// const result = counter();
// result()
// result()
// result()
// result()
// result()
// result()
// result()

// isame to ham function ke andar hi function ko bvanate hai or call karte hai
// function fi1(name) {
//      // console.log(`The Name of our value : ${name}`)
//      function innerfun() {
//           return console.log(`The Value of innerfunction : ${name}`)
//      }
//      return innerfun;
// }
// const result = fi1("Rana ji");
// const result1 = fi1("King ji");
// const result2 = fi1("Ram ji");
// const result3 = fi1("Laxman ji");
// result1("king")
// result();
// result2();
// result3();


// Recursion in javascript
// Way to calculate question in short method
// function Recursion(n) {
//      if (n == 0) {
//           return 1;
//      }
//      let a = Recursion(n - 1);
//      return n * a;
// }
// const result = Recursion(6);
// console.log("Result : ", result)
*/

/*
// High order function just isme ham function ke andar function ko call kar sakte hai
// function multiplyBy(factor) {
//      function multiply(number) {
//           return factor * number;

//      }
//      return multiply;
// }
// const resul = multiplyBy(4);
// console.log(resul(10))
// console.log(resul(100))


// // *********
// function add(a, b) {
//      return a + b;
// }
// // add();
// function multiply(a, b) {
//      return a * b;
// }
// // multiply();

// function highOrder(x, y, observation) {
//      try {
//           return observation(x, y);
//      } catch (error) {
//           console.error(error.name);
//      }
// }
// const result = highOrder(1, 2, add);
// console.log(result);
// const result1 = highOrder(3, 4, multiply);
// console.log(result1);
*/

/*
// Closure in javascript

// Example of value
// function printHello(name) {
//      // return console.log(`Hello ${name}`)
//      function inndefunction() {
//           console.log(`Hello innerFunction ${name}`)
//      }
//      return inndefunction;
// }
// const result1 = printHello("Rana ji");
// const result2 = printHello("King ji");
// const result3 = printHello("Animal ji");
// const result4 = printHello("Ram ji");
// result1();
// result2()
// result3();
// result4();

// use in couter Examples
// function couter() {
//      let cout = 0;
//      function doconu() {
//           cout++;
//           console.log(`The  count value is : ${cout}`)
//      }
//      return doconu;
// }
// const result = couter();
// result();
// result();
// result();


// closure examle without value
// function fun1() {
//      function innerFunction() {
//           return 10;
//      }
//      return innerFunction;
// }
// const fun1Result = fun1();
// console.log("fun1Result  : ", fun1Result);

// const innerFunctionresulr = fun1Result();
// console.log("innerFunctionresulr : ", innerFunctionresulr)


// function fun1() {
//      return 1;
// }
// const myfunResult1 = fun1();
// console.log("myfunResult1 : ", myfunResult1)
*/

// Recursion in javascript
// function findnumber(n) {
//      if (n == 0) {
//           return 1;
//      }
//      for (let i = 1; i <= 100; i++) {
//           for (let j = 1; j <= 10; j++) {
//                console.log(`the table of ${i} * ${j} = :  ${i * j}`)
//           }
//           console.log("********************")
//      }

// for (let i = 0; i <= n; i++) {
//      console.log(i + 1);
// }

// for (let i = 1; i <= n; i = i + 2) {
//      console.log(i);
// }

// for (let i = n; i >= 1; i--) {
//      console.log(i);
// }

// for (let i = 1; i <= n; i++) {
//      console.log(i);
// }
// }
// findnumber(5);
// console.log(result);


// function calFactorial(n) {
//      if (n == 0) {
//           return 1;
//      }
//      return n * calFactorial(n - 1);
// }
// let result = calFactorial(6);
// console.log(result);


// function fi(a, b) {
//      let c = a * b;
//      console.log(c);
// }
// fi(111543212, 222342);

/*
// Differnet  types of Function in javascript
// 05> Anonymous Function
// function fi() {
//      let a = 101;
//      let b = 30;
//      console.log(b + a);
// }
// fi();

// 04> IIFE (immidiate invoke function Expression)
// (() => {
//      console.log("Hello Rana")
// })()

// 03> Aero Function
// ((a, b) => {
//      let result = a + b;
//      console.log(result);
//      return result;
// })(10, 20);


//  02 > Function Expression
// const rana = function fi(a, b) {
//      let c = a + b;
//      console.log(c);
// }
// rana(20, 33);

// 01 >
// function fi() {
//      console.log("Hello Rana...")
// }
// fi();
*/

/*
// Decleare ans using variable
// function fi(a ,b){
//     let c  = a + b;
//     console.log(c);
//     return c;
//     console.log("Rana ji");
// }
// fi(10,30);

// function fi("This is pranthieses...") {

// }
// fi();

// function fi() {
//      console.log("Hello Rana..")
// }
// fi();
*/

/*
// let / const  use before declaring..
// HOISTED IN JAVASCRIPT to use before declarence code...
// fi(2, 3);
// function fi(a, b) {
//      console.log(a + b)
// }

// function fi() {
//      // console.log(a);
//      // let a = 80;

//      // console.log(a);
//      // const a = 800;
// }
// fi();
// console.log(a);
// const a = 80;
// console.log(a);

// console.log(a);
// let a = 20;

// function fi() {
//      console.log(a);
//      var a = 90;
//      console.log(a);

// }
// fi();

// console.log(a);
// var a = 20;

// function fi() {
//      // console.log(a);
//      let a = 32;
//      console.log(a);
// }
// fi();
// console.log(a);
// var a = 10;
// console.log(a);

// // console.log(a);
// let a = 10;
// console.log(a);

// let name = "Rana ji Ghar pe hai"
// let encoded = encodeURIComponent(name);
// console.log(encoded);
// let uncoded = decodeURIComponent(encoded);
// console.log(uncoded);
*/

// function f1() {
//      let a = 20;
//      console.log(a);
// }
// f1();
// console.log(`This is ReferenceError is : ${a}`);

/*
// Error Object URL AND OBJECT ERROR.

// {
//      const a = 29;
//      console.log(a);
// }
// const a = 40;
// console.log(a);

// {
//      let a = 20;
//      console.log(a);
// }
// let a = 30;
// console.log(a)

// const a = 19;
// console.log(a)
//  a = 20
// console.log(a);

// var a = 19;
// var a = 29;
// console.log(a);

// let a = 20;
// a = 22;
// console.log(a);

// const a = 20;
// a = 34;
// console.log(a);

// function f1(name) {
//       let a = 12;
//       console.log(a);
//       console.log("Hey Rana ji", name);
// }
// f1("King");
// console.log(a);


// let mysite = "https://wwwyamrajgaming:04";
// let encode = encodeURIComponent(mysite);
// console.log(`The value of encoded is : ${encode}`);

// let Decoded = decodeURIComponent(encode);
// console.log(`The value of Decoded is : ${Decoded}`);


// function rana(a, b) {
//      // let add = a + b;
//      // console.log(`Theis is function.. :  ${add}`)
// }
// rana(10, 20);
// console.log("Code is running.......");
*/

/*
// Try and Catch
// New Example of Error Handling in javascript
// function rana(a, b) {
//      if (a === 0 || b === 0) {
//           throw new Error("Your value is Zero.....");

//      }
//      return a ** b;
// }
// // use Try and Catch
// try {
//      console.log("i ma try block..");
//      const result = rana(4, 0);
//      console.log(result);
// } catch (error) {
//      console.log("i Am catch block...");
//      console.log(error, "This is the Error...");
//      console.log("name", error.name);
//      console.log("Message", error.message);
//      console.log("stack", error.stack);
// }
// finally {
//      console.log("i am finally block...");
// }
// console.log("After multiplying...");

// custom error
// function result(a, b) {
//      if (b === 0) {
//           throw new Error(" B can not Zeroo...");
//      }
//      return a * b;
// }
// try {
//      console.log("I am Try Block...");
//      const result1 = result(4, 0);
//      console.log(result1)
// } catch (error) {
//      console.log("I am Catch Block...");
//      console.log(error, "Error is occurse..");
//      console.log("Message", error.message);
//      console.log("stsck", error.stack);
//      console.log("Name ", error.name)
// }
// finally {
//      console.log("I am Finally Block...");
// }
// console.log("After Devision...")


// const result = someFunction();
// // console.log(result);
// console.log("After error..")

// try {
//      const result = someFunction();
// } catch (error) {
//      console.error(error);
// }
// console.log("After Error..")
*/

// IIFE
// ((name) => (
//      console.log(`Welcome To My Website and my Gaming life ${name}`)
// ))("Rana ji");

// function rana(name) {
//      console.log(name)
// }
// rana("Rana ji")

// Object;
// let obj = { name: "Rana  ji", age: 21, gf: true };
// let ar = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

// for (const a in obj) {
//      console.log(a)
// }

// for (const key of ar) {
//      console.log(key);
// }
// console.log(obj);

/*

//Reduce Method
// let ar = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// REDUCE
// let red = ar.reduce((acc, currvalue) => (acc + currvalue), 0)
// console.log(red);

// let re = ar.reduce((acc, currvalue) => {
//      return acc + currvalue;
// })
// console.log(re);

// Filter
// let fil = ar.filter((num) => (num >= 5));
// console.log(fil)

// let fil = ar.filter((num) => {
//      return num > 4;

// })
// console.log(fil);

// MAP
// let ma = ar.map((num) => (num + 100))
// console.log(ma);

// let ma = ar.map((num) => {
//      return num + 1000;
// })

// console.log(ma)
// forEach
// ar.forEach((num) => {
//      let c = num * 2;
//      console.log(c);
// })

// we can't stroe the vlaue in a  variable
// let a = ar.forEach((num) => {
//      return num + 100;
// })
// console.log(a);
// console.log(ar);
*/

/*

// TypeOf Conversion  In javascipt..

// let num = 1;
// let boolean = true;
// let add = num + boolean;
// let con = Boolean(num);
// console.log(typeof con)

// 2st String to Number
// let nam = "123";
// let convert = Number(nam);
// console.log(typeof convert)

// 1st Number to String
// let num = 123;
// let str = "123";
// let string = String(num);
// console.log(typeof (num + str))


// let num = 21;
// let str = " Rana ji";
// let add = num + str;
// let change = Number(add);

// console.log(add)
// console.log(typeof change)

*/

/*
// Map in javascript
// const myMap = new Map();
// set Value;
// myMap.set("name", "Rana ji");
// myMap.set("age", 21);
// myMap.set({ id: 222 }, " king")

// get value
// console.log(myMap.get("name"))

// Delete value
// console.log(" the value is given after deleting ", myMap.delete("name"))

// ForEach
// myMap.forEach((nam) => console.log("Using foreach : ", nam));

// For OF
// for (const nam of myMap) {
//      console.log("Using for of : ", nam)
// }

// size
// console.log(myMap.size);
// console.log(myMap.clear())
// console.log(myMap);


// SET in javascript
// const rana = new Set();
// rana.add("Hello Rana");
// rana.add("Apple");
// rana.add("banana");
// rana.add("Grapes");
// rana.add("lichi");
// console.log(rana.size);
// console.log(rana.has("lichi"))
// console.log("Set before adding...", rana);
// rana.add("Hello Rana");
// console.log("Set After Adding..", rana);
// rana.delete("Apple");
// console.log("The value after delete value :", rana);

// rana.clear();
// console.log("Clear all values in my set :", rana)
*/


// break statement and continue statement
// const arr = [10, 20, 30, 40, 50, "Rana ji", 60, 70, 80, 90, 100]
// for (let i = 0; i < arr.length; i++) {
//      // if (arr[i] == 20) {
//      //      continue;
//      // }
//      // if (arr[i] === "Rana ji") {
//      //      continue;
//      // }
//      console.log(arr[i]);
// }
// console.log(arr)

// for (i = 0; i <= 10; i++) {
//      if (i === 3) continue;
//      console.log(i);
// }
// Constinue
// for (let i = 0; i <= 10; i++) {
//      if (i == 3) {
//           continue;
//      }
//      if (i == 9 || i == 5) {
//           continue;
//      }
//      console.log(i);
// }

// Breake
// let day = 1;
// switch (day) {
//      case 1: console.log("Rana ji"); break;
//      case 0: console.log("Rana ji iam one"); break;
//      case 2: console.log("Rana ji ghar me hai"); break;
//      case 3: console.log("Rana ji boliye"); break;
//      case 4: console.log("Rana ji kaho jo bhi bolna hai");
//           break;
//      default:
//           break;
// }

// For In Loops in javascipt
// const obj = { name: "Rana ji", age: 21, city: "Ranchi", course: "Web development" };

// for (const key in obj) {
//      console.log(key, " : ", obj[key]);
// }

// const array = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
// for (const key in array) {
//      console.log(key, array[key])
// }

// array.filter((num) => {
//      console.log(num % 3 == 0)
// })
// console.log(array)

// array.forEach((num) => {
//      console.log(num + 10 + 1000)
// })
// array.map((num) => {
//      console.log(num * 2)
// })



// console.log(obj)

// LOOPS oF Loop in  JAVASCRIPT
// loops in string
// const name = "Rana  ji Ghar me hi hai";
// for (const rana of name) {
//      console.log(rana);
// }
// console.log(name);

// loops in aray
// const arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
// for (const rana of arr) {
//      // rana.toFixed(2)
//      console.log(rana);
// }

// console.log(arr);

// Object
// const person = { name: "Rana ji", age: 21, course: "Web Development" };
// const copyPeson = person;
// copyPeson.name = "Amisha Kumari";
// console.log(copyPeson);

// const personalDeepCopy = { ...person };
// personalDeepCopy.name = "Rana ji Gahr pe hai...."
// console.log(personalDeepCopy);
// console.log(person);


// WHILE LOOPS
// const nam = "Rana ji And Amisha";
// let a = 0;
// while (nam.length > a) {
//      console.log(nam[a])
//      a++;
// }

// const name1 = "Rana ji And Amisha";
// let d = 0;
// while (name1.length > d) {
//      console.log(name1[d]);
//      d++;
// }

// infinite Loops
// let i = 1;
// while (i < 100) {
//      console.log(i)
// }

// Multiplay to 1 to 10
// let i = 1;
// while (i <= 10) {
//      let j = 1;
//      while (j <= 10) {
//           console.log(`The Table of ${i} to = ${i} * ${j} = ${i * j} `)
//           j++;
//      }
//      console.log("*******************")
//      i++;
// }

//Reverse Loops thought charcter  to a string
// const name1 = "RanajiGharpehai";
// let e = name1.length - 1;
// while (e > 0) {
//      console.log(name1[e])
//      e--;
// }


// Loops thought charcter  to a string
// const name1 = "Rana ji And Amisha";
// let d = 0;
// while (name1.length > d) {
//      console.log(name1[d]);
//      d++;
// }

// Loops Thought in Array
// let array = [10, 20, 30, 40, 50, 60, 70, 80, 90];
// while (array.length >= 1) {
//      console.log(array);
//      array++;
// }

// increment By 2
// let i = 1;
// while (i <= 20) {
//      console.log(i);
//      i = i + 1;
// }

// Reverse While Loops
// let i = 10;
// while (i >= 1) {
//      console.log(i);
//      i--;
// }

// Randam Loops
// let age = 1;
// while (10 >= age) {
//      console.log(age);
//      age++;
// }

// Conditional
// const age = 61;
// if (age <= 18) {
//      console.log("You are Child can't Drive.")
// } else if (age <= 60) {
//      console.log("You are Drive a car..");
// } else if (age <= 80) {
//      console.log("You Are old You Cant Drive a Car..");
// }

// Obeject In javascript
// const obj = {
//      name: "Rana ji",
//      age: 21,
//      fee: false,
//      number: true,
//      mobile: "Apple",
//      price: 99999,
//      topModel: "I phone 15 Pro Max",
//      phone: function () {
//           console.log(`The vaalue ${this.name} and ${this.age}`)
//      },
//      brand: function () {
//           console.log(`All Details of Mobile brand ${this.mobile} , prices ${this.price} , top ${this.topModel}`)
//      }
// }
// obj.brand();
// obj.phone();
// console.log(obj)



// OBJECT IN JAVASCRIPT
// const obj = {
//      name: "Rana ji",
//      age: 21,
//      course: "Web Development",
//      age2: true,
//      age3: 7196057110,
//      age4: null
// }
// // obj.name = "King Of Universe";
// // obj.age = 26;
// // console.log(obj);
// const calculator = {
//      add: function (a, b) {
//           return a + b;
//      },
//      subStract: function (a, b) {
//           return a - b;
//      }
// }
// const sumResult = calculator.add(10, 30);
// console.log("sumResult", sumResult);

// const subStract = calculator.subStract(30, 20);
// console.log("subStract", subStract)


// spreade Mthod In javascript
// const arr = [1, 2, 3, [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15], [16, 17, 18]];
// console.log(arr.length);
// console.log(arr[4]);

// let originalarr = [10, 20, 30, 40, 50, 60, 70, 80, 90];
// let sum = 0;
// for (let i = 0; i < originalarr.length; i++) {
//      sum = sum + originalarr[i];
//      console.log(originalarr[i])
// }
// console.log(`The Total Value of Sum is : ${sum}`)

// const find = originalarr.splice(2, 3);
// console.log(find);
// const copyarray = [...originalarr];
// const neCopyArray = [...copyarray];
// console.log(copyarray.pop());
// console.log(copyarray.push(220));
// const arr = copyarray.toLocaleString();
// console.log(typeof arr)

// console.log(copyarray.toLocaleString())
// console.log(neCopyArray)




// Chaning in javascript to using in Aray to String
// let arr = ["Brajesh", "Kingkumar", "Amisha Sharma", "Kajakuma", "Koma", "Kumar", "Rana"];
// let result = arr.filter(cahr => cahr.length <= 4);
// let result = arr.filter(char => char.length <= 7);
// console.log(result);

// Chaning Method In javascript
// let number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let result = number.filter((num) => num % 2 == 0).map((num) => num * 2).reduce((num) => num + num);
// console.log(result);

// Reduce
// const color = ["Red", "Green", "blue", "Red", "Red", "Blue", "Yellow", "white", "orange", "blue", "white"]
// const findNum = color.reduce(function (accumlater, currentvalue) {
//      if (!accumlater[currentvalue]) {
//           accumlater[currentvalue] = 0;
//      }
//      accumlater[currentvalue] = accumlater[currentvalue] + 1;
//      return accumlater;
// }, {})
// console.log(findNum);


// find the sum of given array
// const arr = [10, 20, 30, 40, 50];
// const sum = arr.reduce((a, b) => (a + b));
// console.log("The Sum Of Value : ", sum);

// find the maximun value in javascript
// const arr = [10, 20, 30, 40,  70, 50, 60];
// const maxnum = arr.reduce((accumlater, currentvalue) => {
//      if (accumlater > currentvalue) {
//           return accumlater;
//      }
//      return currentvalue;
// })
// console.log(maxnum);

// const arr = [10, 20, 30, 40, 50, 60];
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//      sum = sum + arr[i];
// }
// console.log("The Value of Sum : ", sum);


// const str = ["ranaji", "king", "lichi", "mango"];
// const map = str.map(str => str.toUpperCase());
// console.log(map)

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let result = [];
// for (let i = 0; i < arr.length; i++) {
//      result.push(arr[i] * 3);
// }
// console.log(result);
// const ans = arr.map((num) => num * 3);
// console.log(ans);
// console.log(arr);



//  String
// const str = ["Ranaji", "King", "apple", "banana", "grapesh", "lichi"];
// const find = str.find(str => str.startsWith("Ra"));
// const find = str.find(str => str.endsWith("ana"));
// const find = str.length;
// const find = str.includes("Ranaji")
// console.log(find)
// function findNum(num) {
//      for (let i = 0; i < num.length; i++) {
//           console.log(num[i])
//      }
// }
// const nam = (findNum("Ranaji"));
// // console.log(nam);
// // findNum(str);

// for (let i = 0; i < str.length; i++) {
//      console.log(str[i].toUpperCase());
// }
// console.log(str);

// Find
// const arr = [10, 20, 30, 40, 50, 60, 11, 21, 25, 70, 80, 90, 100, 110, 120, 130, 150, 160];
// const arr = [1, 2, 3, 4, 5, 10, 20, 30, 40, 50, 60];
// //  01 > Method to find num;
// let result = 0;
// for (let i = 0; i < arr.length; i++) {
//      if (arr[i] > 15) {
//           result = arr[i];
//           break;
//      }
// }
// console.log("Result  : " + result);

// //  02 >  Find Number in Javascript
// function checkNum(num) {
//      if (num > 15) {
//           return true;
//      } else {
//           return false;
//      }
// }
// const findnum = arr.find(checkNum);
// console.log("findnum : " + findnum);

// // 03 > Find the number using aero function
// const findNum = checkNum.find((num) => num > 15)
// console.log(findNum)
// const finNum = (num) => (num > 15);
// console.log(checkNum(finNum))

// const a = arr.filter((num) => (num % 2 == 1));
// const a = arr.filter((num) => num % 3 == 1);
// console.log(a);

// arr.forEach((index, a, b) => {
//      console.log(index, a, b);
// });
// arr.map((a, b) => {
//      console.log(a, b);
// });

// using foor loops in javascript
// let card = true;
// let pas = false;
// if (card == true && pas == true) {
//      console.log("Yes");
// } else {
//      console.log("No")
// }
// console.log(arr)



// for (let i = 1; i <= 10; i++) {
//      for (let j = 1; j <= 10; j++) {
//           console.log(`  inner loops ${i} * ${j}   =  ${i * j} `)
//      }
//      console.log("  outer Loops in java " + i)
// }
//  loops in javascript

// let name = true;
// if (name) {
//      console.log("Hey")
// } else {
//      console.log("jejje")
// }

// let object = {};
// if (Object.keys(object).length === 0) {
//      // console.log(object)
//      console.log("Object is Best");
// } else {
//      console.log("Rana ji")
// }


// Find Factorial
// function factorial(n) {
//      if (n <= 1) return 1;
//      return n * factorial(n - 1);
// }
// console.log(factorial(5));

// Reverse order;
// function reverse(str) {
//      let stact = [];
//      let reve = '';
//      // for loops
//      for (let i = 0; i < str.length; i++) {
//           stact.push(str[i]);
//      }
//      //
//      while (stact.length > 0) {
//           reve += stact.pop();
//      }
//      return reve;
// }
// console.log(reverse("Hello Rana ji Welcome to My Gaming Life...."))

// let stack = [];
// stack.push(10);
// stack.push(20);
// console.log(stack);
// console.log(stack.pop());
// console.log(stack.pop());

// const arr = [2, 4, 5, 6, 8, 9, "Rana ji"];
// const arr1 = ["Rana ji Ghar pe hai", 2, 44, 2];
// console.log(arr.concat(arr1))
// console.log(arr.lastIndexOf());
// console.log(arr.splice(""));
// console.log(arr.slice(1, 3))
// console.log(arr.indexOf("Rana ji"))
// console.log(arr.unshift());
// console.log(arr.shift())
// console.log(arr.pop())
// console.log(arr.push(2000));
// console.log(arr);
// console.log(arr[4]);
// console.log(arr[0]);
// console.log(arr[2]);
// console.log(arr.length);
// console.log(arr);

// IIFE
// Immedoate invoke function expression
// IIFE IN AERO FUNCTION
// Named IIFE
// (function (name) {
//      console.log("Hey" + ` ${name}`)
// })("Rana")

// ((name) => (
//      console.log(`Hey .....  ${name} welcome to my Website..`)
// ))("King");


// (() => (
//      console.log("Rana ji this iife in aero function.. 01")
// ))();
// // Agar semi collon nhi lagayega to error ayega usko pata nhi
// // chlata hai ki kab tak code ko run karna hai;

// (() => (
//      console.log("Rana ji this iife in aero function.. 02")
// ))();


// (function rana() {
//      let a = 20;
//      let b = 30;
//      console.log(a + b);
//      console.log("Rana ji This is iife function");
// })();

// (function king() {
//      let a = 80;
//      let b = 30;
//      console.log(a + b);
//      console.log("Rana ji This is iife function");
// })();

// function rana() {
//      console.log("Rana ji This is iife function");
// } ();



// This KeyWord And Aero Functions
// Aero Function
// AGAR TUM CURLY BAraCKET KA USE KARTE HO TO TUMHE RETURN KEYWORD KA USE KARNA HOGA
// let a = () => ({ name: "Rana", age: 31 });
// console.log(a());

// let a = (num1, num2) => num1 + num2;
// console.log(a(2, 5));

// let a = (a, b) => a + b;
// console.log(a(2, 3))

// let a = (a, b) => (a + b);
// console.log(a(2, 3))

// let a = function (a, b) {
//      return a + b;
// }
// console.log(a(2, 3))


// function Rana(a, b) {
//      let c = a + b;
//      console.log(c);
// }
// Rana(12, 22);



// /THIS

// const obj = {
//      username: "Rana ji",
//      age: 21,
//      price: 999,
//      course: "web development",
//      message: function () {
//           console.log(`Hey.... ${this.username} ,  Welcome To My Website..`);
//           console.log(this);
//      }
// }
// // obj.message();
// obj.username = "Amisha";
// obj.message();
// // console.log(this.obj);
// console.log(obj);


//COMPARISION OPERATORS
// const a = "Rana";
// const a = "aaa";
// const b = "Rana";
// const b = "aaa"
// const b = "12";
// console.log(a === b);
// console.log(a > b);
// console.log(a < b);
// console.log(a >= b);
// console.log(a <= b);

// STRING IN ARRAYS
// const a = [1, 2, 3, 4, 5, "Rana ji", "King"];
// const b = a.reverse();
// const b = a.push("Amisha");
// const b = a.length;
// const b = a.join("__");
// const b = a.map(num => num + " King of Rana");
// const b = a.forEach((a, b) => (
//      console.log(b, a)
// ))
// const b = a.at(3);
// console.log(b);
// console.log(a);


// STRING
// const a = "  Brajesh Kumar Rana   ";
// const b = a.toLowerCase();
// const b = a.toUpperCase();
// const b = a.length;
// const b = a.replace("  ", "____")
// const b = a.replaceAll("  ", "____");
// const b = a.substr(1, 4);
// const b = a.substring(2, 9);
// const b = a.trim();
// const b = a.trimEnd();
// const b = a.trimStart();
// const b = a.endsWith("Rana   ");
// const b = a.startsWith("  Brajesh");
// const b = a.charAt(3)
// const b = a.indexOf("B");
// const b = a.split(" ",)
// const b = a.slice(1, 6)
// console.log(a);
// console.log(b);



// console.log(Infinity);
// console.log(-Infinity);
// console.log(10 / 0);
// console.log(-10 / 0);
// const num = Number.MAX_VALUE;
// console.log(num);
// const num = Number.MIN_VALUE;
// console.log(num);
// const num = Number.MAX_SAFE_INTEGER;
// console.log(num);
// const num1 = Number.MIN_SAFE_INTEGER;
// console.log(num1);

// Number DAta types in javascript
// PARSEINT AND PARSEFLOAT
// const a = "234.5";
// const flot = parseFloat(a);
// console.log(flot);
// console.log(typeof flot);


// const a = "  789  ";
// const a = "  7a8c9  ";
// const a = "2222.3"
// console.log(typeof a);
// const num = parseInt(a);
// console.log(num);
// console.log(typeof num);


// MAth Methos in javascript
// MATH Randomm , Math.Floor , Math.Ciel
// const num = (Math.random() * 10 + 1)
// const flore = Math.floor(num);
// const ceil = Math.ceil(num);
// console.log(num);
// console.log(ceil);
// console.log(flore);

// const tost = num.toString();
// console.log(num);
// console.log(tost.slice(2));


// ROUND
// const num = Math.random() * 10 + 1;
// const fix = num.toFixed(1);
// console.log(fix)
// const rand = Math.round(fix);
// console.log(rand)


// To Fixed
// const num = 33032.994;
// const fix = num.toFixed(2);
// console.log(fix);

/*

// const double = arr.map(num => num ** 4);
// console.log(double);
// const push = arr.push(10);
// const push = arr.pop();
// const push = arr.shift();
// const push = arr.unshift();
// console.log(push);
// console.log(arr);

// const double = arr.forEach((a, b) => {
//      const c = a + b;
//      console.log(c);
// })

// const reduce = arr.reduce((a, b) => a + b, 0)
// console.log(reduce);
// const fil = arr.filter(num => num ** 2);
// console.log(fil);
// console.log(...arr, 10, 11)
*/