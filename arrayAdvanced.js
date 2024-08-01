const myArr=[]
// %DebugPrint(myArr)  // this can only be used in V8-debug engine not in simple v8 which node uses


//continious and holey arrays


//They both can be of following types:

//SMI (Small Integer) array

//Packed Elements array

//Double Elements array

const arr1=[1,2,3,4,5] //Packed_SMI_Elements and continious   most optimized but it only has numbers(integers) not even decimal

arr1.push(6.0) //this will convert the array to Packed_Double_Elements

arr1.push("7") //this will convert the array to Packed_Elements

arr1[10]=11 //this will convert the array to Holey_Elements


console.log(arr1)

const arr2=[1,2,3,4,5] 


//optimization sequence

//SMI > Double > Packed  for continious array
//H_SMI > H_Double > H_Packed for holey array

//if your array gets downgraded once it will never get upgraded again

//Example:

const arr3 = new Array(3) //You created an array and took 3 spaces as empty so its a holey array
arr3[0]="1"
arr3[1]="2"
arr3[2]="3"
//all these are holey elements

//instead you should have done this:

const arr4=[] //now you just have an empty array and have not taken any empty spaces so its a packed array
arr4.push("1")
arr4.push("2")
arr4.push("3")

//this is the difference between holey and packed array

const arr7 = new Array(3) //this is a holey array
arr7[0]="1"
arr7[1]="2"
console.log(arr7)
arr8=[1,,2]
console.log(arr8[1])