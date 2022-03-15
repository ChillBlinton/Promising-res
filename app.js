let p = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(slowMath.add(6, 2));
    }, 2000);
})

p.then((result) => {
    console.log(result);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(slowMath.multiply(2, result));
        }, 2000);
    }); 

}).then((result) => {
    console.log(result);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(slowMath.divide(result, 4));
        }, 2000);
    }); 
    
}).then((result) => {
    console.log(result);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(slowMath.subtract(result, 3));
        }, 2000);
    }); 
   
}).then((result) => {
    console.log(result);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(slowMath.add(result, 98));
        }, 2000);
    }); 
   
}).then((result) => {
    console.log(result);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(slowMath.divide(result, 2));
        }, 2000);
    }); 
   
}).then((result) => {
    console.log(result);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(slowMath.multiply(result, 50));
        }, 2000);
    }); 
   
}).then((result) => {
    console.log(result);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(slowMath.divide(result, 40));
        }, 2000);
    }); 
   
}).then((result) => {
    console.log(result);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(slowMath.add(result, 32));
        }, 2000);
    }); 
   
}).then((result) => {
    console.log(result);
    alert("The final result is" + result);
// .then(result => console.log(result));

// slowMath.add(6, 2) 
//     console.log(i)}

// lowMath.multiply(i, 2) {
//     return Promise(i)
// }
// console.log(slowMath)



// promise add (6+2)
// console.log()

// () multiply by 2
// console.log()

// ()divide by 4
// console.log()

// ()subtract 3
// console.log()

// ()add 98
// console.log()

// ()divide by 2
// console.log()

// ()multiply by 50
// console.log()

// ()divide by 40
// console.log()

// ()add 32
// console.log()

// console.log("The final result is" + i)

// error.catch(result)
// console.log(error) 

}).catch((error) => (console.log(e)))