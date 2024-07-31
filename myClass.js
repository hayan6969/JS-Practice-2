class User{
    constructor(name,email){
        this.name = name;
        this.email = email;
    }

    encrypt(){
        return `${this.name}${this.email}`;

    }
}

const chai = new User('Chai','daffa')


console.log(chai.encrypt()) // Output: Chai daffa



//if it werent for class we would have to create first a function that takes parameters and returns an object
//then add the method encrypt() or any other method to the prototype of the function