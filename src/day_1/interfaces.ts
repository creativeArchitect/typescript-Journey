
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























