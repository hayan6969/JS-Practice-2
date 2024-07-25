function hello () {
  console.log('Hello, world!');
}

hello//this is reference of the function
hello() //this is calling the function

//now we will give default values to the function parameters
function greet(name='John',age=30){ //while definition of the function these are called paramenters
    console.log(`Hello ${name}, you are ${age} years old`)
    return `Hello ${name}, you are ${age} years old`
    console.log('This will not be printed') //after return statement nothing is executed
}
greet('Mike',40) //while calling the function these are called arguments
greet()//this will take the default values

//rest operator in function i.e multiple values under one parameter

function sum(...numbers){
    return numbers
}
console.log(sum(1,2,3,4,5,6,7,8,9,10))

