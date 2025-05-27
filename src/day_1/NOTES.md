# type and interfaces

   - both type and interface can be used to define the shape of an object or data structure, but they have different capabilities and use cases.


# interfaces

   - we can't write like this because don't assign the run time var as custom types to an other var.

   - interface is mainly used to describe the shape of an object (like classes and object literals).

        const user: 2 = 7;

   - Problem: How can you assign types to objects?
   - solution: To assign a type to an object, we can use 'interface'.

   - confusion sol: ✅ Interfaces Exist Only in TypeScript for Type Safety at Compile Time.   Interfaces Do Not Affect Runtime.

   - ✅ Compile-Time Type Checking

   - interface uses extends and supports multiple inheritance.

        interface Person{
            name: string;
            gender: string;
        }

        interface Employee extends Person{
            id: number;
        }


   - Declaration Merging: interface can be merged if declared multiple times — useful in extending external types.

        interface Box {
            height: number;
        }
        interface Box {
            width: number;
        }
        // Box is now { height: number; width: number; }

    - we can create an object of an instance or can create a class that implements that interface

    interface User {
        name: string;
    }

   -   we should need to initialize the element of that interface in the class.

    class Person implements User {
        name: string;
        constructor(name: string){
            this.name = name;
        }
        print(){
            console.log("Hellooo " + this.name);
        }
    }

    let p1 = new Person("aAyush..");

# Types

   - type is more versatile and can describe primitives, unions, tuples, and more.

   - Difference Between type and interface

   1. Union: 
        // ✅ type ❌interface

    // type strOrNum = string | number;
    // const sumVal = (val1: strOrNum, val2: strOrNum): strOrNum => val1 + val2;


   2. Intersection: 

    //  type uses intersections (&) to combine types.

        // type Employee = {
        //     name: string;
        //     startDate: Date;
        // }
        // type Manager = {
        //     name: string;
        //     department: string;
        // }

        // interface Employee {
        //     name: string;
        //     startDate: Date;
        // }
        // interface Manager {
        //     name: string;
        //     department: string;
        // }

        // type TeamLead = Employee & Manager;

        // const teamLead: TeamLead = {
        //     name: "Ayush Jangid",
        //     department: "Web Team",
        //     startDate: new Date()
        // }


   3. Declaration Merging: type cannot be merged — redeclaring causes an error.

   ❌ Error: Duplicate identifier



# ✅ 5. When to Use What?
   - Defining object/class shapes :- interface
   - Working with React props :- interface
   - Needing unions/intersections or advanced typing :- type
   - Want declaration merging or extendability :- interface


# By default, TypeScript treats all files as part of the same global project scope, unless you explicitly scope them using modules.

   - TypeScript files are considered to be in the global scope unless you:

       - Use module syntax (i.e., import/export)

       - Or configure strict module boundaries in your tsconfig.json













