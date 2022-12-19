/* Arrays - Numerically indexed list of values.

* Fundaments
Arrays are order collections of values
Echa value is an element
Each element has a numerica position named index.

* Quantitative featues
Arrays are untyped an can nest objects and functions.
Arrays are zero based and comports 32 bits numerica indexes.
Arrays have unifixed length.
They can be spare.

* Length

The lenght is one value higher than the last index position
In nonsparse arrays, the length specifies the number of elements

* Advanced Features

The acess to values in a index-based object is faster than in an property-based object.
Arrays inherit methods and properties from Array.Prototype
Manipulation methods of arrays are generic, they function in any array like object.
Strings behaviours like arrays.

* Typed Array

Typed array are new features os ES6, the have fixed length and fixed numeric element type
They offer higher performance and byte-leval acess to binary data.

 - Array Creation:

 Untyped Literals */ 

 let misc = [ 1.1, true, "a", ];

 //  Untyped and Arbitraty

let base = 1024;
let table = [base, base+1, base+2, base+3]

// Sparse 

let count = [1,,3];


/*  - Spread - 

 To unpack elements of an array
 Os to spread out elements or values of an interable object. 

   Unpacking */

let a = [1, 2, 3];
let b = [0, ...a, 4]; // b == [0, 1, 2, 3, 4]


// Function Invokation

function x (...x) {
    console.log(x)
}




// The spread operator can convert nay string into an array.

let spread = [..." filiação materna"]
console.log(spread) //[ ' ', 'f', 'i', 'l', 'i', 'a', 'ç', 'ã', 'o', ' ', 'm', 'a', 't', 'e', 'r', 'n', 'a'


// They are excelent to make shallow copies. If ou change the values of array a, the values 
// inserted in b are not modified.

// * The Array Constructor (Function Constructor)

let ab = new Array(10); // Only one argument specift the lenght, more than one specify the elements. 
let bc = new Array(1) // Empty array of one element. Specifies One Element, not an arrey of index of only of element 

console.log(bc)

// Array.of() - Factory Method. The arguments of the method are exclusively elements of the generated array.

console.log(Array.of(3))  // [ 3 ]

/* Array.from() - Factory Method. 
The argument is an interable object or an array-like object
It operates excatly like an spread operator and copier funcion. 
It returns the iterable object in array.
In client-side javascript, the return values of some web browser methos are array-like. they can
be parsed into real arrays for further manipulation. */


let intera = "ehdkf"
let cd = Array.from(intera)
console.log(cd) // [ 'e', 'h', 'd', 'k', 'f' ]

// Copier

let intera2 = Array.from(intera)
console.log(intera2) // [ 'e', 'h', 'd', 'k', 'f' ]

/* Array Like Objects

They any non-array objects with numeric length properties and values stores and values which properties names are integers.

- Acessing Array Elements

Syntax

Identifier[numeric string or number]

The square brakets used to acess arrays properties are identical to acessing any other property objects.
The Number inside the square brakets are converted in a string by JS.

- Arrays versus Objects.

Arrays are special objects, whose properties are numeric interger indexes.
Arrays can have theis properties named as strings, but it will loose the auto-update lenght property.
One can index values in array, utulizing negative or decimal numbers. They will be transformed in strings. (Deprecated)*/

// let arrat5[3.2] = "numeric string indexing" // The property name is not a index, but "3,2" */ 

// If the property name is non decimal and postive numeric string, it will work as an array index rather object property. (Deprecated) 

/* Sparse Arrays

It is possible to make an array sparde with the delete operator. */

let array8 = new Array(4)
array8[3] = "last index"

console.log(array8) //[ <3 empty items>, 'last index' ]

array8[5] = "apending with sparses"

console.log(array8) // [ <3 empty items>, 'last index', <1 empty item>, 'apending' ]
console.log(array8.length) // 6 


/* - Deleting elements with length property */

array8.length = 3
console.log(array8) // [ <3 empty items> ]




// Methods - Inherited from Array.Prototype

    // Adding Values
       
        // Push() - add elements to end of an array. Equals to: object6[object6.length]

object6 = [1,2,3,4,5,6,7]

object6.push(1,2,3) // add elements to end of an array. Equals to: object6[object6.length]

console.log(object6) // [ 1, 2, 3, 4, 5, 6, 7, 1, 2, 3]

         // unshift() - Insert Values to the beginig of an array

   object6.unshift()
   console.log(object6)
    
    // Deleting Values 

        // Pop () remove the last elements of an array and returns it

console.log(object6.pop()) // 3 - Returns the pulled out value of the last index
console.log(object6) // [ 1, 2, 3, 4, 5, 6, 7, 1, 2, 3]

        // Shift() removes and return the first element of an array

    /* Delete - It is a operator 
    removes the value but not the index, converting in a sparse array */

    let ii = object6.length

    for(let i = 0 ; i < (ii-3) ; i++) {  
        delete object6[ii-i]    
    } 

    console.log(object6) // [ 1, 2, 3, 4, <5 empty items> ]

    /* - Interating Arrays

    The entries method - 
    
    Global Defined Method from the Prototype - Object.entries(name of the object). 
    Method inherited from the Prototype - Objectindentifer.entries().


    /* Multdimensional Arrays. p.309 */








