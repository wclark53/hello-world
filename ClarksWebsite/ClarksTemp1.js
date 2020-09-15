
"use strict";
var interestlist = [document.getElementById("computers"), document.getElementById("programming"), document.getElementById("webDevelopment"),
document.getElementById("dataAnalytics"), document.getElementById("networkSetup")];
var interests = [];
var interestsString;
var interestlog;

function registerInterests(){
    var interests = [];
   
    

    for(var i = 0; i < interestlist.length; i++){
        if (interestlist[i].checked === true){
            if(interests.includes(interestlist[i].value) === true){
                if(interestlist[i].check === false){
                    interests.splice(i, 1);
                }
            }else if(interests.includes(interestlist[i].value)=== false){
                interests.push(interestlist[i].value);
             }
        }    
    } 
    interestlog = interests; 
    console.log(interestlog);  

}

function convertToString(){
    interestsString = interestlog.toString();
    
}








