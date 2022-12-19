/* Relational Expression


They always test a relationship: equals, less than or property of.
They always elavalueta to a boolean value. 

1.1. Equality Operators

== / ==== : non Stric data ype comparison ( implicit conversion function) and strict data type conversion.
!== / ===

Objects are only comparared by reference. Two arrays with identical indexed elements are not equal. 

1.2 IN operators

It expectsa left-side operand that is a string or anyother value that can be converted to a string.
It is a good operator to evaluate if there is a specific property in object, but not the value */ 

o = {
    proper: "maria",
    metodos: function () {
        return this.proper
    }
} ; 

"maria" in o == true ? console.log("yes") : console.log("no"); // "no"

("proper" in o == true) ? console.log("yes") : console.log("error"); // yes

// In Array it will get only the index

x = [3,4,5];

0 in x ? console.log("yes - array") : console.log("error array"); // yes

// It can also get functions names inherited from the protoype or built methods.


("metodos" in o == true) ? console.log("yes") : console.log("error"); // yes

/* 

- The instanceof Operator

Requeres a left-side operand that is an object and right-side operando that indetifies a class
It evaluates wheter the left-side is an instance of the right-side class, acessing the prototype chain.
The right -side class must be a constructorfunction that initializes.

The Class object comprises every objects: functions, arrays, classes, and thei inherit methods
from its prototype. */

Arraying = new Array

Arraying instanceof Array == true ? console.log("array") : console.log("no") // array

Arraying = new Function

(Arraying instanceof Function == true  && Arraying instanceof Object == true) ? console.log("array and object") : console.log("error") // Array and Object

// If the right-side operand is not a class of objects it throws TypeError. 

/* 

- Logical And (&&) II ??

&& and || are frequently used with booleadn operands (=== and ==)
But they can be used also in non-bollean operands.

Every Js value is truthy r falsy

        Falsies: false, null, undefined, 0, - 0 ad NaN and " " ( empty string)
        Truthy: all objects.

        Null and Undefined are equal if compared with non stric comparison operator, but different if compared with strict comparison operator.

In non-booleand expression, && and || returns values. 

&&: if the value of the expression is falsy, returns the first falsy value
&&: if the value of the expression is truthy: it returns value of the right
|| will return the first truthy value (true expression) and last falsy value ( falsy expression)
II if al the values are falsy, it will return the value fo the reight

*/ 

let arros = null || false || new Object || new Array // Returns an empty object {}

let arros2 = null && false && new Object && new Array // null

let arros4 = new Date && new Object && new Array // Array

let arros5 = true && null && -0 // null

let arros6 = null || true || new Object // -0

/* && - If false, returns the first falsy value from the left. If true, returns the last truthy value on the right
 || - If true, returns the first true value from the left. If false, returns the last false value of the right. 

More complex */


let x = y = p = 0

let arros8 = ++x && true && false // false expression, returns false. Pre-fix incremented during evaluation   
let arros9 = y++ && true && " "  // false expression, returns the first falsy value y++ = o
let arros10 = p++ || --p || --p // Returns -1, third expression that makes the entire expression True.

arros10 += 2

arros10 == true ? console.log("yes") : console.log("no") // arros = 1, TRUE - Implicit Convertion. 

// Observation.  -1 as a value has a falsy value, but a object contaning this value if converted to a Boolean Value will be false.


/* 
- Unary : Not

Inverts the boolean value of any data type. 

*/ 

!1 !== true ? console.log(" boolean inverted and implicit conversion") : console.log("null") //" boolean inverted and implicit conversion"


!new Array == false ? console.log(" boolean inverted and implicit conversion") : console.log("null") //  boolean inverted and implicit conversion


/* 

- De Morgan Law

Two laws of the boolean logic.
Useful to simplify the code */


console.log(!(x && y) == (!x || !y))

console.log(!(x || y) == (!x && !y))


/*

- Assignmento with Operation
The left-side is expected to be the operand to receive a value
The right-side operand is an arbiraty expression that generates de tha value.

One can find an assignment expression used as part of a larger expression */


x = 4
y = 3
(x = y) === 3 // True - Assingment expression with another expression must be enclosed by parenthesis, as they have the lowest level of precedent. 


// Multiple Assingments

x = y = z = t = 4  /* 

- The conditional Operator ? */


let arros = new String 
arros = "concated"
 
 
  if (arros) {
      console.log("true") // True - A object is truthy
  } else {
      console.log("false")
  }


  concat = `Concat ${ arros? arros : "error"  }` //  "Concat concated" - The string is true and therefore returns arros. A expression written with ? can be inside ${} and the template literal
 
  console.log(concat) // "Concat Concated"


  /* 

  - The First-Defined ??


  - The Await operator

  ...

  - The Void Oprato


  - The comma operator,

  It is binary operator. It evaluates the left operad, evaluates its right operand and returs the value of the right.
  The left hand expression is discharged always. Comma operators are used only for FOR Loops-


  for(let i=0,j=10; i < j; i++,j--) {
console.log(i+j);
 
- Optional Chaining Operator Operator 

It is used in APIs when you dont know how the data is. 
The chian operator referes for each property. If the property exist, it retutns true and next property is acessed.
The last property with no optional operator, it is the value supposed to be returned,

    Calling Properties:  */

    let contact = {
        name: "John",
        age : 28,
        update: { 
            date: 2022,
            country: { state: "brasil"} ,
            getmetodos: function() { console.log("returned")}
        }
    }
    
    
    const updat = contact.update?.date ;// returns 2022  - Meaning: if update property exist, returns date value, other wise undefined.
    
    let updat2 = contact.update?.warranty?.update // undefined - Meaning Meaning: if update property exist && warranty property exist, returns date value, other wise undefined.
    
    const updat3 = contact.update?.country?.state // Brasil
    
    const updat4 = contact.update?.country // {state:brasil}  
    
    
        // Calling Methods
    
    const updat5 = contact.update?.getmetodos?.() // returned the arrow function invokation.


     // Setting a deault value in a optional chainning operator:

    updat2 = contact.update?.warranty?.update ?? "No Warranty"

    

