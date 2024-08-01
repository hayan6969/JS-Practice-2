class User{
    constructor(name,email){
        this.name = name;
        this.email = email;
    }

    get email(){
        return this._email;
    }

    set email(email){
        this._email = email;
    }

    
}

const user = new User("hayan","hayan@gmail.com")
user.email="hello"
console.log(user.email)
