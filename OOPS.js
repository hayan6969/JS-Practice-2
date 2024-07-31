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