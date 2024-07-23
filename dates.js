//dates in javascript

let myDate = new Date();
 console.log(myDate.toLocaleString())
    console.log(myDate.toDateString())
    console.log(myDate.toTimeString())
    console.log(myDate.getFullYear())

    console.log(myDate.getMonth())

    let myDate1 = new Date(2023,0,23); //months start from 0 in javascript
    let myDate2 = new Date("2023,1,23");// in string month start from 1
    console.log(myDate1.toDateString())
    console.log(myDate2.toDateString())


    //Time Stamps

    let timeStamp=Date.now();
    console.log(timeStamp)

    console.log(myDate.getTime())
    console.log(Math.floor(Date.now()/1000)) //convert to seconds

    console.log(myDate.getMonth())


    console.log(myDate.toLocaleString("default",{
        
        
        month:"long",
        weekday:"long",
    
    
    
    }))

    console.log(myDate.toLocaleString())