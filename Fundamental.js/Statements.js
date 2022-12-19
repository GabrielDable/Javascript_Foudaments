/*

    1.1 Concepts:

    Expressions are like phrases evaluated to produce a value, separed by periods.
    Statements are sentences or commands to execute something. separed by semicolons.

    Although, some expressions can have side effects, executing something. 

    1.1 Side-Effects Expressions:

    Assingment Operator, Increment Operator, Functions invocantions

    They are EXPRESSIONS STATEMENTS

    Declaring a function or variable is an DECLARATION STATEMENT

    Remeber tha functions can be defined as expression statement ( assigned to a variable, nested, no-hoisting) or by 
    a declaration statemente (using function construtor).

        1.2 Control Structures

        They are kind of statement. ( Conditionals , Loops and Jumps)

    
    2. Expression Statement */ 

    Identificador = " Meu nome é " + nome 

    i *= 3 

    let f = function () {
        console.log( "function express statement")
    }

  /*

    3. Compound and Empty Statements 


    A compound statement comprises several expressions statements within the statement block. 
    A STATEMENT BLOCK is enclosed by curly braces.


    {
        x = Math.PI;
        console.log( ´${x} is PI´)

    }


    The inside statements should be indented relatively to the curly braces.
    The block statements does not require a semicolon afeter its end.


    3.1 Empty Statements

    They are usefull if you want to state a loop with no body.
    The empty statement is defined with semi-colons

  */ 
   
    let novo = new Array(5)
    
    for(let i = 0; i <= novo.length; novo[i++] = i) /* Empty */; 

    console.log(novo) // [ 1, 2, 3, 4, 5 ]

/*

    4. Cf. Contidionals

    If. Cf. Control.Structure.


    5. JUMPS

        5.1 Labeled Statements

        Any statement can be labelled. This use ful to label loops and conditionals.
        Naming the loop, tou can use the key words BREAK and CONTINUE inside the body loop to exit the body ot to jump to top ofthe loo to begin the nextinteratio.
        Break and Continue are the only statements that use statments labels.



        Two statements can have the sabel label once they are not nested in each orther.
        A statement can have several labels.

        5.1.1 BREAK

        This keyword causes the loop or switch to exit.
        BREAK is only legal within loops and Switches.

        Sometimes is much easier to use the BREAK in a lopp rather than expressing the conditions to quit te loop.

        Break can be used with a statement, terminating the enclosing statement with the specific label.

        Break labelnamel

        With this syntax, the statement does not need to be a loop or switch, but any enclosing statement.


         - Break in a Loop */

         for (let i = 0; i < arroy.length, i++) {
             if(arroy[i] === null) break; /// if the boolean statement returns true, break will quit the loop.
         }

         // - Labelled Statement


         let matrix = 
         [
             [1,4,5,77,89,07,43],
             [45,47,3,null,43],
             [4,3,2,4,43,2,11]
         ]

         for(let i = 0;i < matrix.length; i++) {
            for (let k = 0; k < matrix[i].length; k++){
                if (matrix[i][k]=== 2) {
                    console.log(i,k); // 02, 22 
                    break
    
    
                } 
            } // Break to here (outer loop scope). It does not interate the rest of the nested array
    
        }
    
    
    
        breaker: for(let i = 0;i < matrix.length; i++) {
            for (let k = 0; k < matrix[i].length; k++){
                if (matrix[i][k]=== 2) {
                    console.log(i,k); // 02 
                    break breaker
    
    
                }  // Break to Here  (global scope), quiting the outer loop and not interating the arrays and its nesteda arrays. 

            }
        }




         /* If the break statement id executed, the execution jumps to here.. Then something wrong with the matrix happens. 



         5.1.2 Continue

         Similar to the break statement, instead of exiting a loop, continue restars a loop at next iteration.
         Can be used as label statement, but is only and uniquely legal if it is used in a loop.

         Contexts:

        WHILE: The specifiec expression of the loop is tested againg, ig it is truthy the loop body is executed again.
        DO WHILE: Execution ignores the bottom do{} of the loop before testing the codition.
        FOR loop: The INCREMENT EXPRESSION IS EVALUATED, and teste expression is tested again.
        For of / For in: No conditional statement exist, therefore the interation is immediately exeucted.
        
        */
        
        function p (z) {
            let a = new Array;
            for( let i = 0; i < z.length; i++) { // In a for loop, the increment statemente is always evaluated, the new array will preserve the exact lenght of the its copy
                if (!z[i] || typeof z[i] === "string" ) continue;
                a[i] = z[i]
            }
            return a
        }   

        console.log(p(arror)) // [  1,  3,  <1 empty item>, 5, 6,  <1 empty item>, 5, 3, <1 empty item>, 5, <1 empty item>, 7,8 ]


        function t (z) {
            let a = new Array;
            let i = 0
            for( variable of z) {
                if (!variable || typeof variable === "string" ) continue;
                a[i++] = variable  
            }
            return a
        }   

        console.log(t(arror)) // [  1, 3, 5, 6, 5, 3, 5, 7, 8 ] // 


        // Cf. Functions Exercises for an excellent example with closures.





    // Equivalent to the firsr break expression

     continuer : for(let i = 0;i < matrix.length; i++) {
        for (let k = 0; k < matrix[i].length; k++){
            if (matrix[i][k]=== 2) {
                console.log(i,k); // 02, 25
                continue continuer // Command to quit the nested loop and continue the interation of the outer loop. 


            } 
        } 

    } /*

    5.1.3 Return.

    Function invokations are expressions.
    Every expression has an value.
    A return statement specifies the value of the invocation of that function
    This statement only exist legally within a function.
    When a function has no return statement, it simples excutes the entire body and returns UNDEFINED.
    You cannot includes a ine break between return and the expressio that follows it.


    5.1.4 yield.
    Like return, it is only used in generator functions.
    It produces values in generated sequence o values without actually returining.
    yield is a operator. 

    5.1.5 throw.

    They are used as a sign to notify an error or an exception.
    It should inform a interger-error-signal or human redable string signal. 
    Error Class and its subclasses are used when an error is thrown.
    When an exception is thrown the interpreter stops the execution and jumps to the next exception handles.
    The compiler will verify if there is a catch hangles in the same scope, if it is not it will follow the lexcial strcuture from the inner to the outer scope.

    5.1.6 try , catch, finally.

    https://www.youtube.com/watch?v=cFTFtuEQ-10


    One can create a custom Error
    Error is a object and inherit methods.
    Erro handling is used for ajax and client inputs.

    Try {} - A block to test a block of commands
    Catch {} - A block to hlande with Error
    Throw - A statment to create custom error.
    Finally {} - Execute a code, regardeless of the handling.

     */ 
    
    
    try {

        variableUndef
    
    } catch (err) {
    
        console.log( `error has occured ${err}`) // error has occured ReferenceError: variableUndef is not defined
    
    } finally {
        
    }
    
    
    // Customize. 
    
    
    let json = '{ "age": -1 }'
    
    try {
    
        let user = JSON.parse(json);
        
        if(!json.age) {
            
            throw new TypeError(" Age input is incorrect") // Age input is incorrect
        }
    
    } catch (err) {
    
        console.log( `error has occured ${err}`) // error has occured TypeError:  Age input is incorrect
    
    } finally {
        
    }


    // The types of in-built error that can be customizes are: 
    "SyntaxError, TypeError, MediaError, ReferenceError, OverconstrainedError, EvalError" 

prompt()