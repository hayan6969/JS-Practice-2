class User{
    constructor(name,email){
        this.name = name;
        this.email = email;
    }

    encrypt(){
        return `${this.name}${this.email}`;

    }

    static createUserId(){  //now this method is not available to the instance of the class
        return `${this.name}${this.email}`;

    }
}

const chai = new User('Chai','daffa')


console.log(chai.encrypt()) // Output: Chai daffa



//if it werent for class we would have to create first a function that takes parameters and returns an object
//then add the method encrypt() or any other method to the prototype of the function



//Inheritance

class Admin extends User{
    constructor(name,email){
        super(name)
        this.email = email;
        console.log(this)
    }
 
}


const admin = new Admin('Cha1','daffa')
console.log(admin.encrypt()) // Output: Chai daffa


