

//Conditinal Structures



var a = 2 
var x = 0
var b = 5
var z = " "

/* If, Else If, Else 

The booleand expression is evaluated, if it is truthy the stament is executed */ 


if (z !== true) console.log(Truthy) ;  // truthy

// Once can use statement blocks to compund multiple expression statements



if (a === 1)  {
    console.log("Erro") 
} else if ( a === 2)  { 
    console.log ("erro2") 
    } else { 
        console.log("Correct") 
    }

/* While - Verify the condition before entering the command line

It loops until the looping statement is TRUE. 

K, I, and J are commonly used to count loops */ 

while (a < 10) {
    a++
    x+=a
} // If there is o curly braces, one shoul use semi colon to mark the end of the looping.
console.log(x) // 10



/* Do ... While - Enter the code line at least one, despite the codition is true o not. 
It meas that the command block of the loop will execute regardless if the loop statement is TRUTHY 
Syntax Differences: DO keyworj is necessay to mark the commencement of the loop.
A semiconlon is demanded at the end of the lloping statemente as there is no curly braces

*/ 
function printArray(a) {
    let len = a.length, i = 0;
        if (len === 0) {
            console.log("Empty Array");
         } else {
                 do {
                    console.log(a[i]);
                } while(++i < len); // Each time the lopp statement is evalueated, i is incremented (pre-fix)
            }
}

        
printArray([1,2,3,4,5]) // Will print all the elements



/*  For 

The counter loop of for is initialized before loop starts and tested every time before the looping interation.
The variable ins incremented or decremented only after the end of the loop body, just before beinf tested again.
Therefore there are three crucial phases regardind the life cycle of the counter

INITIALIZATION, 
TESTE
INCREMENT


Syntax: for(<pre-loop statement>, < conditional statement>, <incremental statement>)
        for /(Initialize; Test; Increment)

The equivalente of the For Loop in while syntax is

initialization 

while (test) {
    statement
    increment
}

The initialization is evaluated only once, before the test statement. 
The teste constrols if the interation fo the loopinf will continue
After all, the counter is updated. The coubter must have sideffects using assingments operators, incremental or decremental operators.
It is possible that initialize statemente to be not only a initialization but also a  variable declaration statement. */


function tail(o) { 
    for(; o.next; o = o.next) { // Loops only one when o-next is truthy.
        console.log("interated")
    } /* empty */ ; // Traverse while
    return o;
    }

o = new Object

o.next = function nest() {}
o.p = new Function
o.z= new  Function
o.proper = " proper"


console.log(tail(o)) // Returned function nest () {}

console.log(o) // The increment statement does not update the outer variable values

/* For of with Arrays:

The parenthesis contain a varibale declaration ( or previous already declared), followed by of keyword that evaluates an interable object.
It urns one time for each element of the data array or interable object
If you write the push metgod inside the lope body, the interation will be infinite. */ 

for (Variable of interable){
    //statement 
}


/* For OF with Objects: 

/* Three improtant methods are important for obtaining values and properties from an object and
 passing them as an array and thereafter, interable objects for a For Of Loop.

 Object.Keys(). - Returns an array with the object properties.
 Object.Values(). - Returns an array with the object values.
 Object Entries(). - Return an array of arrays wherein each nested array is a key pair of one property of the object.
 
 Examples */

for (let opa2 of Object.keys(client)) { // Object.Key returns an array with all the properties names of object indexed. 
    text2 += opa2 + " " // 
   }


for (let opa2 of Object.values(client)) //Returnsan array will al the objecs values
   text2 += opa2 + " ";

   console.log(text2)


function x (opus) {
    p = new Array
    
        for ( let [i,j] of Object.entries(opus)) { // Returns an Array of Arrays with the Keys of Properties and Values of the Object.
            if (j == null) {
            p.push([i,j])
                }
    
        }
    
    return p
    
    }            
    
    
    
    console.log(x(client)) // [ [ 'residencia', null ], [ 'cpf', null ] ]


// For In.

/* For in loos interates over  properties in arbitrary order.
For ... in should not be used to interate over an Array where the index order is important.
It is recommended to use for ... of or just for with a numeric index. 
For returns the property name as string */

/* Syntax 

for ( variable in object)

The variable can be an arbitrary expression, as long it gets somethhing suitable from the left side of the assingment. */

let o = { x: 1, y: 2, z: 3 };
let a = [], i = 0;
for(a[i++] in o) /* empty */;

// Another Example

const client = { nombre: "gabriel", id: 1, cidade: "rio"}
let text = " " 
for ( let opa in client) {
 text += client[opa] + " "} // Variable Opa will be assigned the a value which is the property names interated.


// Interating values of ana array and passing them to an object


let v = [ "mongo", "eliberto", " dagoberto"]

let o = new Object ;
let i = 0
for (x in v) {
   o[i] = v[i];
   i += 1;
   console.log(x)
}


console.log(o) // { '0': 'mongo', '1': 'eliberto', '2': ' dagoberto' }

// Many programmers prefers to use For of with Object.Keys Rather than For In



 
/* Switch. It is an alternative to a conditional statement cotaining many else if blocks.
The expression within the parenthesis is compared with the restrit comparison operator (===) for each label case.There is no implicit convertion.
If there is no matching value, one it will execute the staments labeled default.
If you dont write BREAK, once the matching label is found, the programm will execute all the statements downward */



switch (x) {
    case 10:  // Start here if x === 1
            console.log( "Erro1") ;    
            break;   
    case 20:
             console.log("Correct");
             break;   
    default:
             console.log("Erro2") ;
             break;        
}


// Realistic usages of Switch

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

/* Roughly, Switch does not created a nested object, but different paths for the command flow based in a Boolean Condition. The forementioned example unveils that
the expression inside Switch Parenthesis - z.length is compared with the labelled values like z.length === 7, andif this condition is attended, the commadn inside this labelled key is 
executed.

Another ellegant example: */ 


function xx(par) {
    switch (par.length >= 6) {  //  Equals to (par.length >= 6) ? par.reduce((x,y) => (x + y), 0);  par.map( value  =>  value * 4). But the value genereted by th false option can not ber returned.
        
        case true:
            return par.reduce((x,y) => (x + y), 0);  

        default: 

        return par.map( value  =>  value * 4)

        } 
            
         ;

    }

    // Identical to: 

    function xx(par) {
        if (par.length >= 6) {  
                return par.reduce((x,y) => (x + y), 0);  
        } else {
            return par.map( value  =>  value * 4)
        }
    }  

    // Flanagan Example:

    function convert(x) {
        switch ( typeof x) {
            case ( "string") :
                return x.toString();
            default:
                console.log("error")
        }
    }





/* The Iterable Protocol

It allows javascript objects to define or customize their iteration behaviour. 

Objects with default iteration behaviour : Array, Maps, Strings, Map, Set. 
Objects with no default iteration behaviour : Objects.

In order to be interable an object must implement  property the @@iterator key. */


