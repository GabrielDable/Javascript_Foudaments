/* Objects - O

A object aggregate multiples values ( primitives or objects)



Objects in JavaScript may be defined as an unordered collection of related data, 
of primitive or reference types, in the form of “key: value” pairs. 
These keys can be Variables or Functions and are called properties and methods, respectively, 
in the context of an object.

Related Data: Primitive data-type or reference data-type
Keys:  Variables (Properties) and Functions (Methods) 

Objects often inherit properties from another object by prototypal inheritance.
Javascript objects are dynamical, their values can be updated, despite being decalred as a constant.
Objects can represent sets of strings.

Any value is javascript that is not primitive (symbol, true, false, string, numbet, null or undefined) is a object.

- Objects  Referece.

let y = x.

If x is an object, the assingment operator is not passing a copy to y, boh variables X and y refers to the same object.

Each js object  properties have three attributes:

- Writable: where the value of the property can be set
- Enumerable: whether the property name is returned by a fon/in loop ( maybe a private property might not me enumerable)
- Configurable: whther the property can be deleted or its attributes be altered.


Many bult-in objects in js are read-only, non enumarable or non-configurable.
by default, a a object built by the programm is enumerable, configurable and readable. But you can specify rules for those default attributes. 



- Creating Objects


A property can eb a string literal or a identifier.
A value of a property can be any expression (function expression or primitive values or any ohter object.
    )
*/

// Syntax

// Object literal syntax

let client1 = {
    surname: "dias",
    " pais": "portugal", // A property can be a string literal.
    cep: 131312 
}; /* A trailing comma following the last curly brace.

Every time a object literal is evaluated, an objec is created.
 Therefore, an objec litetal expression in a looping or function will create an object for each evaluation. */



/*  Object Constructor 

new is operator followed by a constructor function.
Javascript has built-in constructors, and the program can create a object constructor function

let o = new Object(); // Create an empty object: same as {}.
let a = new Array(); // Create an empty array: same as []
let d = new Date(); // Create a Date object representing the current time
let r = new Map(); // Create a Map object for key/value mapping

*/


let client = new Object()

client.nome = "Mauro";
client.produto = "Pesquisa Documental";
client.id = 123123;


client.displayinfo = function() {
    return  this.nome + "  " + this.produto ;
}

 console.log(client.displayinfo()) // Mauro  Pesquisa Documental


// Constructors:


/* Prototypes
Every object in js has a prototype property. This properties are used when one wants to define
a prototypes - mostly methods - to be inhereted by all instances of an object,
Prototypes are heavily used with Object Constructors Functions.
The prototypes are actually definied within the constructur, rather than the object instanceses.

All objects created with a object literal have the same prototype: Object.Prototype.
A object constructed with a object constructor function has the prototype property of the constructor function as its prototype.
A object created with new Object will have the Object.prototype as a object created with literals.

    Static Functions 

    - Object.create()

    Creates a new object using as first arguument as the prototype of a object. */

    let o1 = Object.create({x: 1, y: 2}); // o1 inherits properties x and y.
    o1.x + o1.y // => 3 

    /* 

    If you pass null as argument to this static function, the created object will not inherit any methods from the Object.prototype, event toString()
    If you want to create an empty object like with {} or new Object: */ 

    ob = Object.create(Object.prototype)
    /* 

    This static methods is excellent if you waant to guard it against unintended modification of an object by a library function. 
    Instead of passing the object directly to the function, the function can inherit the properties of the object.
    If the functions sets properties, it will not change the original object.  */ 

    let o = { x: "don't change this value" };
    library.function(Object.create(o)); // Guard against accidental modifications

    /* 

     - Querying Properties

    object.identifier
    object["identifier"]

    The second method must be a expression that is evaluted - or more precisely converted to a symbol or string and resembles an array querying.

    - Setting 

    Use a dot or square brackets as querying a property, nut inserting the assingment operator with the value on the right-side.
    It is possible to set a property and pass value to it within the same statement.


    - Javascript as Associatives Arrays.

    Using strings expression to access an object properties is resourcefull as its a dynamic value and can change at runtime. 
    The dot notation is statical identifier and will not change during runtime.
    In the example under, the only way to access the properties within the loop is with square brackets notation.
    */ 

    let addr = "";
    for(let i = 0; i < 4; i++) {
        addr += customer[`address${i}`] + "\n"
    } /*

    Intuitively, I coded a cluster whose outer function declares a object whereby its properties are concomitantly accessed and set within the innermost function.
    Cf. Function_Challenges.js : Closures with complex nested arrays of an object and continue keyword



    - Inheritance 
    Many ideas already discussed in OCF.Prototypes. 

    - Property Access Error

    It is not a error to access a property that does not exist within a prototype chain. Js will return undefined.
    However it is an error to try to acccess the property of an object that does not exist. 

    Example */

    book.subtitle // undefined
    book.subtitle.name // ! TypeError: undefined does not have length. The compiler is querying the property name from (book.subtitlle = undefined)

    /* This bias can be handled with a property chainning acesss operator. If the first chainning expression returns undefined, the remaning querying qill not return 
    an error, but undefined too. Additionaly, is possible to set a default value if the returned value of the chainning access expressions is undefined.
    cf. operators_general.js: - Optional Chaining Operator 


     - Deleting Properties

     delete operato removes a property of an object. 
     It is single operand should be a property access expression.
     Surprisingly, it does not operat upon the value but on the property itself, differently of an array delete.
    Delete only works on own property, rather than inherited from the prototype.
    to delete from the prototype, the prototype must be the operand itself.
    delete does not remove configurable attributes of FALSE, and built-in objects whose property is non-configurable (Global Object)

    - Testing Properties

            (i) IN operator -

                Expects a property name on the left (string) and the object to be acessed on the right.

                "x" in object // returns true or false.

                "y" in object // returns true or false.

                The IN operator has an important feature.
                It can differentiate properties that was explicitly set to be undefined or anothers that are implicit undefined (not even declared)
                A comparision operator can not understand that.

                */

                opius = {own : undefined}
               
                opius.own !== undefined // false - property exist , but he value is undefined
                opius.owm !== undefined // false - property doesnot exist.
               
                "own" in opius // true - a simple comparision operator acess the value of the property, the in operator figures out if the property is there regardless of the undefined value,
                "owm" in opius // false
               
                               delete opius.own
               
                "own" in opius // false
               
            

                /*


            (ii) hasOwnproperty - Instance method

                 Test whether that object has own property with the given name. It returns false for inherited properties.

                o.hasOwnProperty("toString") // returns false as toString is inherited from the prototype.

            (iii) propertyIsEnumerable - Instance method

                Refines the former example, but additionally teste if the property if enumarable.
                Some property as toString are not enumerable. 

                Object.prototype.propertyIsEnumerable(toString) // False 


    - Enumarating Properties:

    Instead f testing individual properties, one can interate through or obtain a list of all the properties. */

    for( value in opus){
        if(!opus.hasOwnPropery(value)) continue; // the boolean statement will return false for inherited properties and execute continue, jumpingto the next interation and not exeuting the remaning looping body

    };

    for(value in opus) {
        if(! typeof value === "function") continue; // it will skip all the methods
    }

    /*

    - Getting an Array of property names:
    A set of static methods called from the Object.prototype.
    Static Functions called from the Object Prototype always returns an array of values, rather than bollean values as the instance methods inherited from the prototype. */
    
    Object.Keys() - // an array of names of ENUMERABLES OWN PROPERTIES.
    Object.getOwnPropertyNames() - //ARRAY OF NON ENUMERABLE OWN PROPERTIES WHOSE NAMES ARE STRING
    Object.getOwnPropertySymbols() -  //ARRAY OF NON ENUMERABLE OWN PROPERTIES WHOSE NAMES ARE STRING
    Reflect.ownKeys()- // Returns all own property names., enumerable or not. 

    /*

    - The enumeration order: 

    String properties with non-negative integers are listd first : >0 
    String properties with negative integers in sequence.
    After the intergers enumeration - or properties like array index - the remaing properties are listed following the order they were added.
    Finally, properties whose names are symbols are enumarated.

    - Extending Objects:
    A very common operation in js is copying values of an object to another.
    Object.assing is the standard static method for that. */

    Object.assign("target object", "source object", " .... more source objects") /*

    For each source object, it copies the ENUMERABLE OWN properties from the source to the target.
    Properties with same name overrides properties of the target object.
    Propertie of the second source object overrides properties fo the first source object. */

    Object.assign({x: 1}, {x: 2, y: 2}, {y: 3, z: 4}) // => {x: 2, y: 3, z: 4}

    /* Object Assing will overwrite all the values with precedent of the last source object upon the left side one, and finally over the target value.

    Merge function allows

    - Serializing Objects.

    Serialization is the process of converting an object to a string from which it can be stored late.

    JSON.stringfy() - Serializer.
    JSON.parse() - Restore object.
    Date.toJSON - serialize a Date object to ISO-formatted date strings.

    JSON syntax is a subset of Javascript syntax
    It does not represent all javascript values.
    What objects and primitive values can eb serealizes ?

    Objects, Arrays, Strings, finite numbers, true, false and null. 
    Nan, Inifinity and - infinity area serialized to null.
    Date are serialized to ISO.formattated date strings, but the JSON.parse does not restore as a Date Object.
    

    - Object Methods 

    Static Functions defined on the Object.Prototype */

        // Scoping Bind and Methods Invokation
            Object.bind()
            Object.call()

        // Returning numerable values and properties     
            Object.values()
            Object.keys()
            Object.entries()

        // Returning non-numerable properties 
            Object.getOwnPropertyNames()
            Object.getOwnPropertySymbols()

        // Prototype Manipulation 
            Object.getPrototypeOf()
            Object.setPrototypeOf() 
            Object.create()
            
        // Other
        
            Object.assign()
            Reflect.ownKeys() 
            JSON.stringify()
            JSON.parse()
            /*
            

    Instance Methods inherited from the Object Prototype. */

        opus.hasOwnPropery("property") - // boolean 
        opus.propertyIsEnumerable("property") - // Boolean
        opus.isPrototypeOf("object") // boolean
        opus.toString("object")
        opus.toLocaleString()
        opus.valueOf()
        opus.toJSON() // Method to be searched by JSON.stringfy. This method must return the own object.


/* 

 - To string
 
 Is not a very informative methods, returning the object type or primitive value type, rather than the source code.
 However, this method returns the source-code for a Function and the values of elements of an array in a string value.
*/



    arros = Array.of(1,2,3,4,4)

    arros.toString() /// 1,2,3,4,4

    function p () {
        console.log("to string")
    }
    p.toString() //  function p () {  console.log("to string") }

    opus = {
        metodo : "metodo",
        metodo2 : "metodo 2",
        metodo3 : this, 

    // Many programmers define a their own version toString() in class or prototype chain.

    toString : function () {
        return `The properties  are ${this.metodo} and ${this.metodo2}`
                }
    }            
    console.log(opus.toString()) // The properties  are metodo and metodo 2

/*

- toLocaleString()

Format dates. number and times according to local conventions, returning the formated array. 

*/ 


let point = {
    p : new Date,
    toLocaleString: function () {
        return `${this.p.toLocaleString()}`
    }

}

console.log(point.toLocaleString()) //  "14/07/2022, 17:36:16" - converted from 2022-07-14T16:36:46.888Z
console.log(z)
 /*  

- valueOf

Similat to string, but invoked when js wants to convert the object to any other value tha the string, typically a number.
It is called every time for a implicit conversion, but can be set as a default method for an object with explicit conversion.
valueof is commonly used to convert dates to number, areas toLocalestring convert date objects to string according to local standr.
It is resourcefull if you have to compare date objects


- toJSON Method
The JSON.stringfy looks for a toJSON method on any object. If this method exsits on the object to be serialized, and returns a new serialized value
rather than modifying the object.

*/

let point = {
    p : new Date,
    user: "Gabriel",
    product: "Legaltech",
    arros : [false,true, null, Infinity]
    toLocaleString: function () {
        return `${this.p.toLocaleString()}`;
    },
    valueOf: function () {
        return this.p.valueOf()
    },
    toJSON: function() {
        return point
    }
    }


stringifyed =JSON.stringify(point) //  {"p":"2022-07-14T17:37:43.307Z","user":"Gabriel","product":"Legaltech"} // Functions are not stringfied.

console.log(point) // It was not altered.

parsed = JSON.parse(stringifyed) // {  p: '2022-07-14T17:43:05.707Z',  user: 'Gabriel', product: 'Legaltech' } - Parsed a Object.


Object.setPrototypeOf(parsed,point) // Set up the original point as prototype of parsed.

console.log(parsed)

console.log(parsed.toLocaleString()) // 2022-07-14T17:47:18.332Z.

/*

- Computed Propert Names

A property name you need is stored in a varile or is a return value of a function tht you invoke.

Computed properties permits the square brackts to host an arbitraty expression

(i) Template Strings.
(ii) Functions. 
(iii) Variables.

The expression is evaluated and converted to a string afterwards.
It is recommended to use computed property sintax with the property names constants defined by the library you are using. */

const PROPERTY_NAME = "p1";
function computePropertyName() { return "p" + 2; }
let p = {
    [PROPERTY_NAME]: 1,
    [computePropertyName()]: 2
};
p.p1 + p.p2 // => 3

/*

- Symbols as Property Names

One can use both symbols and strings as properties names.
Symbols are opaque values, there uniquely deployed as property names.
Symbols are unique values, despite having the same strings as arguments of its setting up with the Factory Function SYMBOL.
Two Sybols created with the same string argument are still different from another.

*/

  extension = Symbol("user")

 


let point4 = {
    p : new Date,
    user: "Gabriel",
    product: "Legaltech",
    arros : [false,true, null],
    [extension] : " ok"
    };




Object.getOwnPropertySymbols(point) // [ Symbol(user) ]
Object.getOwnPropertyNames(point) // { p: 2022-07-15T13:59:24.919Z, user: 'Gabriel', product: 'Legaltech', arros: [ false, true, null ]
console.log(point) //{ p: 2022-07-15T13:59:24.919Z, user: 'Gabriel', product: 'Legaltech', arros: [ false, true, null ], [Symbol(user)]: 'Gabriel'}
console.log(point[extension]) // ok 

/* When symbols are used ?

Once you obtained an object from a third-party library and you want to insert properties to this object, guardind any conflit between property names.
You can set up this object extension using a symbol as name of the property.

- Spread Operator

Rather than using Object.assing, one can copy the property of an existing object into a new object using spread operator.
The spread operator only spreads the own properties of an object, not inherited one. */ 


let position = { x: 0, y: 0 };
let dimensions = { x: 100, height: 75 };
let rect = { ...position, ...dimensions };

console.log(rect) // { x: 0, y: 0, width: 100, height: 75 }

/*

It is important to highlight that during the spread evaluation, properties with the same name will be overwritten taking the light-side operand as precedent.







// Code to Compare Objects;

let a = ["a","b","c"]; // An array we want to
copy
let b = []; // A distinct array we'll

function equalArrays(a, b) {
    if (a === b) return true; // Identical arrays are equal
    if (a.length !== b.length) return false; // Differentsize arrays not equal
    for(let i = 0; i < a.length; i++) { // Loop through all elements
    if (a[i] !== b[i]) return false; // If any  differ, arrays not equal
    } 
    return true; // Otherwise
}

    