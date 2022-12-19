
// Chapter 11 only for consulting. Flanangan


            /* Dates and Times


            DAte instances are created with Date() constrcutros. With no arguments it returns an istance object that represents the current date and time.
            The default timezone in Js is the UTC */
        
            let now = new Date 


/*          If you pass one argument, it interprets that argument as the number of milliseconds since 1970 epoch.
            A millisecond is thousand of seconds.     

            More arguments meand in order: year, month, day-of-month, hour,minute, second and millisecond. */

            let d = new Date(2002,8,12,23,5,0,400000)

            console.log(d)

            /* A quirck of the standard library is that the FiRST MONTH of the year is 0 ad the first day of the month is 1.
            The Date constrcutor is interpreted using the local time zone.
            if you want to use the Universal Coordinate Time, GMT, on must use the Date.UTC() */

            d = new Date.UTC()

            console.log(d)

            // If fou want to print a date in UFC. You need to convert it to a string, other wise it will be printed in the local time

             d = let d = new Date(Date.UTC(2022, 7, 28, 1,20)).toUTCString() //  Sun, 28 Aug 2022 01:20:00 GMT
             d = new Date(Date.UTC(2022, 7, 28, 1,20)) // 2022-08-28T01:20:00.000Z


            
            /* Getter and Setter as methods for instances of date. */

            d.getFullYear() // 2022
            d.getMonth() // 7
            d.getDate() // 28
            d.getDay() // from 1 to 7
            d.getHours() // 2
            d.getMinutes() // 20

    
            d.setDay(4) // Deprecated. It does not work. There is no setter method for the day in Date Objects
            d.setHours(7) // Accept three arguments, hors, minuts, seconds. If the values extrapolate the clockt time, is added to the current hour incrementally

                    d.setHours(15) // Date object hour is set to 15:00:00
                    d.setHours(24) // Increment 24 hours 

                    // If have to increment hours lesser than 24, better to work with timestample

            
            d.setMinutes(45) // If you pass more than 59, it will update the hour property in 1.
            d.setUTCMonth(9) // Months range from 0 to 11. If you set more than 11, it will update the date objec to the next year
            d.setFullYear(1980, 0, 3) // accepts three arguments: year, month date.
            d.setDate() 
            /* If you pass a integer bigger than the number of days, it will update to the next month.
            If you pass 0, it will return the last day of the last month.
            If you pass a negative number it will decrement teh days from the last day of the last month.



            // Some of the methos, suchas as setMonths and setYears, accept tow arguments setting respectively months and days, years and days.
            /* All set and get methods accepts UTC between get and datelike getUTCDate()


                    The Timestamps
                    Js represents date internally as an interger of number in milleseconds since January 1, 1970 UTC time.
                    The Milliseconds valures are usefull as timestamps and sometimes is better o work with them rather than wih Date objects.

                    The method Date.prototype.getTime() returns its internal value in milliseconds.
                    The method Date.rptotype.setTime() receives the argument in milliseconds from January 1, 1970 UTC TIMe
                    Once cam manipulate the dates with millisecond values  as timestamps. */ 

                    d.setTime(d.getTime() + 30000) // Adding 30 seconds



//                  The Static Methos Date.now returns the current date as a timestamp (millisecond) as interger value.
//                  As it returns an interger, rather than an object, it does not allow chainning.

                    
                        let d = Date.now()

                        for(let i = 0; i < 20000; i++){

                        
                        }

                        let p = Date.now()

                        let diff = (p - d)

                        console.log(diff) // 1 millisecond to perform the entire code.

                
//                      As it returns an interger, rather than an object, it does not allow chainning.
                    
                        let d = Date.now()

                        d.setTime(85000000000000) // typedError: d.setTime is not a function
                        
                        console.log(d)

/*                      Therefore, Date.prototype.setTime() is method inherited from the Date Object, despite accepting an argument
                        in milliseconds to set a new date. */

                        let d = new Date()

                        d.setTime(d.getTime() + 86400000) // Adding one day from now onward
                        
/*          Date Arithmetic 
            Date objects can be compared with comparison operators and return a boolean ( < > =< >0)
            Whe operate an arithmetic operation between the date objects, it will return the timestamp. */

            let prazo = new Date()

            let prazo2 = new Date()

            prazo.setTime( prazo.getTime() + 86400000)

            console.log(prazo - prazo2) // 86400000 - One day of difference.


/*          If you want to add or subtract a specfied number of SECOND, MINUTES or HOURS from a date, it is more simples to modify the 
            timestamp. this technique becomes cumbersome if you want to add days, and moths have different numbers of days and years too.
            The best practice it to get the months and days, add the intergers and set them to the object.


            // Examples 

                    Definig a deadline only for working days with a recursive function */

                    let entryDate = new Date()

                        let hours = 72

                        console.log(entryDate.getDay())

                        function deadline(hours, Entrydate) {

                            let deadliner = new Date;

                            deadliner.setHours(Entrydate.getHours() + hours)

                            if(deadliner.getDay() === 6 ) {
                                return deadline(48,deadliner)

                            } else if(deadliner.getDay() === 7) {
                                return deadline(24,deadliner)
                            
                            }

                            return deadliner

                        }


                        /* Wrapping up
                        If you want to modify second, minutes or hours, better to use timestamples.

                        30 = 1 800 000 millisecond
                        15 MINUTES = 900 000 milliseconds

                        If you want to modify days, better to use Date.prototype.setHours(), with the arg > 24
                        If you want to modify Months, better to use Date.prototype.SetDays(), with the arg > 30 or 31
                        If you want to modify Years, better to make an arithmetic operation as argument of Date.Prototype.setFullYear( Date.Prototype.getFullYear() + Incremental  )


        
            /* Formatting and Parsing Date Strigns

            One can use date class not only to measure intervals - as we used above - but also to keep tracks of dates and times
            for some one is reading your code. Therefore you need to display dates and times to the users of your code.
            The date class difnes a number of different methods to convert date objects to strings. */

            Date.prototype.toString() // Use local time zone, only
            Date.prototype.toUTCString() // Use the UTC timezone only
            Date.prototype.toISOString() // Use the ISO Standard
            Date.prototype.toLocaleString() //Formates the date for the local, using the appropriate time zone and date-format
            Date.prototype.toDateString() // Format only for local date format
            Date.prototype.toTimeString() // only returns the time and omits the date. 
            Date.prototype.toLocaleTimeString() // oly formats time in loca-aware way with the local time zone.

            /* However, those methods are not the best practices for formatting dates adn times to the end users. There is an specific object in js
            the Intl.DateTimeFormat appropriate for that.
                
            The difference between and UCT is almost scientifical. No difference for business aplications. */


            /* Parsing Methods

            The parsing Methods are Statical. 

            Date.parse() - takes a string as its argument and returns a time stamp.
            It can parse the same argument of Date Contructor Function as well the output of toISOString , to UTCString and toString,.




                    