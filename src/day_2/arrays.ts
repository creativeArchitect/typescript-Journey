

// let nums: number[] = [1,3,4,5,6,7,8];

// const getMax = (nums: number[])=>{
//     let max = 0;
//     for(let i = 0; i < nums.length; i++){
//         if(nums[i] > max){
//             max = nums[i];
//         }
//     }
//     return max;
// }


// interface Address {
//     city: string;
//     pincode: number;
// }

// let addresses: Address[] = [{ city: "Jaipur", pincode: 303702 }, { city: "Ajmer", pincode: 305025 }];

// interface User {
//     name: string;
//     age: number;
//     addresses: Address[];
// }

// let x = {
//     name: "ayush",
//     age: 21,
//     addresses: addresses
// }

// const getUser = (x: User) => {
//     return x.addresses;
// }



//  Problem: Given a list of usres, filter out the user that are legal to work.

interface User {
    name: string;
    age: number;
}

let list: User[] =[{ name: "ayush", age: 21 }, { name: "hritik", age: 20 }, { name: "tukku", age: 17 }];

const getList = (list: User[]) => {
    list.forEach((item: User)=>{
        if(item.age > 18){
            console.log(item.name + " is legal to work");
        }
    })
}

getList(list);




