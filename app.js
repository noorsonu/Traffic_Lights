let i = 0;      //index for the current light
let n = 5;     //countdown timer
let cArray = ['red','yellow','rgb(0, 255, 0)'];     //array of light colors
let count = document.querySelector('.count');       //get the count class

function trafficLight(){
    let l1 = document.getElementsByClassName('light1'); //get all the lights

    for(let j=0; j<l1.length; j++){
        l1[j].style.background = 'black';  //Reset all lights on black
        l1[i].style.innerHTML = '';   //clear the content
    };

    l1[i].style.background = cArray[i];  //set the current light.
    if(i<l1.length)
    {
        if(n>=0)
        {       //if the countdown finished
            count.innerHTML = n;  //set the counter value
            n--;        //decrease the countdown
        }
        if(n==0)
        {
            i++;        //move to the next
            n=5;        //Reset the count
            if(i==3)
            {
                i=0;    //start again from the first light
            }
        }
    }

    // if(i<l1.length){
    //     i++;   //move to the next light
    // }
    // if(i==3){  //if all lights have been cycled through
    //     i=0;    //start again from the first light
    // }
}

setInterval(trafficLight,1000);          //execute the traffic light (per mili sec)