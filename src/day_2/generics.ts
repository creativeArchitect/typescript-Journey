
// type Input = number | string;

// const printFirstEle = (arr: Input[])=>{
//     return arr[0];
// }

// printFirstEle(["AYush", "Jangid"]).toUpperCase();   
//  this will give error that toUpperCase not exists on 'number'.

//  To solve above problem we use 'generics'.


//  this function take any type of input. can be number or string or else. who ever call this function it sets according to that. during definition don't know the type of the function.

// function identity<T>(arg: T): T{
//     return arg;
// }

// let op_1 = identity<string>("ayushhh");
// let op_2 = identity<number>(7);


// console.log(op_1.toUpperCase());
// console.log(op_2);


// way 2 to solve above problem

//  we don't know what type of para we will give in this function. but it will working same for any datatype.

// function getFirst<T>(arr: T[]): T{
//     return arr[0];
// }

// const el = getFirst<string>(["harkirat", "singh"]);

// console.log(el.toUpperCase());

// const e = getFirst([ 1, 2, 3, "harkirat", "singh" ]);   //  if we don't give like getFirst<string | number>([]) it will assume automatically.

// console.log(e);


// const nums = getFirst<number>([1,2,3]);
// console.log(nums);

