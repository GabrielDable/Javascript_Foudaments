

/* Precedence

Multiplication (*) and division (/) have higher precedence than addition (+) and subtraction (-).

And (as in school mathematics) the precedence can be changed by using parentheses: */ 

// Assingment Operators

var x = 7
let y = 5 

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

console.log(x)

// Very Important - Example I - Within the block scope from the If-Else, it was declared a local variable with let.

if (x != 7 && y == 5) {
    x += 3  
}    else if (x >= 6 || y == 5) {
        let x = 6
        x += 5
        console.log(x) // 11
    }

console.log(x) // 1

// Very Important -  Example II - The block scope  within the If-Else can acces the outer variable and update it within the inner block scope.

if (x != 7 && y == 5) {
    x += 3  
}    else if (x >= 6 || y == 5) {
        x += 5
        }

        console.log(x) // 12



// Conditional Operator

let z = 1

function condicao(x,y) {
    (x < y || x !== 4 ) ? z = 100 : z = 200; 
    return z
}

console.log(condicao())