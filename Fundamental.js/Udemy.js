

const fetchdata = (callback) => {
    setTimeout( () => {
        callback("done")
    }, 1500) 
}

setTimeout(() => {
    console.log("timer 1")
    fetchdata(argument => {
        console.log(argument + " contatenated")
    })
},2000)


