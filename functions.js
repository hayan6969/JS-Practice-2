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

const addTwo=(a,b)=>(a+b ) //implicit return, if wraped in curly braces then return is required and in parenthesis return is not required
console.log(addTwo(2,3))



//IIFE - Immediately Invoked Function Expression

const sum1 = function(){
    console.log('Sum')
}(); //this will be called immediately

(function sum3(){
    console.log('Sum3')

})(); //the semi-colon is required for IIFE
const sum2 = (()=>{
    console.log('Sum2')
})() ;  //this will be called immediately by just wraping the function in parenthesis

//calling the function directly by functionName() may cause global scope pollution so we use IIFE


((name)=>{  //unNamed IIFE
    console.log(name)
})("hayan"); //this is how we pass the arguments to IIFE

const two2=()=>{
    one1()
    console.log('two2')
}

const three3=()=>{
    
    two2()
    console.log('three3')
}


const one1=()=>{
console.log('one1')
}



three3()

let check = false

check ==true ? console.log('True') : console.log('False') //ternary operator
///////

 
