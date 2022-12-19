
/* Functions 

They are also known as procedures or routine.
They are dfined only one time and ca be invoked several times.
Functions are objects and can be assigned to other variables.
Functions can be nested and therefor they are closures.

Key components:

Identifiers or parameters: they are block scoped.
Argumetns: values that works with the parameters to compute a returned value
Invocation Context: the value of THIs Keyword.

Contexts:

Functions can be defined as properties of an object: methods
The object is the invocation context for the THIs Keyword.
Functions initialized to build up objects are known as CONSTRUCTORS.
Functions have access to variables with the scope their defined.
In strict mode, Functions can be declared within Blocks, not only in high level script scope.

- Functions Declarations 

The name of the fuction becomes the name of the variable itself.
In functions declarations 
HOISTING: Functions declared are hoisted to the to of the enclosing block, function or script, before executing
any code within this scopes.


        - RETURN 

Return is the instruction to return the values to the caller after performing 
the commands wihtin the function.
Return stops executing the function once is executed.
Parameters does not have to be declared previously the function execution. */

var parameter = 0 

function funct(parameter) {
    if (parameter === 4) return "done"; // breaks the block execution and return If parameter = 4, other wise executes foward
    return "undone"
}


console.log(funct(4)) //DONE

/* If the keyword return is absent, the function will execute the code until the end
and return Undefined.


 - Functions Expresions.

Functions expressions look like almost the same of functions declaration.
The difference between them is the function is expression is parte of a larger statement.

    Examples 

    ARGUMENTO of METHODS, as in many cases in arrays methods.*/

    [3,5,7].sort((total, value) => total - value)  /* 

    VALUE of an Object */

    const f = function fact(x) { if (x <= 1) return 1; else
        return x*fact(x-1); }; /* 

    An Arrow Function is a expression, rather than a statement */

    parameter => { return x }

    /* 

    - Functions Statements x Expressions

        Statements

        Functions declared (Statements) can not be anonymous, as they must be recursively invoked.

            Syntax:

            function name([param[, param,[..., param]]]) {
            [statements]
            }
    
            Functions statements are HOISTED to the top of the scope.
            Functions statements are never ANONYMOUS.
            The name given to the function statement definition is the variable that refers to it.



        Expressions 

        Functions expressions must be anonymous, if they are contained in a variable
        If they are methods inside objects, they can be nammee to be acessed by inner and nested functions into it.
            Syntax:
            
            
             Assigned to Variable */ 

            console.log(notHoisted) // undefined //  even though the variable name is hoisted, the definition isn't. so it's undefined.
            notHoisted(); // TypeError: notHoisted is not a function

            var notHoisted = function() {
            console.log('bar');


            // As Methods

            obt = {        
                metodos : function z () { // Named function expression as method, it will not be hoisted. It could unammed.
                console.log("nn");
                return p();
                function p () { // A named nested function expression will behave like a local variable within the scope, and it will be hoisted
                    console.log("n")}
                    
        }
     }
    
    console.log(obt.metodos()) // "nm" "n" undefined

    /*   

    HOISTING DIFFERENCE: Functions expressions are only evaluted in-line, whereas functions
    declared or assigned with a Function Constructor are hoisted. 

    WRAPPING UP = Despite being a value of a variable or property, Functions Expressions are not
    hoisted. There is only one exception, if a named expression function is nested, it will hoist as local variable.


    - Arrow Functions

     They are merely expressions
    => The Arrow separets the parameters from the funtion body.

    The compact syntax 
    
    Standard Notation */
    let arrown = (x,y) =>  {return x}  /* 

    - Compact Notation

    */ 

    arrown = (x,y) => x + y  // If there is only one statement to be returned, RETURN and {} can be ommitted.
    
    arrown = x => x + 1 // If ther is only parameter, the parenthesis are ommitted.

    arrown = () => 1*5 // If there is no paremeters, the parenthesis are empty. 

    // If the returining value is a object literal, you should not omit the return and curly brace.

    arrown = x => { return { proper: x}}


    /* - Nesting Arrow Functions
    
    Arrow Functions are excellent to code expressions withi another methods, such as Maps(), Filter ()
    and reduce ()
    The inherit the this keyword bind from the context they were defined, only.
    THEY ARE NOT SUITED FOR OBJECT METHODS - they always return indefined if there is THIS in the returned value 
    THEY DONT HAVE THE PROTOTYPE PROPERTY, so they can not be used as constructors 
    
    - Invoking Functions 

    They can be invoked as 

    (i) - functions
    (ii) - methods
    (iii) - Constructors
    (iv) - Indirectly with call() or apply()
    (v) Implicity by Js built-in features


    Function Invokation in a non-stric mode, this keyword referes to a global object.
    Functions invoked as proper Functions does not use THIS, ony methods
    
    
    - Methods 

    A functions stored in a property of an object. (Central Feauture for Object Oriented P.)
    Method Invokation and Function invokation differentiates in a important way: CONTEXT
    The context of invocation of a methoda, is the object. The statements within the method
    can refer to another properties inside the object with the keyword THIS. */
    
    
    let calculator = { // An object literal
    operand1: 1,
    operand2: 1,
    add() { // We're using method shorthand syntax for this function // Note the use of the this keyword to refer to the containing object.
    this.result = this.operand1 + this.operand2;
        }
    };
    calculator.add(); // A method invocation to compute 1+1.
    calculator.result // => 2
    /* 

    - Method Channing 

    When a methoda returns an object, you can use the returned object a object to bo analysed
    by a subsequent method. 

    // doStepOne().then(doStepTwo).then(doStepThree).catch(handleErrors);



    - This and Closure  Context

    In a nested function inside a object method, This will nor inherit the object reference. 
    A nested function, although, will not inherit the this key word from the outer function.
    If nested function is invoked by an object, it will inherit this values refering to the object invokator.
    A function invoked as a pure function:
            this will be the global object (non stric mode)
            this will be the undefined (strict mode)

    Sample;

*/ 
    let o = {
        m: function() { 
            let self = this; // Save the "this" value in a variable.
             this === o // => true: "this" is the object o.
            f(); // Now call the helper function f().
            function f() { // A nested function f()
                this === o // => false: "this" is global or undefined, as the this within the nested function will nt inherit the outer scope referece.
                self === o // => true: self is the outer"this" value.
             }
        }
    };

o.m(); // Invoke the method m on theobject o.

/* An nested arrow function can inherit the this keyword from the outer scope.
/* Functions expressions inside an method are only expressions rather than statements, therefore they are not hoisted. 


    - Function Arguments and Parameters.

    If a function is invoked less arguments than parameters, the empty parameters will be set as undefined.
    The optional arguments must be at the end of the list, ALWAYS, if you want the system to set them as undefined automaticallly.
    To omit the first argument, the programmer explicity must set undefined for it before passing values to the second.
    One can use the value of a previous parameter to define the subsequente ( as in filter os maps methods) */ 

    const rectangle = (width, height=width*2) => ({width, height});
    rectangle(1) // => { width: 1, height: 2 }


    /*

    - Rest Parameters and Variable Length Argument Lists.

        Rest parameters allow us to invoke funcions with arbitrarily more arguments than parameters.
        The values you pass and are the rest are passed to the function body as an array.
        Those are the varag functions (From C Programming Languange) */ 

        /* Syntax - Rest parameters are three dots as a spread  operator. The diference is that the REST is uniquile defined within 
        a function definition rather a function invokation 

        Rest - Defitinition of a function statement or expression  */ 
    
    
    let a = []
    let i = 0
        
        obt = {        
            metodos : function (x,y, ...rest) {
                for( value of rest) {
                     a[i] = value + x;
                     i++
                } return a
            }
    }
 

console.log(obt.metodos(1,2,3,4,5,6,7,8)) // user@Air-de-Alaa Move % node teste.js[ 4, 5, 6, 7, 8, 9 ]

    // Spread - Invokation 

    console.log(Math.max(...obt.metodos())) // 9

/*

- Argument Types

Method parameters are local variables with no type.
No type is checked when you pass to a function.
If the function expect a string as argument, javascript will try to convert.
The same for booleans values.
All objects have tostring() method and therefore a string converstion neve fails.
A conversion from intergers to an array, for example, a primitive type to an object - can 
not be performed by any intergers methods.

 - Functions as values

 Function invocation and definition are syntax features.
 Functions are also values:
 (i) - They can be expressions of an variable
 (ii) - They can be methods of an object
 (iii) - the can be arguments fo another functions
 (iv) - they can be elements of an array.

 Cf. Funcao_Teste.js */



function add(x,y) { return x + y; }
function subtract(x,y) { return x - y; }
function multiply(x,y) { return x * y; }
function divide(x,y) { return x / y; }


function operator (operater, operando, operanda) {
    return operater (operando,operanda) //  Return and immediately executes a alreay declared function 

}

console.log(operator(add, add(4,1),multiply (5,6))) // 35

/*

 - Definifing Your own Function Properties

Functions have methods inherited from the prototype.
Those methodas can be static if you want them to persist across invocations.
For example, the function can store the information of the values it already returned previously.

Example

- Counter Property of a Function

*/


store.counter = 0

 function store (x) {
     console.log(x)
     store.counter++
 }

 store(1)
 store(2)
 store(2)

 console.log(store.counter) // 3


// Storing Values of an Array with static properties of a Function as arrays.

store.arr = new Array
store.arr2 = new Array
let i = 0 
let j = 0




 function store (x) {
     let y = x + 1;
     if ( typeof y === "string") {
         store.arr[i] = y
         i++
        } else { 
             store.arr2[j] = y
            j++
             }
    
 }

 let arri = ["234", "2", "manoel", "tião", true, 43, 44, 67, " eleazr" ]

 for(value of arri) {
     store(value)
 }

 console.log(store.arr)  // [ '2341', '21', 'manoel1', 'tião1', ' eleazr1' ]
 console.log(store.arr2) //[ 2, 44, 45, 68 ]

 /* Function Properties, methods and Constructors.

    Length

    The Length specify the arity of the function.
    The Arity is the number of arguments.       
    If there is a rest parameter, it willbe not counted.


    The name property

    It is a read-only property.
    Usefull to debbuging and error messasges. Referes to the name ofthe function, property of variable assigned to an unmamed function.


    Prototype Property.

    Except arrow functions, all fuctions have a prototype property refering to the PROTOTYPE OBJECT.
    Each function has its own prototype object.
    When one use a constructor function, the instance generated will inherit all the values within the prototype object.


    - Call () and Apply ()

    The argument of call is the object you wantto invoke the function

    The argument is the invokation context and becomes THIS of the function.

    Arrow Functions always inherit this from the place they were defined.

    Arrow Functions do not work as methods of constructed instances, neither call() and appply() overwrittes the THIS.

    Syntax.

    Function.call(object set to be the invokation context, ... parameters)

*/
     function Trot(pop, inner) {
        this.pop = pop
        this.inner = inner
    }       
 


    Trot.prototype.metos = function (y) {
        return this.pop * this.inner * y
    }
    


    trot1 = new Trot(4,5)

    let o = {
        pop : 3,
        inner : 4
    }
    

console.log(trot1.metos.call(o,5)) // 60 - Invoked one method defined from the instance in O Context (Scope)
console.log(Trot.prototype.metos.call(o,5))  // 60 Invoked one method defined within the prototype property of the constructor function TROT.

/* Apply is similar to call()

The arguments to be passed are an array.

- The Bind() Method.

For a given function, creates a bound function that has the same body as the original function. 
The this object of the bound function is associated with the specified object, and has the specified initial parameters.

If the Call() objective is to invoke a function in a different context ( block scope), bind() attaches the function to an object returnin a new function.
Afert binding the function, a new method could be invoked from the bound object.*/ 

Trot.prototype.metosbound = function (x) {
    return this.pop * x
}

let bounder = Trot.prototype.metosbound.bind(o)

bounder(3) // 12 










