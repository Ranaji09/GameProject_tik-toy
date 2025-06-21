


// class Animal {
//      constructor(name, age) {
//           this._name = name;
//           this._age = age;
//      }
//      getName() {
//           return this._name;
//      }
//      setName(value) {
//           this._name = value;
//      }

// }
// class Dog extends Animal {
//      constructor(name, age, position) {
//           super(age, name);

//      }
//      talk() {
//           console.log(`The name of ${this._name} and age ${this._age} ?????`)
//      }
// }

// const d = new Dog("Rana ji", 21, "King");
// d.talk();

// const animal = new Animal("Dog", 5);
// console.log(animal.getName()); // Output: Dog

// class Animal { }

// class Animal1 extends Animal { }
// const dog = new Animal1();
// console.log(dog instanceof Animal1);
// console.log(dog instanceof Animal)
// console.log(dog instanceof Object)



// class Animal { }
// class Dog extends Animal { }

// const myDog = new Dog();

// console.log(myDog instanceof Dog);       // true
// console.log(myDog instanceof Animal);    // true
// console.log(myDog instanceof Object);    // true


// class Person {
//      constructor(name, age) {
//           this._name = name;
//           this._age = age;
//      }

//      get name() {
//           return this._name;
//      }

//      set name(value) {
//           let a = this._name = value;
//           console.log(a)
//      }
// }

// const p = new Person("Rana ji", 21);
// p.name = "New Name"; // Direct assignment using setter






//      constructor(name, grades) {
//           this.name = name;
//           this._grades = grades;
//      }

//      // Getter for grades
//      get grades() {
//           return this._grades;
//      }

//      // Setter for grades with validation
//      set grades(newGrades) {
//           if (newGrades.every(grade => grade >= 0 && grade <= 100)) {
//                this._grades = newGrades;
//           } else {
//                console.log("सभी ग्रेड 0 से 100 के बीच होने चाहिए");
//           }
//      }

//      // Getter for average grade
//      get averageGrade() {
//           let sum = this._grades.reduce((acc, grade) => acc + grade, 0);
//           return sum / this._grades.length;
//      }
// }

// const student = new Student("Priya", [85, 90, 78]);
// console.log("Initial Grades:", student.grades); // Output: Initial Grades: [85, 90, 78]
// console.log("Average Grade:", student.averageGrade); // Output: Average Grade: 84.33333333333333

// console.log("Updated Grades:", student.grades); // Output: Updated Grades: [88, 92, 80]
// console.log("New Average Grade:", student.averageGrade); // Output: New Average Grade: 86.66666666666667
// student.grades = [105, 90, 78]; // Output: सभी ग्रेड 0 से 100 के बीच होने चाहिए



// class BankAccount {
//      constructor(balance) {
//           this._balance = balance;
//      }

//      // Getter for balance
//      get balance() {
//           return this._balance;
//      }
//      // Setter for balance with validation
//      set balance(amount) {
//           if (amount < 0) {
//                console.log("बैलेंस नकारात्मक नहीं हो सकता");
//           } else {
//                this._balance = amount;
//           }
//      }
// }

// const account = new BankAccount(1000);
// console.log("Initial Balance:", account.balance); // Output: Initial Balance: 1000

// account.balance = 2000;
// console.log("Updated Balance:", account.balance); // Output: Updated Balance: 2000

// account.balance = -500; // Output: बैलेंस नकारात्मक नहीं हो सकता




// class Rectangle {
//      constructor(width, height) {
//           this.width = width;
//           this.height = height;
//      }

//      // Getter for area
//      get area() {
//           return this.width * this.height;
//      }

//      // Getter for perimeter
//      get perimeter() {
//           return 2 * (this.width + this.height);
//      }
// }

// const rect = new Rectangle(10, 5);
// console.log("Area:", rect.area); // Output: Area: 50
// console.log("Perimeter:", rect.perimeter); // Output: Perimeter: 30


// class Person {
//      constructor(name) {
//           this._name = name;
//      }

//      // Getter
//      get name() {
//           return this._name;
//      }

//      // Setter
//      set name(value) {
//           if (value.length < 4) {
//                console.log("नाम कम से कम 4 अक्षरों का होना चाहिए");
//           } else {
//                this._name = value;
//           }
//      }
// }

// const person = new Person("John");
// console.log(person.name);



// class Animal {
//      speak() {
//           console.log("Generic animal sound");
//      }
// }

// class Dog extends Animal {
//      speak() {
//           console.log("Woof! Woof!");
//      }
// }

// const genericAnimal = new Animal();
// genericAnimal.speak(); // Output: Generic animal sound

// const dog = new Dog();
// dog.speak(); // Output: Woof! Woof!


// class Person {
//      constructor(name, age) {
//           this.name = name;
//           this.age = age;
//      }
//      displayDetails() {
//           console.log(`Name: ${this.name}, Age: ${this.age}`);
//      }
// }

// class Student extends Person {
//      constructor(name, age, grade) {
//           super(name, age);
//           this.grade = grade;
//      }

//      displayDetails() {
//           super.displayDetails();
//           console.log(`Grade: ${this.grade}`);
//      }
// }

// const student = new Student("Rohit", 20, "A");
// student.displayDetails();
// Output:
// Name: Rohit, Age: 20
// Grade: A





// class Person {
//      constructor(name, age) {
//           this.name = name;
//           this.age = age;
//      }
//      intrudu() {
//           console.log(`The value of name is : ${this.name} and age is : ${this.age}`)
//      }
// }
// class Employe extends Person {
//      constructor(name, position) {
//           super(name);
//           this.position = position;
//      }
//      intro() {
//           console.log(`The value of position is ${this.name}`)
//      }
// }
// const e = new Employe("Rana ji", 21);
// e.intrudu();
// e.intro()






// class Math {
//      static add(a, b) {
//           return a + b;
//      }
//      static mul(a, b) {
//           return a * b;
//      }
//      static sub(a, b) {
//           return a - b;
//      }
//      static div(a, b) {
//           return a / b;
//      }
// }
// console.log(Math.add(10, 20))



//  First create class
// class Person {
//      constructor(name, age) {
//           this.name = name;
//           this.age = age;
//      }
//      intriduce() {
//           console.log(`नमस्ते, मेरा नाम ${this.name} है और मेरी उम्र ${this.age} वर्ष है।`);
//      }
// }
// // inheritance
// class Employe extends Person {
//      constructor(name, age, position) {
//           super(name, age);
//           this.position = position;

//      }
//      work() {
//           console.log(`${this.name} काम कर रहे हैं।`);
//      }
// }
// const emp = new Employe("Rana ji", 21);
// emp.intriduce()
// emp.work();









// class Person {
//      constructor(name, age) {
//           this.name = name;
//           this.age = age;
//      }
// }
// Person.prototype.default = function () {
//      console.log(`The value of person name is : ${this.name}`)
//      console.log(`The value of person age is : ${this.age}`)
// }
// const detalt = new Person();
// detalt.name = "Ranaji";
// detalt.age = 21;
// detalt.default()



// class Person {
//      constructor(name, age) {
//           this.name = name;
//           this.age = age;
//      }

// }
// Person.prototype.detalt = function () {
//      console.log(`The name of Person is : ${this.name} and the age of person is :  ${this.age}`);
// }
// const per = new Person();
// per.name = "Rana ji";
// per.age = 21,
//      per.detalt();