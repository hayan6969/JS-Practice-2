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


function two (){
     return function three(){
        return function four(){
            return 'Four'
        }
    }
}

console.log(two()()()) //this is how we call the inner function


const a = function (){  //function definition with expression and hoisting wont happen here so you cannot call this function before definition as its being stored in a variable
    return 'a'
}

console.log(a())

const n = ()=>{
console.log('Arrow function')
}

n()


const userr={
    username:'John',
    age:30,
    greet(){
        console.log(`Hello ${this.username}`)
    }
}

userr.greet() //this will give error as username is not defined in the function