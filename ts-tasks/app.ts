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
// ------------------------ Ans : 08 -------------------------------

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



// student1.addGrade(90);
// student1.addGrade(85);
// console.log(student1.getAvgGrade());

// ------------------------ Qno : 09 -------------------------------

// Question 9: Union Types and Type Guards
// Create a type Response that can be either { success: true, data: string } or {
// success: false, error: string }. Then, write a function handleResponse that takes
// an argument of type Response and logs &quot;Data received: {data}&quot; if success is
// true, and logs &quot;Error occurred: {error}&quot; if success is false. Use type guards to differentiate between the two cases.

// ------------------------ Ans : 09 -------------------------------

// type Responsed =
//  { success: true, data: string} 
//  | { success: false, error: string}

// function handleResponse (res: Responsed){
//     if(res.success){
//         console.log('Data', res.data);
        
//     }else{
//         console.log('Error', res.error);
        
//     }
// }
// const succ = handleResponse(
//     {
//         success: true,
//         data: 'user data loaded!!'
//     }
// )

// const err = handleResponse(
//     {
//         success: false,
//         error: 'failed to data loaded!!'
//     }
// )

// ------------------------Qno : 10 -------------------------------

// Question 10: Abstract Classes - Creating and Extending
// Create an abstract class Animal with a protected property species (string), a
// constructor that sets the species, an abstract method makeSound() that returns a
// string, and a concrete method getSpecies() that returns the species. Then, create
// two classes: Dog with a makeSound() method that returns &quot;Woof!&quot;, and Cat with
// a makeSound() method that returns &quot;Meow!&quot;. Create instances of both classes,
// call makeSound(), and getSpecies().

// ------------------------ Ans : 10 -------------------------------

// abstract class Animal {
//     protected species: string

//     constructor(species : string){
//         this.species = species
//     }
//     abstract makeSound(): string
     
//     getSpecies(){
//         return this.species
//     }
     
// }

// class Dog extends Animal{

//     constructor(){
//         super("dog")
//     }
//     makeSound(): string {
//         return 'Woof'
//     }
// }

// class Cat extends Animal{

//     constructor(){
//         super("Cat")
//     }
//     makeSound(): string {
//         return 'Meow'
//     }
// }

// const myDog = new Dog()
// const myCat = new Cat()

// console.log(myDog.makeSound());
// console.log(myDog.getSpecies());

// console.log(myCat.getSpecies());
// console.log(myCat.makeSound());


// ------------------------ Qno : 11 -------------------------------

// Question 11: Generics - Creating a Generic Function with Index Search
// Create a generic function findIndex&lt;T&gt;(arr: T[], value: T): number that takes an
// array of any type and a value to search for. The function should return the index
// of the value if found; otherwise, return -1. Call this function with different types of
// arrays (e.g., an array of numbers, an array of strings) and log the results..

// ------------------------ Ans : 11 -------------------------------

// function findIndex <T>(arr: T[], value:T): number{
//     return arr.indexOf(value)
// }

// // Example with an array of numbers
// const numberArray = [10, 20, 30, 40, 50];
// console.log(findIndex(numberArray, 30));
// console.log(findIndex(numberArray, 100)); 

// // Example with an array of strings
// const stringArray = ["apple", "banana", "cherry"];
// console.log(findIndex(stringArray, "banana")); 
// console.log(findIndex(stringArray, "grape")); 

// // Example with an array of boolean values
// const boolArray = [true, false, true];
// console.log(findIndex(boolArray, false)); 
// console.log(findIndex(boolArray, true));

// ------------------------Qno : 12 -------------------------------

// Question 12: Type Guards - Checking Object Types
// Create two interfaces: Car with a property drive() that returns &quot;Driving a car!&quot; and Bike with a property ride() that returns &quot;Riding a bike!&quot;. Then, create a function useVehicle(vehicle: Car | Bike) that calls drive() if it&#39;s a Car and calls ride() if it&#39;s a Bike, using a type guard to differentiate between the two. Create instances of Car and Bike, and pass them to useVehicle().

// ------------------------ Ans : 12 -------------------------------

// interface Car {
//     drive(): string
// }

// interface Bike {
//     ride(): string
// }

// function useVehicle (vehcile: Car | Bike){
//     if('drive' in vehcile){
//        console.log(vehcile.drive());
//     }else{
//        console.log(vehcile.ride());
//     }

// }

// const myCar: Car = {
//     drive: () => "Car driving" 
// }

// const myBike: Bike = {
//     ride: () => 
//         `ride the bike`
// }
// useVehicle(myCar)
// useVehicle(myBike)

// ------------------------ Qno : 13 -------------------------------

// Question 13: Interface Intersection - Merging Multiple Interfaces
// Create two interfaces: Person with properties name (string) and age (number),
// and Employee with property jobTitle (string). Then, create a new type
// FullTimeEmployee that combines both interfaces using intersection (&amp;). Write a
// function describeEmployee(emp: FullTimeEmployee) that logs the name, age,
// and jobTitle. Create a FullTimeEmployee object and pass it to the function.

// ------------------------ Ans : 13 -------------------------------

// interface Person {
//     name: string
//     age: number
// }
// interface Employee {
//     jobTitle: string

// }
// type FullTimeEmployee = Person & Employee;

// function describeEmployee (emp: FullTimeEmployee){
//     return ` Name: ${emp.name}, Age:${ emp.age}, Job Title: ${emp.jobTitle}`

// }

// const obj = {
//     name : ' Asad Abbas',
//     age : 20,
//     jobTitle: 'frontend developer'
// }

// console.log(describeEmployee(obj));

// ------------------------ Qno : 14 -------------------------------

// Question 14: Interface Union - Handling Multiple Object Types
// Create two interfaces: Dog with a method bark() returning &quot;Woof!&quot;, and Cat with a method meow() returning &quot;Meow!&quot;. Then, create a type Pet that can be either a Dog or a Cat. Write a function makeSound(pet: Pet) that calls bark() if it&#39;s a Dog and calls meow() if it&#39;s a Cat, using a type guard to determine the correct method. Create instances of Dog and Cat, and call makeSound() on both.
// ------------------------ Ans : 14 -------------------------------

// interface Dog{
//     bark(): string
// }

// interface Cat {
//     meow(): string
// }
// type Pet = Dog | Cat;

// function makeSound (pet : Pet){
//     if('bark' in pet){
//         console.log(pet.bark());
        
//     }else{
        
//         console.log(pet.meow());
//     }

// }

// const myDog : Dog= {
//     bark : ()=>'Woof'
// }
// const myCat : Cat= {
//     meow : ()=>'Meow'
// }

// makeSound(myDog)
// makeSound(myCat)

// ------------------------ Qno : 15 -------------------------------

// Question 15: Implementing an Interface in a Class
// Create an interface Shape with a method calculateArea(): number and a method
// getType(): string. Then, create a class Circle that implements Shape with a
// property radius (number), implements calculateArea() to return the area of the
// circle, and implements getType() to return &quot;Circle&quot;. Create an instance of Circle,set the radius, and call both methods.

// ------------------------ Ans : 15 -------------------------------

// interface Shape {
//     calculateArea() : number;
//     getType () : string

// }


// class Circle implements Shape{
//     radius : number;

//     constructor(radius: number) {
//         this.radius = radius;
//     }

//     calculateArea(): number {
//         return Math.PI * this.radius * this.radius
//     }

//     getType(): string {
//         return 'circle'
//     }
// }

// const myCircle = new Circle(5)
// console.log(myCircle.getType());
// console.log(myCircle.calculateArea());









