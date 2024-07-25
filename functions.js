function hello () {
  console.log('Hello, world!');
}

hello//this is reference of the function
hello() //this is calling the function

//now we will give default values to the function parameters
function greet(name='John',age=30){
    console.log(`Hello ${name}, you are ${age} years old`)
}
greet('Mike',40)
greet()//this will take the default values