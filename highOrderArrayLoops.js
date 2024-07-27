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



        //for each

        arr.forEach((num,index,array)=>{  //gives you access to index, individual element and the array itself
            console.log(index,num,array)
        })



        //**************************************  MAP, FILTER, REDUCE *************************************//

//You cannot return from forEach, you can only return from map, filter and reduce

myNums = [1,2,3,4,5,6,7,8,9,10]
let newNums=myNums.filter((val)=>(val<9)) //all the values satisfying the condition will be returned
console.log(newNums)


//we are gonna have an array of objects having books information

const books =[

    {
        title:'Book1',
        genre:'Fiction',
        published:2000
    },
    {

        title:'Book2',
        genre:'Non-Fiction',
        published:2001
    },
    {

        title:'Book3',
        genre:'Fiction',
        published:2002
    },
    {

        title:'Book4',
        genre:'Non-Fiction',
        published:2003
    },
    {

        title:'Book5',
        genre:'Fiction',
        published:2004
    },
    {

        title:'Book6',
        genre:'Non-Fiction',
        published:2005
    },
    {

        title:'Book7',
        genre:'Fiction',
        published:2006
    },
    {

        title:'Book8',
        genre:'Non-Fiction',
        published:2007
    },
    {

        title:'Book9',
        genre:'Fiction',
        published:2008
    },
    {

        title:'Book10',
        genre:'Non-Fiction',
        published:2009
    },
    


]


console.log(books.filter((book)=>(book.published>2005 && book.genre=="Non-Fiction"))[0].title) //all the books published after 2005