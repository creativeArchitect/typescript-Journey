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


//  both are same thing, function which return void.

// greet: ()=> void
// greet: (): void















