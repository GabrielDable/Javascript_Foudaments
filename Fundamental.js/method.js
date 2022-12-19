
/*Traditionally, methods are functions defined in class and or related to objects. 
In javscript this association is loosen. 

Syntax difference between functions and methods

 - Functions

calculate()

- Method 

rectangle.getarea()

In methods, the function is attached to an object.
Methods are fuunctions of the objects.

The dot is the property access expression. */ 

// Example

let objeto = new Object()

objeto.metodo = function funcaoteste() {
    return 5 * 5
}

console.log(objeto.metodo())


// A function was created within the object as a method, acesses and callable afterwarsd

// This

let objeto1 = new Object()

objeto1.x = 4
objeto1.y = 6
objeto1.metodo = function funcaoteste() {
    return this.x * this.y  // this referes to the instance (object) the method is accessing
}

console.log(objeto1.metodo())


// Hot to detach the function (method) from the object ?

let detach = objeto1.metodo

console.log(detach())

// One can still pass a method from object to other.  ( Figure out Functions.js)

