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
            
            console.log(a) //it can access the parent a or you can also create a new variable a that will be valid in its own scope and will not override the parent a
        }
        func3()
    }
    func2()
    console.log(a)
   
}

func()

//use case scenario for closure

//suppose you are building  a funtion to attach to buttons onClick listeners and pass a color as argument and it changes the background color of the screen'

//if you do it like this

// function clickHandler(color){
//     document.body.style.backgroundColor =`${color}`
// }

//when you attach it to onclick you cannot just pass the reference you will have to pass like

//button.onclick = clickHandler("red") //this will not work as it will immediately call the function and pass the return value to the onclick

//to make it work you will have to use the concept of closure and lexical scoping


function clickHandler(color){

    return function(){
        document.body.style.backgroundColor =`${color}`
    }
}

//now this will run and return a function to the button which on click will run properly

