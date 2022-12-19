
/* Calculator Function

function add(x,y) { return x + y; }
function subtract(x,y) { return x - y; }
function multiply(x,y) { return x * y; }
function divide(x,y) { return x / y; }


function operator (operater, operando, operanda) {
    return operater (operando,operanda)
        ||  operater (operando, operanda) 
}

console.log(operator(add, add(4,1),multiply (5,6)))

*/

function add(x,y) { return x + y; }
function subtract(x,y) { return x - y; }
function multiply(x,y) { return x * y; }
function divide(x,y) { return x / y; }


function operator (operater, operando, operanda) {
    return operater (operando,operanda)
        
}

console.log(operator(add, add(4,1),multiply (5,6)))




// - Arrays as Functions Properties, Interacting those Arrays, Applying array methods to them, Hoisting.

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
 console.log(mapp(store.arr2)) // [ 8, 176, 180, 272 ]


 function mapp(x)  {
     let p = x.map(value => value * 4).concat(["manel"]).filter(value => (typeof value === "number"))
    return p
 }


 // 

 function factorial(n) {
    if (Number.isInteger(n) && n > 0) { 
        if (!(n in factorial)) {
            factorial[n] = n * factorial(n-1);
        }
        return factorial[n];
        } else {
            return NaN;
            }
    }
    factorial[1] = 1; // Initialize the cache to hold this base case.
    factorial(6) // => 720
    factorial[5] // => 120; the call above caches this value




    // Loop Scopes and Closures 

    function interator() {
        let arra =[];
         for( var i = 0; i<10; i++) {
            arra[i] = () => i;
         }
         return arra;
     }
     
     let arro = interator()
     console.log(arro) //An array of closures
     console.log(arro[4]()) // 10
     
     /* All the values fo the array will be 10, as the elements of the array are closures acessing the variable i declared with Var.
     i is declared in the for scope within the outer scope of the primary function (Var i = 0).
     Var are not block scope, thefero i scapes to the outer scope of the function. Once the arra is returned in the outer scope, so i = 10, theredore the returning value of each closure is i
     The problem would be fixed declarinng i with LET 
      Wrapping  up: Nested functions do not make private copies of the scope or make static snapshots of the variable bindings.
     */ 


// Functions with block statement of a Structure Control:


function x(z) {
    switch (z.length) {
        
        case  (7):
            return z.reduce((x,y) => (x + y), 0);  // Return will break like  and pass the value resulting form the method invocation to the paret function invocation.      
        default:
            z.forEach( (value, i, a) => { // Very interesting. The First method does not have to returned, as evalutes the original array
                a[i] = value + 1
                }
            ) ;
            return z.filter( value => value >= 3);  // This methoda must be returned as it passes a new array. 
                                                
            
        }
    }
    
arros = Array.of(10,1,2,3,4,5,6)
aro = Array.of(1,2,3,4,5)

p = x(arros)

returned = x(aro) 

console.log(aro,returned) // [ 2, 3, 4, 5, 6 ] [ 3, 4, 5, 6 ] - The original array interated with forEach method, and second array returned from the function and stored as returned

console.log(p) // 31


// Closures with complex nested arrays of an object and continue keyword


function t() {
    let a = new Object; 
    let j = 0; // Persistent the Counter 
    function nested (z,propipo) {
        a[ `Version ${j}`] = []
        let i = 0 // Non persistent counter
        for( variable of z) {
            if (!variable || (typeof variable === "string") ) continue;
            a[`Version ${j}`][i++] = variable  * propipo; // J acesses from the persistant lexical scope fo the closure.
        }
        j++
        return a;
    }
    return nested
}   

let metodos = t()


n = [2,3,,5,,4,"carlos"] 
u = [3,4,"elisa"] 

console.log(metodos(n,2)) // { 'Version 0': [ 4, 6, 10, 8 ] }
console.log(metodos(u,4)) // { Version 1': [ 12, 16 ] }
console.log(metodos(n,20)) 