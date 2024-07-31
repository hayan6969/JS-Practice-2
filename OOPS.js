const user ={
    username: "batman",
    loginCount: 1,
    signedIn: true
}

console.log(user.username); // Output: batman


const func = ( username)=>{
this.username = username;
return this
}

console.log(func("hayan"))


String.prototype.trueLength = function(){  // Adding a new method to the String prototype
    return this.trim().length;
}


// const str = new String("  Hello  ");
const str = "  Hello  ";

console.log(str.trueLength()); // Output: 5