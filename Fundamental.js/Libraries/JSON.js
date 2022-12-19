 /*

JSON

        1. Serialization and Parsing 

        If a programm needs to transmit or save data across network conections to another pogramm, it mut convert its in-memory data strcutures into a string of bytes
        or characters than can be saved or transmitted and later be parsed to restore the orginal in.memory data structures


        Application Data Structure - Stringfyied Data Structure - Saved or Transmited - Parsing the stringfiyed object returning the in-memory js datastructure.

        The process of converting data strcutures into steam of bytes of character is knwon as SERIALIZATION.

        The easiest way to serialize data in js uses a format kwnown as JSON " JavaScript Object Notation"
        The format uses object and array literal syntx to convert data structures consisting of objects and arrays into STRINGS
        JSON supports any primitive number, strings, booleans and null. 
        It does not suppor MAP, SET, RegExp, Date or Typed Arrays. They are NONSERIALIZABLE VALUES
        There are two functions that remarks the core of serialization and parsing feautures

        JSON.stringfy() . enconde the js datastrcuture into a string
                    This function accepts three arguments. The third argument tells JSON the format of data on multiple indented lines.
                    The second argument is a replacer function defined. */


                    let json = JSON.stringify(o, (k, v) => v instanceof RegExp ? undefined : v);

/*
        The second argument can be an array. Each element of the array contains the properties to be serialized by the function.
        JSON.parse() - decodes the JSON-formatted data.
        

        A function to make cooy of any serilizable object or array. */

        function deepcopy(o) {
            return JSON.parse(JSON.stringify(o));
        }

/*

        2. JSON Customizations

        If JSON.stringy is asked to serialize a value that is nonserializeble.
        DAes can be transformed in strings, but when they are parsed the re-created datatructure will be differente, because it will
        return a STRING. 