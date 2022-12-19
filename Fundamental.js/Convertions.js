// Data  and Type Conversion

// Immplicit Conversion by operands ==

console.log( null == undefined) // True, as both are - 1 
console.log( null === undefined) // False, Different Datatypes. Null is bject-li and undefined is constant.
console.log( {d:1} === {d:4} ) // False, different reference value type 
console.log("" === NaN) // False, as empty string is false and Nan is false
console.log((true + 1)) // 2 
console.log( true == {}) // False, as the refenrece type is mismatching. 
console.log( false == {}) // False



let compar = [1,2,3]
let comparado = {c:4, t: 5}

compar = comparado

console.log(compar === comparado) /// True , different object types and different values, but the same reference

console.log( null + 4) // 4 
console.log("5" + "4") // 54 It will concatenate, as the + indicates a string concatenation rather than an arithmetical operation
console.log( 3 * "5")  // 15 It will convert the string to number, if only one value is a string. 
console.log("x" - 2) // NaN
console.log( undefined == false) // 
console.log( undefined + NaN) // NaN

// Explicit Conversions ===

// Globally Definied  Constructors

Boolean()
String()
Number()

// Global Functions - Converstion from Strings-to Number. 

parseInt() - // Parses only the integer numeric string value into a numembe
parseFloat() // Parses boath integer and decimals numeric string into a number

// String-to-Number

var parses = "2345.67" 

parseInt(parses) // 2345
parseFloat(parses) // "2345.67" 

var parses = "1101"

console.log(parseInt(parses,2)) // 13 - The second argumen is the base or radix of the number.


/* Methods - Number-to-String
/ Numbers are usually converted fo strings when handling financial data. 


toString(/* radix argument*/

// IF you do not specify the base, the conversion will be on base 10 by default.

var radix = 22

console.log( "ob" + radix.toString(2)) // ob10110
console.log(" 0o" +radix.toString(8)) // o26
console.log( "Ox" +radix.toString(16)) // Ox16


var n = 123456.789

n.toFixed() -  // the argument is the number of digits after the decimal point


n.toFixed(0) // => "123457"
n.toFixed(2) // => "123456.79"
n.toFixed(5) // => "123456.78900"


n.toExponential() // converts the number to a string using exponential annotation
n.toPrecision() //  converts the number to a string with the number of relevant digits you specify

n.toPrecision(4) // => "1.235e+5"
n.toPrecision(7) // => "123456.8"
n.toPrecision(10) // => "123456.7890"