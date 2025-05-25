

// const x: number = 5;
// console.log(x);

//  Types in TS : number, string, boolean, null, undefined


//  Problem 1

// const printHello = (str: string)=>{
//     console.log(str);
// }


//  Problem 2 => Sum function

// const sum = (x: number, y:number): number =>{
//     return x+y;
// }


//  Problem 3 =>  Return true or false based on if a user is 18+

// const votingCriteria = (age: number)=>{
//     if(age >= 18) return true;
//     else return false;
// }
// const age: number = 17;
// votingCriteria(age) ? console.log("You'r eligible for voting.") : console.log("You's are not eligible for the voting.");


//  Problem 4 => Create a function that takes another function as input, and runs it after 1 second.

// const task1 = ()=>{
//     console.log("This is the first task.");
// }
// const finalTask = (task1: ()=>void)=>{
//     setTimeout(task1, 1000);
// }


//   Parameter 'name' implicitly has an 'any' type =>  noImplicitAny should be
// const greet = (name) => `Hello, ${name}!`;

// greet("ayush");


//  Interfaces =>

// Problem: How can you assign types to objects?
// solution: To assign a type to an object, we can use 'interface'.

//  confusion sol: ✅ Interfaces Exist Only in TypeScript for Type Safety at Compile Time.   Interfaces Do Not Affect Runtime.

//  ✅ Compile-Time Type Checking

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
//     todo: TodoType;
// }


// const Todo = ({ todo }: TodoType)=>{
//     return (
//         <div>
//             <h2> { todo.id } </h2>
//             <p> { todo.task } </p>
//             <p> { todo.done } uy</p>
//         </div> 
//     )
// }





























