//higher order array loops

 const arr = [1,2,3,4,5,6,7,8,9,10]

 for(const num of arr){
    if(num===5){
        continue
    }
    console.log(num)
 }
 
 //Maps

 const map = new Map()
 map.set('a',1)
    map.set('b',2)
    map.set('c',3)
    map.set('d',4)


    console.log(map)


    for(const [key,value] of map){

        console.log(key,value)
    }
     //now we will iterate an object
        const obj = {
            a:1,
            b:2,
            c:3,
            d:4
        }

        for(const key in obj){  //iteration of object
            console.log(key,obj[key])
        }



