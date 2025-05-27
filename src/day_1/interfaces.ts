
// interface User{
//     id: number;
//     name: string;
//     email: string;
//     age: number;
// }

// const user: User = {
//     name: "Ayush Jangid",
//     id: 7,
//     age: 21,
//     email: "ayush@gmail.com"
// }

// console.log(typeof(user));



//  Assignment #1 - Create a function isLegal that returns true or false if a user is above 18. It takes a user as an input.

// const isLegal = (user: User)=>{
//     return user.age >= 18 ? true : false;
// }


//  Assignment #2 - Create a React component that takes todos as an input and renders them

// interface TodoType{
//     id: number;
//     task: string;
//     done: boolean;
// }

// interface TodoInput{
    // todo: TodoType;
// }

// interface TodoInput{
//     todo: {
//         id: number;
//         task: string;
//         done: boolean;
//     },
//     lastDoneAt: Date;
// }


// const Todo = (props: TodoType)=>{
//      const { todo } = props;
//     return (
//         <div>
//             <h2> { todo.id } </h2>
//             <p> { todo.task } </p>
//             <p> { todo.done } uy</p>
//         </div> 
//     )
// }

// <Todo todo={{
//     id: 1, task: "Go to GYM", done: true
// }} lastDoneAt={new Date()} />



// interface User {
//     name: string;
//     age: number;
//     address?: AddressType;
// }

//  In this we write that whole address is optional, if we define it so we need to define all the things which he is contains.

// interface AddressType {
//     address: string;
//     city: string;
//     country: string;
// }


// const printInfo = (user: User) => {
//     console.log(user.address);
// }

// const user = {
//     name: "ayush",
//     age: 21,
//     address: {
//         city: "jaipur",
//         country: "india",
//         address: "new colony railway station"
//     }
// }


// interface Person {
//     name: string;
//     age: number;
    // greet(): void;
//     greet: ()=> void;
// }

// let p: Person = {
//     name: "aayush",
//     age: 21,
//     greet: ()=> "Hi"
// }

// let greeting = p.greet()+ " " + p.name;
// console.log(greeting);


//  class creation using interfaces

// interface User {
//     name: string;
// }

//  we should need to initialize the element of that interface in the class.

// class Person implements User {
//     name: string;
//     constructor(name: string){
//         this.name = name;
//     }
//     print(){
//         console.log("Hellooo " + this.name);
//     }
// }

// let p1 = new Person("aAyush..");
 
// p1.print();







