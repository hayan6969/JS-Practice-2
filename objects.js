const mySymbol = Symbol("key");

const jsUser = {
  name: "John",
  //to use as symbol use square brackets
  [mySymbol]: "value",
  "full name": "John Doe",  //now you cannot access this property using dot notation and you have to use square brackets jsUser["full name"]
  age: 30,
  isAdmin: true,
};

console.log(jsUser);
jsUser.greet = function () {
  console.log(`Hello ${this.name}`);
  return 1;
};
// console.log(jsUser.greet())
Object.freeze(jsUser); //it will freeze the object and you cannot modify it


const user={}

user.id="123"
user.name="John"
user.age=30
user.isLoggedin=true

const regularUser={
    id:"123",
    name:"John",
    age:30,
    isLoggedin:true,
    fullname:{

        first:"John",
        last:"Doe"
    
    }
}

console.log(regularUser.fullname?.first) //the ?  will check if the property or value exists or not and if it does not exist it will return undefined

const obj1 ={a:1,b:2}
const obj2 ={c:2,d:1}


const obj4 = Object.assign({},obj1,obj2) //it will merge the two objects and return a new object {} is for good practice, that becomes a empt object target and the others are source
const obj3={...obj1,...obj2} //it will merge the two objects and return a new object

console.log(obj3)
console.log(obj4)

//object destructuring

const {a,b}=obj1  //you can put : infront of a and give it another name then use that name to call it
console.log(a)
console.log(b)
 