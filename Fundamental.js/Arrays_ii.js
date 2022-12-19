
/* Methods

// ARRAY METHODS

They are inheretied from the Array Class or prototype. 

Two important points must be taken in consideration:

    - Some methods returns a new array, others returns the original array modified
    - Some methods generates will return the original array modified with a identifier. 

Categories of Array Methods

1 - Interators Methods: Loops over an array parsing the interated values with a function you specify
2 - Queue and Stack Methos: Add or remove value from the beginin or end of an array.
3 - SubArray Methods: For manipulating regions of an array.
4 - Searching and Sorting Methods.
5 - Arrays inherited from the Class (prototype
6 - Miscelaneous - To string and concatenation


(1) Interators

They accept in a function - as a first argument - and invoke the function for each element.
The second argument becomes the THIS keyword for the first function within the first argument.
The function is not invoked for undefined elements (sparse array)
The Value returned by method modify the array, but the function does. 
The functions are often arrow functions defined inline.

The function is invoked with three elements: (i) the value of the array, the index, and the array identifier.
Most of the time, only the first value is needed.

Syntax

     - (forEach )

    Is method to interate values from the array, passing it to a function that modifies the array

    Array.forEach(the value of each element, the index, the array itsef) { block scope using ther arguments} */

    let array11 = new Array(5) ;

    array11 = [1,2,3,4,5]

    array11.forEach( (x,i,a) => { a[i] =+ i + x})
    
        // console.log(a) - Undefined

    console.log(array11) // [ 1, 3, 5, 7, 9 ]

    let sum = 0

    // Only One Argument

    array11.forEach( function (value) {sum += value} )

    console.log(sum) // 25

    // If you declare variable out side the function scop, you cann pass values of the array to it.


    // More Examples

    array11.forEach((x,i,a) => {    
        if (x>=5) {
            a[i] = 0
        } else {
            a[i] = 1
        }
    })

    console.log(array11) // [ 1, 1, 0, 0, 0 ]

    // More examples

    array11.forEach(function (x, i, a) {
            switch (x) {
                case 0:
                    a[i] = 3;
                    break;
                case 1:
                    a[i] = 2;
                    break;

                default:
                    console.log("opa");
            }
        }
    )    

    console.log(array11) /* [ 2, 2, 3, 3, 3 ]´


        
            - ForEach in SETS

            Sets have Set.Prototype.forEach.
            As sets have no index, the second argument is ommited. */

            let product = 1;
            oneDigitPrimes.forEach(n => { product *= n; });
            product // => 210: 2 * 3 * 5 * 7


            /*
    - Map()
        Similar sintx for eachOf, but the returing value is a different array, 
        As a new array is generated, rather than updating an already built object 
        Differently of eachOf, it allows chaneling methods
        MAP ALWAYS DEMAND A RETURN VALUE, THAT WILL BE THE COMPUTED VALUE FOR THE INTERATED ELEMENT OF THE ARRAY
        ALTHOUGH; FOLLOWING THE ARROW FUNCTION SYNTAX ONE CAN OMIT RETURN KEYWORD WHEN THE FUNCTION SCOPE HAS A SINGLE STATEMENT
        */ 
    
    
    console.log(array11.map(value => value = 1 + value)) // [ 3, 3, 4, 4, 4 ] 


    console.log(array11.map(value =>  1 + value).slice(0,-2)) // [ 3, 3, 4 ] - 


        // Complex Example
        arrays = new Array(12,3,4,5)

        r = new Array(4,5)

        console.log(arrays)

        p = arrays.map( element => {

            if(!r.includes(element)) {
                return element = element * 2
            } return element
        })



        console.log(p) // [ 24, 6, undefined, undefined 

    /* 

    - Filter()
    Return a subset of arrays on which is invoked based on a vocative condition, but it does not modify the original
    Vocative functions must return True or False.
    We don´t have to use return command within the arrow 
    */
    

   let subsarray = array11.filter(value => value >= 3);
   console.log(array11) // [ 2, 2, 3, 3, 3 ]
   console.log(subsarray)// [ 3, 3, 3 ]

          // Filtering undefined and null elements 
    
    subsarray = [,,, ...subsarray]

    console.log(subsarray)

    subsarray = subsarray.filter(value => value !== null && value !== undefined)

    console.log(subsarray) // [ 3, 3, 3 ]


        /* Find or FindIndex.
        Predicative Function like Filter
        Stop interating when the condition is matched.
        Find Returns the ELement
        FindIndex return the index numeric the attender the condition first. Other wise return -1 (False Boolean) 
        Filter is much better method as it returns a new subset array. The find methods stops the interation when the predicativa function returns TRUE for the Boolean
        */ 

    
        subsarray = [1,2,3,...subsarray]
        console.log(subsarray.find(x => x == 3)) // 3
        console.log(subsarray.findIndex( (x) => (x == 3))) // 2


        /* Every() and Some()

        Both interates on the basis of a predicative function returing true or false.
        Some for one value that attends the condition
        Every if all the elements attender the condition. */ 

        let civil = [1,2,3,4,5,6]

        console.log(civil.some(x => x === 6)) // True

        /* REDUCE() AND REDUCERIGHT()

        Reduce is very common method in functional programming. It reduces the value of an array, interating 
        elements adn returining a single value. It does not destructure the array

        Syntax */ 

        console.log(civil.reduce((x,y) => (x + y), 3)) // 4116
        /* X = Acummulated Value of the Function 
            Y = The value acessed in each interation
            3 = The initial value to be passes as Y when acessing the index 

            They are used not only for mathematical operations but also combining objects.

        Algorotihsm written with reduce are hard to write or read, thats why in many cases is better
        to interate with Loop For OF


        - Split() */

        // This method will split the string returning a array of values based in a condition.
        // It returns a new array, rather than updating.

        let phrase = " Manuel nasceu em Casteicao, Guarda, Portugal"

        console.log(phrase.split(" ")) // '', 'Manuel', 'nasceu', 'em', 'Casteicao,', 'Guarda,', 'Portugal' ]

        console.log(phrase.split("nasceu em ")) //[ ' Manuel ', 'Casteicao, Guarda, Portugal' ]

        console.log(phrase) /*

        - flat() and flatmap()
        
        Methods for destructuring nested arrays. 

        It does not update, generates a new one. 
        
        The argument is the level of nests to be flatten */

        
       let  a = [1, ["nested", [3,4]], 3,4]

        b = a.concat(phrase.split(" "))

        console.log(b) //n[ 1,[ 'nested' ],3,4, '', 'Manuel','nasceu', 'em','Casteicao,', 'Guarda,'Portugal']

        console.log(b.flat(2)) // Totally flatten array



        b = [1,2,["nested"],3]
    
        console.log(b.flatMap(x => x + 3)) /* [ 4, 5, 'nested3', 6 ]

        - Concat()
        One must analyse wheter is better to just push or slice instead of creating a new one.
        Concat does not update but returns a new array.
        Concar flattens of level of nestinf for the concated array. */

        a = [1,2,3];
        a.concat([4,5],[6,7]) // => [1,2,3,4,5,6,7]; arrays are flattened 

        /*

        - Stacks, Queus with push (), pop (), shif () and unshhift.

        Non of those methods flattens the appended values to the array.
        They update the original object rather than passing a new one.

        You can input a flatten array using the spread operator. */ 

        a.push(...[3,4,...[1]])
        console.log(a) // [ 1, 2, 3, 3, 4, 1 ]

        /* The pop() argument is always empty ahd returns the removed value.
           The Shift() argument is always empty and returns the removed value
           The push () argument must define the alues to be passes at end of the stack.
           The Unshift () argument must define the values to be passes at the end of the stack.


        - The unshift special feature.

        Calling the unshift many times passes the values in a totally different order */

        a = []
        a.unshift(1)
        a.unshift(2) // [2,1]

        a = []
        a.unshift(1,2) /* [1,2]

        Hence, for each time unishift is called, it upgrades the index of the current elements to pass the values onto it afterwards.

        - Subarrays - Methods that works on continous regions.

            - Slice()
            The first and second argument specify the subarray to be sliced.
            The first argument (the commencement of the array to be sliced) is passed to the subarray
            The second argument breaks the slicing, not passing it to the sub array
            It does not modify the array, but returns a new one. */

            a.push(1,2,3,4,5)
            
            console.log(a) // [1, 2, 1, 2, 3, 4, 5]
            b = Array.from(a)
            a.slice(3,-1) // 2,3,4
            a.slice(-4) // 2,3,4,5
            a.slice(2,-1) // 1,2,3,4 

            /* 

            - Splice():

            Genral Purpose Method for inserting or removing elements from an array.

            IT MODIFIES THE ARRAY WHICH IT IS INVOKED

            The first argument of splice is the start-point

            Diferrently of slice () the second argument is thhe lenght of the array to be spliced out. 

            The method returns the spliced array, and update the original array.

            Once can add how many arguments after the first two arguments, passing to the method values to be inserted onto it. */ 
            
            console.log(a.splice(3,4)) // [ 2, 3, 4, 5 ] - Returns the splcied subarray and updates the original.
            console.log(b.splice(3,4, "return", "return")) // [ 2, 3, 4, 5 ] - Return the spliced subarray and updates the original.
            
            console.log(a) // [ 1, 2, 1 ]
            console.log(b) // [ 1, 2, 1, 'return', 'return' ] 

            

            // More Details: 

            

            let arros = new Array(1,2,3,4,5,5,)

        

        //  If the second argument of the splice is 0 and the third is a value, no deletion is maden and the method unshift the value to that index, icreasing lenght.

            
            arros.splice(3,0,"unishift") // [ 1, 2, 3, 'unshift', 4, 5, 5 ] - Mostly used in PRORITY QUEUES


        //    If the second argument of the splice is 1, and the third method is a value, the value of the index will be changed for the value in the second argument.
         
            arros.splice(3,1,"subs")

        //    If the second argument is 1, and there is no value on the third argumento, splice will downgrade the legth eleminating the index slot and value.. */


            arros.splice(3,1,) // [ 1, 2, 3, 4, 5, 5 ]


        /*  If you want only to eliminate the value - as a delete operator in Array - the third argument must bem null.
            This sort of splice features can define a delete method for a hash table */

            arros.splice(3,1,null) // [ 1, 2, 3, null, 5, 5 ]


        /*

            - Fill ()
            Mutates the original array, and returns the modified array.
            Differently of splice method that mutates the array but returns the spliced subarray.
            The first argumen refers the value to be passed.
            The second is optional and referes to the starting index.
            The third is the final index, but it is not included into the subarray. */

            console.log(b.fill("filled", 3, -1))
            console.log(b) // [ 1, 2, 1, 'filled', 'return' ] 

            /*

            - CopyWithin

            Copies a region of an array, modified it and passes within the array

            Ir modified the original array, returning the modified array

            It is a high performance method.

            The method comprises three arguments. (i) The index destination of the copied value 
            (ii) the first index of the starting region to be copied (iii) the index of the last region. */ 

            b.copyWithin(0, 3,5)
            console.log(b) // [ 'filled', 'return', 1, 'filled', 'return' ] - Takes the slice between index 3-4 and overwitre those two values starting from index 0

            /* 
            
            - Array Searching and Sort Methods


            If you want to look to the content of an object, better using find with a predicative argument.

            indexOf and lastindexOf() allows a second argument, the startint index to perfomr the search.

            - Includes()

            It takes only argument, returning True or False It checks whether the argument is value within the object.
            There is a slight difference between includes() and indexOf()

            (i) Indexof returns the numeric property name (index)
            (ii) Includes returns a Bollean
            (iii) Includes can search an NaN within an array whereas indexof() can not. */ 
           
            console.log(b.includes("return")) // True

            /* 

            - Sort()  

            With no arguments, it sorts the arguments in aphalbetical order.  Undefined values are the last values. */ 

            b.sort()
            console.log(b) // [ 1, 'filled', 'filled', 'return', 'return' ]

            /* If you want to use arguments, it must be a comparative function.

            This function has two arguments, and decides which one must be ordered first. */

            // b.sort(function (a,b) {
            //    return a - b
            // }) 

            /* If you want the first argument to return first, the returned value must be less then zero.
             If you want the seconnd argument to return first, the returned value must be  greater than zero

            - Reverse () - It modifies the array order, reversing it back.

            - Arrays to String 

                    - join() 
                    It is the reverse of split()
                    Its concatenates every element of an array converting them to a string.
                    The argument is the an value to be passed to separte the elements onto the string */ 
            
                console.log(b.join("-")) // 1-filled-filled-return-return
                /* 
                    - toString() - Works exactly like join(), but with out arguments. */ 

                console.log(b.toString()) // 1,filled,filled,return,return. 

                /* 

                - Static Array Functions
                
                They can only be inkoed with the Class Array Constructor.

                Array.from - Factory method to pass values fo an array to a new generated one.
                Array.of -  Factoty method to create an array with a defined number or arguments tht are passed as elements to the generated arrat.
                Array.isArray - TO know whether an object or value is an array or not


                - Array Like-Objects


                What makes arrays distincts of other objects ? 

                Objects with  numeric lenght property.

                They inherit methods from Array.prototype.
                The lenght property is automatically updated with new elements added to the array.
                Array.isArray() returns true for arrays.

                - The pseudo-array object. */

                let z = {}
                let i = 0
                while (i <= 4) {
                    z[i] = i * i ;
                    i++;
                }


                console.log(z) // { '0': 0, '1': 1, '2': 4, '3': 9, '4': 16 }

                z.length = i // Inserts the length property - { '0': 0, '1': 1, '2': 4, '3': 9, '4': 16, length: 5 }

                console.log(z)

                 // Interating as an array like_object

                 let total = 0

                 for( j = 0; j <= z.length-1; j++) {
                     total += z[j]
                 }

                 console.log(total) // 30

                 /* 

                 In javascript cliente side many HTML documents returns array-like objects.


                 - Methods invokation in array like objects

                 They do not inherit methods from Array.Prototype, but you can transpass the rule using the call function. */

                console.log( Array.prototype.map.call (z, value =>  value.toString()   // [ '0', '1', '4', '9', '16' ]
                         
                    )   
                )

                /* 

                - Strings as Arrays. 
                 One can acess string values like arrays.
                 Methos from Array Prototype only works in strings with you call them with CALL
                  */