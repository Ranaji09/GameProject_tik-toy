//  30 > basic calculator../

// let  userChoice = prompt(`Please Select one of the below options 
//   1. Press 1 for Additions
//   2. Press 2 for Substraction
//   3. Press 3 for multiplcation
//   4.  Press 4 for Division.`)
// // console.log(userChoice)
// userChoice  = parseInt(userChoice);
// // using Switch  conditions
// switch (userChoice) {
//   case 1:
//     console.log("Additions.")
//     break;
//   case 2 : 
//     console.log("Substraction.")
//     break;
//   case 3 : 
//    console.log("Multiplication.");
//    break;
//   case 4 : 
//     console.log("Division.")   
//     break;
//   default:
//     console.log("Please Enter Valid Number..")
//     break;
// }


// 29 >   Prompt Sync game 
// const  prompt = require("prompt-sync")();
// const random = Math.floor(Math.random() * 100) + 1;
// console.log(random);
// const userInput = prompt(  );
// console.log(typeof userInput)
// // console.log(userInput.valueOf(userInput));
// userInput = parseInt(userInput);

// if (userInput !=  random) {
//   if (userInput > random) {
//     console.log("The value of your Guess is High..")
//   } else {
//     console.log("Your input value is to High..")
//   }
// }
// console.log("Congrates You are guess Correct value.." )

// 28 Alarm Clock 
/* 
// function setAlarm(hour, minute) {
//   const now = new Date();
//   const alarmDate = new Date();
//   alarmDate.setHours(hour);
//   alarmDate.setMinutes(minute);

//   const different = alarmDate - now;
//   if (different < 0) {
//     console.log("Plaese Enter Future Date..");
//     return;
//   }
//   setTimeout(() => {
//     console.log("Time up Alarm.....")
//   }, different);
//   console.log(now, alarmDate, different);
// }
// const result = setAlarm(15 , 7);
// console.log(result);
*/

// 27 >  Math Random Value
// const value = Math.floor(Math.random() * 100)
// let j = 0;
// while ( j < value) {
//   console.log(j);
//   j++;
// }
// // value.toFixed(2) 
// console.log(value)

// 26 > Parantises Checker in javascript
/* 
const Parantises = {
  '{' : '}',
  '[' : ']',
  '(' : ')'
}
// console.log(Parantises['{'])
// console.log(Parantises['['])
// console.log(Parantises['('])

function PC(inputStr) {
  const PA = [];
  for (let char of inputStr) { 
    if (Parantises[char]) {
      PA.push(char);
    }   else if (char === ')' || char === ']' || char === '}') {
      const lastPar = PA.pop();
      if (Parantises[lastPar] !== char) {
        return false;
      }
     
    }
  }
  return true;
  // console.log(PA)
  // console.log(inputStr)
}
const  result = PC("{[()]}");
console.log(result);
*/
// 25  >Tip Calculato in  javacript
/*
// function TC(Amount, tip) {
//   // using Loops 
//   let result = [];
//   for (let i = 0; i < tip.length; i++) {
//     // console.log(tip[i])
//    let TipAmount = Amount * (tip[i] / 100)
//   //  console.log(TipAmount)
//   TipAmount = TipAmount.toFixed(2);
//   result.push(TipAmount)
//   }
//   console.log(`The Total Amount of Tip  = ${Amount} , ${[tip]}  = ${result}`)
//   // console.log(tip)
// }
// const result = TC(1000 ,[ 5,10,15]);
// const result = TC(1000 ,[ 5,10,15]);
// const result = TC(888 ,[ 5,10,15]);
*/

// 24 Check Password to strong..
/*
// function SPC(PasswordStr) {
//   // Trim Spaces
//   PasswordStr = PasswordStr.trim();
//   // Length Check
//  if (PasswordStr.length < 8) {
//   return false;
//  }
// //  Check All conditions
// const LowerCase = "abcdefghijklmnopqrstuvwxyz";
// const UpperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// const number = "1234567890";
// const SPC = "!@#$";

// let LowerCaseExit = false;
// let UpperCaseExit = false;
// let numberExit = false;
// let SPCExit = false;

// //  UsingLoops
// for (const char of PasswordStr) {
//   if (LowerCase.includes(char)) {
//     LowerCaseExit = true;
//   } else if(UpperCase.includes(char)){
//     UpperCaseExit = true;
//   } else if (number.includes(char)) {
//     numberExit = true;
//   } else if (SPC.includes(char)) {
//     SPCExit =  true;
//     // console.log(char)
//   }
//   // console.log(char)
// }
// if (LowerCaseExit && UpperCaseExit && numberExit && SPCExit) {
//   return true;
// } else{
//   return false;
// }
//   // console.log(PasswordStr);
// }
// // const result = SPC("Ranaji@123");
// const result = SPC("ji!12wyJy3");
// console.log(result);
*/

//  23 > Print Matrix Transpose 
// function PMT(intA) {
//   const nor = intA.length;
//   const noc = intA[0].length;
//   const result =  [];
//   for(let i = 0; i< nor; i++){
//     for (let j = 0; j <noc; j++) {      
//       // console.log(intA[i][j]);
//       if (!result[j]) {
//         result[j] = [];
//       }
//       result [j][i] = intA[i][j];
//     }
//   }
//   return result;
// }
// console.log(PMT([[3,4,8],
//                   [5,6,9]]));


// 22 > Prinr are Anagrames 
// function PrintAnagranes(s1, s2) {
//   s1 = s1.toLowerCase();
//   s2 = s2.toLowerCase();
//   if (s1.length != s2.length) {
//     return false;
//   }
//   let obj = {};
//   for (const char of s1) {
//     if (!obj[char] ) {
//       obj[char] = 0;
//     }
//     obj[ char] = obj[char] + 1;
//   }
//   console.log(obj);
  
// let obj2 = {};
// for (const char2 of s2) {
//   if (!(obj2[char2])) {
//     obj2[char2] = 0;
//   }
//   obj2[char2] = obj2[char2] + 1;
// }
// console.log(obj2)

// for (const key in obj) {
//   if (obj[key] !== obj2[key]) {
//     return false;

//   }
// }
// return true;
// }

// const result = PrintAnagranes("pools" , "spool");
// const result = PrintAnagranes("anar" , "Rana");
// const result = PrintAnagranes("poolls" , "spool");
// const result = PrintAnagranes("rac" , "car");
// console.log(result);

  /*
// 21 Check This String is alphabetical Order or Not..
// function CheckAlphaBrtical(str) {
//     // Loops 
//     str = str.toLowerCase();
//     for(let i = 0 ; i<=str.length; i++){
//        compare to our char
//       if (str[i] > str[i + 1]) {
//         return false ;
//       }
//     }
//     return true;
// } 
// const result = CheckAlphaBrtical("abcdefghijklmnopqrstuvwxYz");
// console.log(result);

//  20 >  Print all present charcter 
// function PrintChat(str) {
//   str = str.toLowerCase();
//   let result  = {};
//   for(let i  = 0 ; i <=str.length; i++){
//     if ( ! (result[str[i]])) {
//       result[str[i]] = 0;
//     }
//     result[str[i]] = result[str[i]] + 1;
//   }
//   return result;
// }
// const result = PrintChat("Rana ji");
// console.log(result);

//  19 > Pyramid Print 
// function PyramidPrint(num) {
//   // Number Print
//   for(let i = 1; i<=num; i++){
//     let space = "";
//     // Space Print
//     for(let j = 1; j<= num-i; j++){
//       space = space + " ";
//     }
//      // Total  Number Print
//     for(let k = 1; k<=i; k++){
//       space = space + k;
//     }
//     // Reverse Number Print
//     for(let l = i - 1 ; l >= 1; l--){
//       space = space + l
//     }
//     console.log(space )
//   }
// }
// PyramidPrint(10);

// 18 Print Buzz And Fizz
// function printFZ(num) {
//   if (num % 3 == 0 && num % 5 == 0) {
//     console.log("FizzandBuzzz..")
//   } else if(num % 5 == 0){
//     console.log("Buzz");
//   } else if (num % 3 == 0 ){
//     console.log("Fizz")
//   }
// }
// printFZ(5)
// const result = printFZ(15);
// console.log(result);
*/

// 17 > convert  celsious to Fharenhate 
// function tempinF(temp) {
//   const value = (temp * 9 / 5) + 32
//   let v = Math.round(value);
//   return v;
// }
// const result = tempinF(27);
// console.log(result ,"F");


//  16> count word in a sentances ;
// function CW(word) {
//   // console.log(word)
//   // console.log(word.length)
// word = word.trim()
// // console.log(word.length)
// const splitword = word.split(' ');
// // console.log(splitword.length);
// const removeSpace = splitword.filter((w) => w != "")
// // console.log(removeSpace);
// return removeSpace.length;
// }
// const result  = CW("Hello Rana Welcome To my Gaming life");
// // const result  = CW("         Hello Rana Welcome To my Gaming life    ");
// // const result  = CW("   Hello      Rana   Welcome  To my       Gaming   life    ");
// console.log("Total word count is : ",result);

/*
// 15 > Simple interest to using javascript
// function SPI(A, R, Y) {
//   if (typeof A != "number") {
//     throw new Error("Please Enter Your Amount...");    
//   }
//   let totalAmonut = A* R*Y;
//   console.log(totalAmonut);
//   let SimpleIntrest = totalAmonut / 100;
//   SimpleIntrest = SimpleIntrest.toFixed(2);
//   return SimpleIntrest;
// }
// const result = SPI(1000, 5, 1);
// console.log(result);

//  14 > Calculate Average with the help of code...
// function CF(num){
// let sum = 0;
// for (let i = 0; i < num.length; i++) {
// sum = sum + num[i];  
// }
// return (sum /  num.length)
// }
// const result = CF([1,2,3]);
// console.log(result);

// 13> Finding all Factor of a number
// function CF(num) {
//   if (num < 1) {
//     throw new Error("Please Enter The Value Grater than 1..");
//       }
//       let result = [];
//       for (let i = 1; i <=num; i++) {
//         if (num % i === 0) {
//           result.push(i);
//         }
//       }
//       return result;      
// }
// const result = CF(14);
// const result = CF(9);
// const result = CF(10);
// console.log(`The Cf of ${result}`);

// 12 Print vowel and consonent 
// function VCcount(str) { 
//   let Lstr = str.toLowerCase();
//   if (typeof Lstr != "string") {
//     console.error("Please ineter String Value..");    
//   }
//   const vowel = "aeiou";
//   const consonent = "bcdfghjklmnpqrstvwxyz";
//   let vowelCount = 0;
//   let consonentCount = 0;
//   for (let i = 0; i <Lstr.length; i++) {
//     // console.log(Lstr[i]);
//     if (vowel.includes(Lstr[i])) {
//       vowelCount++;
//     } else if (consonent.includes(Lstr[i])) {
//       consonentCount++;
//     }
//   }
//   return {vowelCount , consonentCount}
//   }
// const result = VCcount( "Hello Rana");
// console.log(result);

// 11 print pow of number;
// function printPow(a,b) {
//   let x = Math.pow(a,b)
//   return x;
// }
// const result = printPow(2,4);
// console.log(result);



// 10 > Print palindrom in javascript
// function palindrom(str) {
//     str = str.replace("/\, '' ").toLowerCase();
//     const rs =str.split('').reverse().join('');
//      if (str === rs) {
//           return true;
//      } else {
//           return false;
//      }
// }
// const result = palindrom("madam");
// const result = palindrom("king");
// console.log(result);

//  09 > find Max value in Array
// function printMax(maxNumber) {
// let maxNum = maxNumber[0];
// for(let i = 1; i<maxNumber.length; i++){
//      if (maxNumber[i] > maxNum) {
//           maxNum = maxNumber[i];
//      }
// }
// return maxNum;

  //    let a = Math.max(10, 3, 99, 101)
     // console.log(a)
     // return a;
// }
//  const result = printMax([10, 3, 99, 101]);
//  console.log(result);

//  08 > print table to index given index number
// function printTable(a, b) {
//      for (let i = 1; i <= b; i++) {
//           console.log(`The table : ${i * a}`)
//      }
// }
// printTable(3, 11);
*/
     
/*
// 07 > calculate factorial
// 2nd Method To using Recursion
// function cfr(num) {
//      if (num <= 0) return 1;
//      return num * cfr(num - 1);
// }
// const result = cfr(5);
// console.log(result);


// function cf(n) {
//      // validation check
//      if (n <= 0) throw new Error("Please Enter The Vlaue grater than 0")
//      if (typeof n !== "number") throw new Error("Please enter Number Value not another..");
//      let a = 1;
//      for (let i = 1; i <= n; i++) {
//           a = a * i;
//      }
//      return a;
// }
// const result = cf(4);
// console.log(result);
*/

/*
// 06> Reverse string using function
//  02 2nd Method
// function reveArr(str) {
//      let a = str.split('')
//      let reve = a.reverse();
//      let result = reve.join('')
//      return result;
//      // console.log(result)
//      // console.log(reve)
//      // console.log(a);
// }
// // const result = reveArr("Rana ji");
// const result = reveArr("Hello King welcome");
// console.log(result);


// function reveString(str) {
//      if (typeof str !== "string") {
//           throw new Error("Please Enter Valid Stiring....");

//      }
//      let bag = "";
//      for (let i = str.length - 1; i >= 0; i--) {
//           bag = bag + str[i];
//      }
//      return bag;
// }
// const result = reveString("Ranaji");
// const result = reveString(2222);
// const result = reveString("Hello rana welcome");
// const result = reveString("Hello King welcome");
// console.log(result);
// */

//  05 > print smollest number smong the given number
// function smollest(a, b, c) {
// let d = a + b + c;
// if (typeof d !== "number") {
//      throw new Error("Please Enter Number Value...");

//      // }
//      if (a < b && a < c) {
//           return `This is the smolest Number  : ${a}`;
//      } else if (b < a && b < c) {
//           return `This is the smolest Number  : ${b}`;
//      } else {
//           return `This is the smoolest Number : ${c}`;
//      }
// }
// const result = smollest(2, 5, 3);
// console.log(result);

/* 
// 04 > check Number is even
// function even(num) {
//      if (num % 2 == 0) {
//           return `Is Even Number ${num}`;
//      }
//      return `Is Odd Numebr ${num}`;
// }
// const result = even(1581);
// console.log(result);

// ternary operators
// function even(num) {
//      return num % 2 == 0 ? "Even " : "odd";
// }
// const result = even(1580);
// console.log(result);
*/