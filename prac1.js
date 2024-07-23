//using + or , to concatenate strings is an old way, so use backticks instead

let name="hayan";
const age=25;

let newName = name.slice(9,3)
let nName='   hayan is  here  '
console.log(nName)
console.log(nName.trim())


const url="https://www.google%20name.com";
console.log(url.replace("%20","-"))
console.log(url.includes("google"))


let str = "My-name-is*hayan"; 
console.log(str.split("-"))