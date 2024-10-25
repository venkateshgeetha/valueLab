Implement a GET API in Node.js that takes two numbers as parameters, 
adds them, and sends the result. Create validations around input parameters to accept numeric values. 
Additionally, incorporate authentication using middleware


// in this case we start our code using TS
//i) first importing express for run

import express {Request,Response} from express
// import express to our app
const app = express()

//for run the code local we need port , assigning port as 3000 
const port = 3000

// GET API in Node.js that takes two numbers as parameters

// currently we are using get method so the value are get from parameter. in post case it has been received from body

// we also can use middleware before the execution

 /*eg:
   value : isrequired || isNumber
   isValue : boolean */

app.get('/api/validate/sum',(req: request , res : response)=>{

    // get the number from parameter

    let numVal1 = Number(req.param.value1)
    let numVal2 = Number(req.param.value2)
    // the value that accept only numbers
    let value : number;
    if(isNaN(numVal1) || isNaN(numVal2)){
        console.log("it's an invalid number")
    }
    else{
       value = numVal1 + numVal2;
       console.log("the value is "+ value)
    }
})
// in this case we are using app.listen for connect our application locally
app.listen(port,()=>{
    console.log("our application is connected successfully on the port" + port)
})
