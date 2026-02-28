var intervalID=null;
var isRunning=false;
//interval is mean khmer call time
//var isRunning=false; is mean not yet or ready
function generateNumber(){
    // alert("Hello");
    //setInterval is mean start loop time ចេញពេលវេលា
    // 100 is 100ms is small s
    if(!isRunning){
        // Start loop
        intervalID=setInterval(()=>{
            for(let i=1; i<=5; i++){
                 var random=Math.floor(Math.random() *200)+1;
                 // n is id 
            document.getElementById("n"+i).innerHTML=random;
            }
            // var random=Math.floor(Math.random() *200)+1;
            // document.getElementById("result").innerHTML=random;
        },200);
   
    document.getElementById("btn").innerHTML="Stop";
    isRunning=true;
     }else{
        // Stop Loop
        clearInterval(intervalID);
        document.getElementById("btn").innerHTML="Start";
        isRunning=false;
    }
    // var random=Math.floor(Math.random() *200)+1;
    // document.getElementById("result").innerHTML=random;
    // in form or div we use .innerHTML
    // in Tex use .innerTesxt
    // innerText ទាល់តែជាspan 


}

