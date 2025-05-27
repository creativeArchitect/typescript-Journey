



# Enums in TS: 
   - Feature that allows us to define a set of named constrants.
   - The concept behing an enumeration is to create a human-readable way to represent a set of constant values, which might be represented as a num or str.

   -  In the JS enums have no existance. so whenever we use enums in ts the elements of enums is map with continuous number starting with 0.

   - cannot use a number literal like 4 directly in the member list of an enum without assigning it to a named member.

      -- enum Directions {
    Up, 4, Left, Right, }

   -  enums cannot be numeric beacuse enums not exits in js and after comilation enums values are mapped with number starting from 0-n.

   - if we assign number to the enum element, the next element val is bidefault the 'previous ele val + 1', if we don't assign the value expicitly.


# Generics in TS:
   
   - lang. independent concept
   - Generics enables us to create components that work with any data type while still providing compile-time type safety.
   - during definition don't know the type of the function.
   - we can create multiple variations of the function.
   
   function identity<T>(arg: T): T{
      return arg;
   } 

   let op_1 = identity<string>("ayush");
   let op_2 = identity<number>(7);


#  Exporting and Importing:
   - ts follows the ES6 module system, using 'import' and 'export' statements to share code between diff. files.
   - we can use ES5 but preferred the ES6 module.
   - npm i express @types/express
   - exporting and importing same like used in react / ES6 version.







