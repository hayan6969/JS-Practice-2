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

const func = ()=>{
    const a = 123

    const func2=()=>{
        const func3=()=>{
            console.log(a)
        }
        func3()
    }
    func2()
}

func()