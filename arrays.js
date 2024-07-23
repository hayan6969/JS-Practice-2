//arrays

let arr =[1,2,3,4,5,6,7,8,"hi",true];
let arr1 = new Array(1,2,3,4,5,6,7,8,"hi",true);

//array methods

arr1.push(2)
arr1.push(3)
// console.log(arr1.pop())
// console.log(arr1.includes(9))
// console.log(`The index is ${arr1.indexOf(2)}`)

// console.log(arr1.join())//by default it will join with comma

//u can use unshift to add and shift to remove from the start of the array but as itb required to shift all the elements it is not recommended


//Splice and Slice Mehtods

let arr2 = [1,2,4,5,2,4,2]

// console.log(arr2.slice(0,5))


// console.log(arr2.splice(0,5))//it will remove the elements from the array and return the removed elements
// console.log(arr2) //the original array will be modified with splice

// console.log(arr2.sort(). reverse())//it will sort the array in ascending order

// console.log(arr2.filter((element)=>element!=2))
// console.log(arr2)
// arr2.reverse()
// console.log(arr2)

//Merging Arrays

let arr3 = arr.concat(arr2)  //concat will merge the arrays and return a new array
// console.log(arr3)
 //or you can use the spread operator to merge the two arrays

 let arr4 =[...arr,...arr2]
//  console.log(arr4)

//if you have a multidimentional array meaning it has an array inside and array and so on and you want to convert it into a single array you can use the flat method

let arr5 = [1,2,[3,4,5,[6,7,8]]]

let arr6=arr5.flat(2) // we enter the depth in the brackets so it will flatten the array to that depth, you can use a number or infinity
console.log(arr6)

console.log(Array.from("hello")) //it will convert the string into an array

//now making an array from object with its keys

let obj = {
    name:"John",
    age:23,
    city:"New York"
}

let arr7 = Array.from(Object.values(obj))
console.log(arr7)