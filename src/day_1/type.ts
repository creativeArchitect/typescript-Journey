// export type User = {
//     id: number;
//     task: string;
//     done: boolean;
// }

// export let user: User = {
//     id: 1,
//     task: "Go to Bed",
//     done: false,
// }


// interface Admin {
//     name: string;
//     permissions: string;
// }

// interface User {
//     name: string;
//     age: number;
// }

//  UserOrAdmin is a union type — and not every object in the union has both permissions and age.

// type UserOrAdmin = Admin | User;

// let user: UserOrAdmin = {
//     name: "user1",
//     age: 21,
//     permissions: "all the admin permissons",
// }

// const greet = (user: UserOrAdmin) => {
//     console.log(user.name);
    
//     if ('permissions' in user) {
//         console.log(user.permissions); // Safe: user is Admin
//     }

//     if ('age' in user) {
//         console.log(user.age); // Safe: user is User
//     }
// }












