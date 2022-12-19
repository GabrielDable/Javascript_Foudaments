

//Teste (a)


/* Scopes Definitions:


Class and Functions Definitions 
Bodies of If-Else Statements
Bodies and Statements of loopings

In node.js, the Global Scope comprises the file the variable was definied. 
On the Browser, The global scope comprises the script the variable was declared.

*/ 

let i = 100
function teste(){
    var i = 200
    console.log(i)
}
teste()

function teste2(){
    const i = 400
    console.log(i)
}
teste2()

function teste3(){
    let i = 500
    console.log(i)
}

teste3()

i = 120  //  Can not redeclare variables using let within the same scope, but it can be reassigned.

console.log(i)


//Teste (b)


var i= 100                 // One can access the global variable from the functional scope, but the opposite is not possible.
function teste4(){
    var a = 200
    console.log(i)
    console.log(a)
}

teste4()

console.log(a)  // Error


// Teste C

const x = 200


 // All undeclared variables does not exist until their value is not assigned. One it is assigned, they are global variables

function teste5() {
     z = 100 
    let t= 200
}

teste5()

console.log(z)  // Global Variable
console.log(t)  // Error - Local Variable


var x = 7
let y = 5 

// Block Scope

{
    let x = 5 // If we redeclare it with VAR, it will ge an error once the VAR is not block-scoped, only functional scope.
    x += 5
    console.log(x) 
    x -= 4
    console.log(x)
    x *= 5
    console.log(x)
    x %= 10
    console.log(x)

}


// Very Important - Example I - Within the block scope from the If-Else, it was declared a local variable.

let x = 7
let y = 5 

if (x != 7 && y == 5) {
    x += 3  
}    else if (x >= 6 || y == 5) {
        let x = 6
        x += 5
        console.log(x) // 11
    }

console.log(x) // 1

// Very Important -  Example II - The block scope  within the If-Else can acces the outer variable and update it.

if (x != 7 && y == 5) {
    x += 3  
}    else if (x >= 6 || y == 5) {
        x += 5
            { let b = "nested_scope"

        }
        console.log(b) // 
        console.log(x) // 12

}



console.log(x) // 12


// Stricti Mode 

