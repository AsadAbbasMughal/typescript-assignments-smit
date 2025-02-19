// ---------------------  Qno : 01   -----------------------------------

// Question 1: Basic Types and Interfaces
// Create an interface called User with properties for id (number), name (string), email (string), and isActive (boolean). Then, create a function called createUser that takes a user object of type User and returns it. Finally, write code to create a new user and call the function.

// ---------------------  Ans : 01   -----------------------------------

// interface User {
//     id:number;
//     name:string;
//     email:string;
//     isActive:Boolean;

// }
// function createUser(user: User): User {
//     return user
// }
// let  newUser :User = {
//     id: 1,
//     name: 'Ali',
//     email:'asadabbas@gmail.com',
//     isActive:true

// }
// let result =  createUser(newUser);
// console.log(result);

// ---------------------  Qno : 02   -----------------------------------

//  Question 2: Union Types and Type Guards 
// Create a type called Input that can be either a number or a string. Then write a function called processInput that takes an argument of type Input and returns a string. If the input is a number, convert it to a string and prepend &quot;Number: &quot; to it. If the input is already a string, prepend &quot;String: &quot; to it. Use type guards to check the type of input.

// ---------------------  Ans : 02   -----------------------------------


// type input = number | string ;

// function pressInput( value : input) : string {
// if( typeof value === 'number'){
//      return `Number---> ${value.toString()}`
//     }else{
//     return `String---> ${value}`
    
// }
// }
// console.log(pressInput(123));
// console.log(pressInput('yue'));


// ---------------------  Qno : 03   -----------------------------------

// Question 3: Classes and Inheritance
// Create a base class called Vehicle with properties for make (string), model (string), and year (number). Include a method called getInfo() that returns a string with the vehicle information. Then create two subclasses: Car and Motorcycle. The Car class should have an additional property for doors (number), and the Motorcycle class should have a property for hasSidecar (boolean). Override the getInfo() method in each subclass to include the additional information. 

// ---------------------  Ans : 03   -----------------------------------

// class Vehicle {
//     make: string;
//     model: string;
//     year: number;

//     constructor(make:string, model:string, year:number){
//         this.make = make
//         this.model = model
//         this.year = year
//     }
//     getInfo(): string {
//         return ` vehcile : ${this.make},  ${this.model},  ${this.year}`
        
//     }

// }

// class Car extends Vehicle{
//     door: number;

//     constructor(make: string, model: string, year: number, door:number) {
//         super(make, model, year)
//         this.door = door
        
//     }
//      // Overriding getInfo() method
//     getInfo(): string {
//         return ` Car : ${super.getInfo()} Doors: ${this.door}`
        
        
//     }
// }
// class Motorcycle extends Vehicle{
//     hasSidecar: boolean;
//     constructor(make: string, model: string, year: number, hasSidecar: boolean){
//         super(make, model, year)
//         this.hasSidecar = hasSidecar
        
//     }
//     // Overriding getInfo() method
//     getInfo(): string {
//         return `Motorcycle : ${super.getInfo()}, Sidecar: ${this.hasSidecar}`
        
        
//     }
// }

// const myCar = new Car('sp', 'Corolla', 2022, 4)
// console.log(myCar.getInfo());

// const myMotorcycle = new Motorcycle('heavy' , ' frox', 2023, true)
// console.log(myMotorcycle.getInfo());





// ---------------------  Qno : 04   -----------------------------------

// Question 4: Access Modifiers and Getters/Setters
// Create a class called BankAccount with:
// ● A private property for balance (number)
// ● A private readonly property for accountNumber (string)
// ● A constructor that initializes both properties
// ● A getter method for balance
// ● A getter method for accountNumber
// ● A method called deposit(amount: number) that adds to the balance
// ● A method called withdraw(amount: number) that subtracts from the balance but prevents
// overdrafts by throwing an error if the amount is greater than the balance Test the class by creating an account, making deposits and withdrawals, and trying to access
// the private properties directly.

// ---------------------  Ans : 04   -----------------------------------

// class BankAccount {
//     private _balance : number;
//     private readonly _accountNumber : string;

//     constructor(balance: number, accountNumber: string){
//         this._balance = balance;
//         this._accountNumber = accountNumber

//     }
//      get balance(): number  {
//         return this._balance
//      }
//      get accountNumber() : string{
//         return this._accountNumber
        
//      }

//      deposit(amount: number): void{
//         if(amount <= 0){
//             console.log("Amount must be greater than zero")
//             return
//         }
//         this._balance += amount;
//         console.log(`Deposited: $${amount}. New balance: $${this._balance}`)

//      }

//      withdraw(amount: number):void{
//         if(amount > this._balance){
//             console.log("Insufficient funds! Cannot withdraw more than available balance.")
//             return;
//         }
//         this._balance -= amount;
//         console.log(`Withdrew: $${amount}. New balance: $${this._balance}`)

//      }

// }

// const myAccount = new BankAccount(1000, '12345');
// console.log(`Account Number: ${myAccount.accountNumber}`);
// console.log(`Current Balance: $${myAccount.balance}`);
//  myAccount.deposit(2000)
//  myAccount.withdraw(300)


// ---------------------  Qno  : 05   -----------------------------------

// Question 5: Abstract Classes
// Create an abstract class called Shape with:

// ● A protected property for color (string)
// ● A constructor that sets the color
// ● An abstract method called calculateArea() that returns a number
// ● A concrete method called getColor() that returns the color
// Then create two concrete classes that extend Shape:
// ● Circle with a property for radius (number)
// ● Rectangle with properties for width (number) and height (number)
// Implement the calculateArea() method in each subclass. Then create instances of both shapes,
// calculate their areas, and get their colors.

// ---------------------  Ans  : 05   -----------------------------------

// abstract class Shape {
//     protected color: string;

//     constructor(color: string){
//         this.color = color;
//     }
//     abstract calculateArea(): number 

//     getColor() : string{
//         return this.color;
//     }


// }

// class Circle extends Shape {
//     private radius: number;

//     constructor(color:string, radius:number){
//         super(color)
//         this.radius = radius;
//     }
//     calculateArea(): number {
//         return Math.PI * this.radius * this.radius; // πr² formula
//     }

// }

// class Rectangle extends Shape {
//     private width: number;
//     private height: number

//     constructor(color: string, width: number, height: number) {
//         super(color);
//         this.width = width;
//         this.height = height;
//     }
//     calculateArea(): number {
//         return this.width * this.height;  // w × h formula
//     }
// }

// const myCircle = new Circle("Red", 5);
// console.log(`Circle Color: ${myCircle.getColor()}`);  
// console.log(`Circle Area: ${myCircle.calculateArea()}`);  

// const myRectangle = new Rectangle("Blue", 4, 6);
// console.log(`Rectangle Color: ${myRectangle.getColor()}`);  
// console.log(`Rectangle Area: ${myRectangle.calculateArea()}`)

// ------------------------ Qno : 06 -------------------------------

// Question 6: Types and Interfaces - Creating and Using Interfaces
// Create an interface called Product with the following properties: id (number),
// name (string), price (number), and category (string). Then, create a function
// createProduct that accepts an object of type Product and returns it. Finally,
// create a new product object and pass it to createProduct().
// ------------------------ Ans : 06 -------------------------------

// interface Product {
//     id: number,
//     name: string,
//     price: number,
//     category: string

// }

// function createProduct (obj: Product): Product{
//     return obj;

// }

// let newProduct: Product = {
//     id: 101,
//     name: "Ali",
//     price: 1000,
//     category: "frontend"
// }

// let result = createProduct(newProduct)
// console.log(result);



// ------------------------ Qno : 07 -------------------------------

// Question 7: Class Inheritance - Extending a Base Class
// Create a base class Employee with name (string), salary (number), and a
// method getDetails() that returns the employee&#39;s name and salary. Then, create
// two subclasses: Developer with an additional property programmingLanguage
// (string) and an overridden getDetails() method, and Designer with an additional
// property toolUsed (string) and an overridden getDetails() method. Create
// instances of both classes and call getDetails() on each.


// ------------------------ Ans : 07 -------------------------------
// class Employee  {
//     name: string;
//     salary: number;

//     constructor(name: string, salary: number){
//         this.name = name;
//         this.salary = salary
//     }
//     getDetails(){
//         return `Name: ${this.name} - Salary ${this.salary}`

//     }
// }

// class Developer extends Employee {
//     programmingLanguage: string;

//     constructor(name: string, salary: number, programmingLanguage: string){
//         super(name , salary)
//         this.programmingLanguage = programmingLanguage;
//     }

//     getDetails(){
//         return ` ${super.getDetails()} - Salary ${this.salary} - Programming Language ${this.programmingLanguage}`

//     }

// }

// class Designer extends Employee {
//     toolUsed: string;

//     constructor(name: string, salary: number, toolUsed: string){
//         super(name , salary)
//         this.toolUsed= toolUsed;
//     }

//     getDetails(){
//         return ` ${super.getDetails()} - Salary ${this.salary} - toolUsed ${this.toolUsed}`

//     }

// }

// const myDev = new Developer('Ahmed', 10000, "JS")
// console.log(myDev.getDetails());

// const myDes = new Designer('Ahmed', 10000, "JooS")
// console.log(myDes.getDetails());






// ------------------------ Qno : 08 -------------------------------

// Question 8: Access Modifiers - Using Private, Protected, and Readonly
// Create a class Student with a public property name (string), a private property
// grades (array of numbers), a protected property school (string), and a readonly
// property studentID (number) that is initialized in the constructor. Implement
// methods to add a grade to the grades array and get the average grade. Try
// accessing the properties from inside and outside the class to test access
// modifiers.

// class Student {
//     name: string;
//     private grades: number[] = [];
//     protected school: string;
//     readonly studentId: number

//     constructor(name: string, studentId:number, school: string ){
//         this.name = name;
//         // this.grades = grades;
//         this.school = school;
//         this.studentId = studentId
//     }
//     set getGrades(grade: number){
//         this.grades.push(grade)
//     }
//     get getGrades() : number[] {
//         return this.grades
//     }

//     addGrade(grade: number): void{
//        this.grades.push(grade)
//     }
//     getAvgGrade(): number{
//        if(this.grades.length === 0) return 0;
//        const sum = this.grades.reduce((acc, val) => acc + val, 0);
//        return sum/this.grades.length;
//     }
// }


// const student1 = new Student("Asad Abbas", 101, "BBSUL");

// console.log(student1.getGrades);
// student1.studentId = 87 error because this readonly
// console.log(student1.school); error because Property 'school' is protected



student1.addGrade(90);
student1.addGrade(85);
console.log(student1.getAvgGrade());

// ------------------------ Ans : 08 -------------------------------





