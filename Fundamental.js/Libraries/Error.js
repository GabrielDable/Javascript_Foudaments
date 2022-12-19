/*
Error

throw and catch statments acts on every js data type value
Javascript has an error class, although it is a good practice to use instances or defined subclasses of an Error class when sginaling an error with throw.
When one uses an Error istance, one can capture the state of js stack, facilitating the debugging.
it is important to highlight that that stack TRACES where the error was created, rather than it was thrown. 
Therfore it is better to create the objet just beforing thwowing it to mantain the traceability.

throw new Error()

    Properties

The Error objects have two properties: message and name, and only one method. toString()
The value of the message is passed to the object created with Error() constructor arguments
Node also have the stack property, that contains a multi-line string that contains a stack trace of the javascript call stack at the momento that the RRoor object was created 

    Subclasses of Error Class
    EvalError
    RangeError
    ReferenceError
    SyntazError
    TypeError
    URIError

    One can define th own customized subclasses of error that better encapsulate the stack needs.
    One candefine ownproperties of this classes.
    Runtime error is an abstraction of erros, not subclasses. Find out in the last section of this module.
    Logical Error also are not typed or classed, and one can only finx them with debbuging.


*/


class ErrorSub extends Error {
    constructor(a) {
    super(`This an error in method ${a}` )
    }


}



class i {


    constructor(c,d) {
    this.p = c 
    this.z = d
    }

    static noninheritable() {
        return "this is statical"
        
    }
   

}

class n extends i {

    constructor(n,o) {
        super(n,o)
        this.errorar = null
  
    }

    arr(n) {
        try {
            if(n == false)

            throw new ErrorSub("from subclass")
        }

        catch(e) {
            return e.stack
      
        
        }

        return this.p = n
       
    }

}

ob = new n(45,50) 

console.log(ob.arr(0))


/* Udemy Course  


