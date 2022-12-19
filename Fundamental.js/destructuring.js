/* The destructuring assingment mimics an array literal.


https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment


Destructuring is a king of compound declaration and assingment 

In a destructuring assingment, the value fo the righthand side of the equalds sign is an array or object ( the structured value)
, and the lefthand side specifies one or mode vrabiles using a syntax that mimics array and object lietral syntax.


When the destructuring assignment occurs, the value of the righthand object is extracted in a variable nammed on th left.

They can be used to initialize varibales or with variables that were already declared.

Desctructuring assigment are usefull to be used in loops that interates an array of values or funtictions that returns an array of values.  */

    // Destructuring the return value of a function

        function Root(x,y) {
            return [Math.sqrt(x*x+y*y), Math.atant2(y.x)]
        }

        let [r,theta] = Root(1.0,1.0) //

    // Destructuring interated values as arrays of an object.

    for(let [x,y] of Object.entries(o) ) {
        console.log(`property is ${x}`) // console.log the property
        console.log(`property is ${y}`) // console.log the value

    }

    // Object.entries is a statis method od Object.prototype 

    
    
    /* The number of arrays elements on the lefside of destructuring assingment does not have to match. 
    If the there is a undefinied element, the index of the lefside destructuring assingment will correspon to the array on the right side. */


    let [,u,,o] = [1,,,4] // u ==== undefined &&& o === 4.


    /* Destructuring with rest operator.

    Rest operator idicates all the remaing argument should be collected in one array, such as the same occurs with desctructuring assginment expressions. */

    let [z,...i] = [3,,4,5,56]  // z === 3 ; r === [undefined,4,5,56]

    console.log(i)

    let n = [..."aponimus"]; // Spread the interable elements of the strin into an array.

    console.log(n) // [  'a', 'p', 'o',  'n', 'i', 'm',  'u', 's' ]


    /* Destrucutring properties of an object. 

    One must choose local variables whose identifier is identical to the property names of the object you are destructuring.

    But you can nominate 

    The lefthand side of the assingment must be something like an object literal:  */

    let {p} = {n:10, p:100}

    console.log(p) // 100 - The value of the property is stored as variable of the local memory.

    // Descutruting methods of global objects

    let{sin, cos, tan} = Math

    sin(4) // -0.7568024953079282

    /* When the leftside object literal has properties

    The property identifier of the leftside must indetical to the rightside, but the value itself of the property 
    that is the variable to receive the destructured value. */


    let points = [{x: 1, y: 2}, {x: 3, y: 4}]; // An array of

    let [{x: x1, y: y1}, {x: x2, y: y2}] = points; //


    // Complex Destucturing is hard to understand and writte, better to use explicity assingment code like 

    let x5 = points.p1[0] ;
    
 