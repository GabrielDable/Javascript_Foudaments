
/* Statement: Instructions to be executed by computer. Semicolons separtes statements
 Code Blocks:  statements grouped together inside curly brakers (idented) */

/* Variables , Let and Constant. Var was scrapped after 2015 version. 

https://www.geeksforgeeks.org/difference-between-var-let-and-const-keywords-in-javascript/


let nome
const nome

If you want a general rule: always declare variables with const.

If you think the value of the variable can change, use let.

You can redeclare variables assigned with let, but you can do it with var. 

Const and Let can declare variable within a Block Scope (Local Variable).

Function and block scopes can be nested. In such a situation, with multiple nested scopes,
 a variable is accessible within its own scope or from inner 
scope. But outside of its scope, the variable is inaccessible.

*/

{
    let x = 1
    const y = 1 
}

// X and Y can not be acessed here.

{
    var x = 2 
}

/* X can not be acessed here.
Redeclaring variables insides brackets will change it locally and globally */

var x = 10;
// Here x is 10

{
var x = 2;
// Here x is 2
}

// Here x is 2

/* Redeclaring a JavaScript variable with var is allowed anywhere in a program
 Redeclaring a variable with let within the same block is not allowed, but you can redeclare using let on time for different blocks */

{
let x = 2;    // Allowed
let x = 3     // Not allowed
}

{
let x = 3;    // Allowed
}
        
{
let x = 4;    // Allowed
}

/* Function and block scopes can be nested. In such a situation, with multiple nested scopes,
 a variable is accessible within its own scope or from inner 
scope. But outside of its scope, the variable is inaccessible. */

{

    
}


/* Hoisting - Hoisting is JavaScript's default behavior of moving all declarations to the top of the current scope (to the top of the current script or the current function). 
A variable can be used before it has been used. Although, using a let variable before it is declared will result in a ReferenceError. the hoisting also does not move initializations to the top of the scope. */

carName = "Volvo";  // No problem 
var carName;

carName = "Saab"; // Error
let carName = "Volvo";


var x = 5; // Initialize x
var y;     // Declare y

elem = document.getElementById("demo"); // Find an element
elem.innerHTML = x + " " + y;           // Display x and y - Error

y = 7;    // Assign 7 to y


/* Main differences between Let and Constant

GENERAL RULE - ALWAYS DECLARE VARIABLES AS CONSTANTS UNLESS YOU KNOW THEY WILL CHANGE.

A variable
A new Array
A new Object
A new Function
A new RegExp

 - Variables 

Variables defined with const have Block Scope like Let.

Variables defined with const cannot be Redeclared, only in different scopes.

Variables defined with const cannot be Reassigned, only in different scopes. 

Differently of Let, JavaScript const variables must be assigned a value when they are declared:

*/

const PI;
PI = 3.14159265359; // Incorrect.

 /* Objects

Redeclaring an existing var or let variable to const, in the same scope, is not allowed: */


var x = 2;     // Allowed
const x = 2;   // Not allowed

{
const x = 2;  // Allowed

}

{
const x = 2;   // Allowed
let x = 2;   // Not allowed
}
 
/* Arrays & Objects

The keyword const is a little misleading.

It does not define a constant value. It defines a constant REFERENCE to a Value. 

Because of this you can NOT:

Reassign a constant value
Reassign a constant array
Reassign a constant object
But you CAN:

Change the elements of constant array
Change the properties of constant object. */

// You can create a const object:
const car = {type:"Fiat", model:"500", color:"white"};

// But you can not reassing it

car = {type:"Volvo", model:"EX60", color:"red"}; 

// You can change a property:
car.color = "red";

// You can add a property:
car.owner = "Johnson";




/* Functions - The variables within the funcion arguments are only local)
A javascript function is defined with the function keyword by a nem followed by parenthesis. The parentheses might inclusde parameters.
The code to be executed must be inside curly brackets
*/

// Functions

function summarizeUser(userName, userAge, userHashobby) {
    return (
         "name is " + 
         userName + 
          "age is " + 
          userAge + 
          "users hobbies: " 
          + userHashobby
    );

}

console.log(summarizeUser( nome, age, hasHobbies));


/* Temples Literals

Literals delimited with a backstick characteres for multi-line strings or strings interpolation
with embbeded expressions and for special constructs called tagged templates.

Templates Literals - String Interpolation with placeholders (default function)
Tagged Templates - For Special Constructs ()

Place Holder - ${expression}

With Template Literals you can avoid the concatenation operator.
