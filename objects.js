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
console.log(jsUser.greet())
Object.freeze(jsUser); //it will freeze the object and you cannot modify it

