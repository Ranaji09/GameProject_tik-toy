// console.log("Hello Rana");
// Getter and Setter..
// class User {
//      constructor(email, age, password) {
//           this.email = email,
//                this.age = age,
//                this.password = password
//      }
//      get email() {
//           return `${this._email}Rana ji`
//      }
//      set email(value) {
//           this._email = value
//      }
//      get age() {
//           return `${this._age}the age of `
//      }
//      set age(value) {
//           this._age = value;
//      }
//      get password() {
//           return `The password of  the value of ${this._password}`
//      }
//      set password(value) {
//           this._password = value;
//      }}
// const rana = new User("ranaji@123", 21, 123);
// console.log(rana);

// class User {
//      constructor(email, password) {
//           this.email = email,
//                this.password = password
//      }
//      get email() {
//           return `${this._email}Rana ji`
//      }
//      set email(value) {
//           this._email = value;
//      }
//      get password() {
//           return `${this._password}Rana ji`
//      }
//      set password(value) {
//           this._password = value;
//      }
// }
// const rana = new User("Rana@ji123", "123");
// console.log(rana)


// function Rana(a, b) {
//      let c = a + b;
//      console.log(c);
// }
// Rana(12, 20);

// let chai = {
//      name: "Rana ji",
//      age: 21,
//      price: 0,
// }
// Object.defineProperty(chai, "name", {
//      writable: false,
//      enumerable: false,
//      configurable: false
// })
// let a = Object.getOwnPropertyDescriptor(chai, "name");
// console.log(a);

// console.log(chai);

// let chai = {
//      name: "Rana ji",
//      price: 250,
//      age: 32,
//      available: true,
//      name: "King"
// }
// Object.defineProperty(chai, "name", {
//      writable: false,
//      enumerable: false,
//      configurable: false,
// })
// for (const [key, value] of Object.entries(chai)) {
//      console.log(key, ":", value)
// }

// let a = Object.getOwnPropertyDescriptor(chai, "name");
// console.log(a)

// let b = Object.getOwnPropertyDescriptor(Math, "PI")
// console.log(b);

// let obj = {
//      name: "Rana ji",
//      age: 21,
//      price: 0,
//      course: "web development"
// }
// let detals = Object.getOwnPropertyDescriptor(obj, "age");
// // console.log(detals);

/*
// All revesion in one function
// function expensiveMethod(params) {
//      const promise = new Promise((resolve, reject) => {
//           setTimeout(() => {
//                resolve("this value is resolve..");
//                reject("this value is rejected..")
//           }, 2000);
//      })
//      return promise;
// }
// async function callerMethod1(params) {
//      const result = await expensiveMethod();
//      console.log("This callermethod1 is called ", result)
// }
// callerMethod1();
// function callermethod1(a, b) {
//      let c = a + b;
//      console.log(c);
// }
// setTimeout(callermethod1, 3000, 20, 33);
// const a = setTimeout(() => {
//      console.log(`The value of inner timeout....`)
// }, 5000)
// console.log(a);
// clearInterval(a);
*/

/*
// setTimeout and clearTimeout
// setTimeout(() => {
//      console.log("Set Timeout...")
// }, 2000);

// settimeout External function
// function fun1() {
//      console.log("SetTimeout External  function...")
// }
// setTimeout(fun1, 3000);

// setTimeout with argument and complete task
// function fun2(a, b) {
//      let c = a + b;
//      console.log(`Value of c ${c}`)
// }
// setTimeout(fun2, 4000, 10, 40);

// ClearTimeOut
// const userId = setTimeout(() => {
//      console.log(`Inside timeout...`)
// }, 5000);
// console.log(userId);
// clearTimeout(userId);
*/

/*
// ASYNC AND WAIT SYNK FUNCTION
function expensiveMethod() {
     const promis = new Promise(function (resolve, reject) {
          setTimeout(() => {
               resolve("expensiveMethod is resolve..");
               reject("expensiveMethod is rejected..")
          }, 2000)
     })
     return promis;
}
function callerMethod1() {
     const promise = expensiveMethod();
     promise.then((result) => {
          console.log(`The value of expensiveMethod 1 ${result}`)
     })
     promise.catch((error) => {
          console.log(`The value of expensiveMethod 1 ${error}`)
     })
     // promise.finally(function () {
     //      console.log("The finally is calledMethod 01..")
     // })
     console.log(`The Value Excuted before using await...`)
}
callerMethod1();
async function callerMethod2() {
     let result = await expensiveMethod();
     console.log(`The expensiveMethod 2 ${result}`)
     console.log(`The Value Excuted After using await...`);

}
callerMethod2();

// using try and catch
// function expensiveMethod() {
//      const promise = new Promise((resolve, reject) => {
//           setTimeout(() => {
//                resolve("The Value of resolve...");
//                reject("Value is rejected..")
//           }, 2000);
//      })
//      return promise;
// }
// async function callerMethod1() {
//      try {
//           const result = await expensiveMethod();
//           console.log(`The value of result is ${result}`)
//      } catch (error) {
//           console.error("error Ocurred...")
//      }
// }
// callerMethod1()
*/

/*
// All In one Pratices
console.log("The Value of promise Before called...")
function  prmoceObject() {
     const promise = new Promise((resolve , reject) => {
          setTimeout(() => {
               resolve("The value is excited...");
               reject("The value is rejected...");
          }, 2000);
     });
     return promise;


}
const promise = prmoceObject();
promise.then(() => {
     console.log("the value of then is....")
})
promise.then(() => {
     console.log("the value of then1")
})
promise.then(() => {
     console.log("the value of then2")
})
promise.then(() => {
     console.log("the value of then3")
})
promise.catch(() => {
     console.log("The value of catc4")
})
promise.finally(() => {
     console.log("The value is finnaly called...")
})
// // Promise Object simple function..
// console.log("Before promiseObject creation.");
// const promisobj = new Promise(function (resolve, reject) {
//      setTimeout(() => {
//           console.log("inside expensive operations");
//           resolve("Expensive operation done sucessfully.")
//      }, 2000);
// })
// console.log("Before promiseObject then.");
// promisobj.then(function (result) {
//      console.log("Then called ", result)
// });
// console.log("After promiseObject then.");

// console.log("Before the function object method...")
// // Promise Object returned by a function..
// function expensiveMethod() {
//      const promise = new Promise((resolve, reject) => {
//           setTimeout(() => {
//                resolve("expensiveMethod sucess!")
//           }, 2000)
//      })
//      return promise;
// }
// const promise = expensiveMethod();
// promise.then((result) => {
//      console.log("Inside promis", result);
// })
// console.log("Outside the function........")


// Promise catch error;
// console.log("The Value of oromice object is Before call")
// const promisObject = new Promise((resolve, reject) => {
//      setTimeout(() => {
//           // resolve("The Value of resolve is sucess!")
//           reject("The value is Occured rejected....!")
//      }, 2000);
// })

// // promisObject.then((result) => {
// //      console.log("The value of rsult is ", result);
// // })
// promisObject.catch(function (error) {
//      console.log("the value of error is : ", error)
// })


// Promise object called to finaly Method
// function promiseObject() {
//      const promise = new Promise((resolve, reject) => {
//           setTimeout(() => {
//                resolve("The Promise is called...");
//                // reject("The value  of promise is rejected...")
//           }, 2000);
//      })
//      return promise;
// }
// const promis = promiseObject()
// promis.then((result) => {
//      console.log("Then Call ho gaya....!", result)
// })
// // promis.catch((error) => {
// //      console.log("the Value of Error....", error);
// // })
// promis.finally(() => {
//      console.log("The Finnal is called always...");
// })

//Chaninng promises
// console.log("the value is called before excution..")
// function promisObject() {
//      const promis = new Promise(function (resolve, reject) {
//           setTimeout(() => {
//                resolve("The  value of resolve is ....")
//           }, 2000);
//      })
//      return promis;
// }

// const promis = promisObject();
// promis.then(() => {
//      console.log("The Value of excution on then 1");
// })
// promis.then(() => {
//      console.log("The Value of excution on then 2");
// })
// promis.then(() => {
//      console.log("The Value of excution on then 3");
// })
// promis.finally(() => {
//      console.log("The vlaue of finally called..")
// })
*/

// Fetch
/* 
// import fetch from 'node-fetch';
// function realApiRequest(callbacks) {
//      const apiUrl = "https://api.chucknorris.io/jokes/random";
//      fetch(apiUrl).then(response => { const result = response.json(); return result; }).then(data => { console.log(data); callbacks(data); })
// }
// function realApiResponse(response) {
//      console.log("jokes of the day is : ", response.value)
// }
// realApiRequest(realApiResponse());

// function realApiRequest(callbacks) {
//      const apiURL = "";
//      fetch(apiURL).then(response => { const result = response.json(); return result }).then(data => { console.log(data); callbacks(data); })
// }
// function realApiResponse(response) {
//      console.log(`The real Value is : ${response.value}`)
// }
// realApiRequest(realApiResponse());
*/