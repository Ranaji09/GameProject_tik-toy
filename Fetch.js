// ProtoTypes in javascript
/* 
// function user(username) {
//      this.username = username;
// }
// function userdetails(username, age, isLogdin, isLogout) {
//      user.call(this, username);
//      this.age = age;
//      this.isLogdin = isLogdin;
//      this.isLogout = isLogout;
// }
// const result = new userdetails("Rana ji", 21, true, false);
// console.log(result);
*/

// Consructor Function 
// function User(username, age, isLogdin, isLogout) {
//      this.username = username;
//      this.age = age;
//      this.isLogdin = isLogdin;
//      this.isLogout = isLogout;
//      return this;
// }
//  ESAME USER OVERWRITE KAR DETA HAI..
// const result = User("Rana ji", 21, true, false);
// const result1 = User("Amisha", 22, false, true);
// console.log(result);

// NEW KEYWORD KA USE KARNE KE BAD OVERWITE NHI KARTA HAI
// const result = new User("Rana ji", 21, true, false);
// const result1 = new User("Amisha", 22, true, false);
// console.log(result);
// console.log(result1);
// console.log(result.constructor)



// Object Litterel
const obj = {
     username: "Rana ji",
     age: 21,
     isLogdin: true,
     userProfile: function () {
          // can't acces
          // console.log(`The Details value of user is : ${username}`)
          // const a = `The Details value of user is ${this.username}`;
          // console.log(a);

          // console.log(this)
     }
}
// console.log(obj.username)
// console.log(obj["username"])
// console.log(obj.userProfile())


// function randomjokes() {
//      const jokes = fetch("https://github.com/Ranaji09");
//      jokes.then(response => {
//           if (!response.ok) {
//                throw new Error("Network id not Response..");
//           }
//           // return response.json();
//      })
//      jokes.then(data => {
//           console.log(`The value of data is`, data)
//      })
//      jokes.catch(error => {
//           console.error('There was a problem with the fetch operation:', error);
//      })
//      jokes.finally(() => {
//           console.log("The Print Finnal Value..");
//      })
// }
// randomjokes(); 