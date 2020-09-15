/* Willard Clark
*  Application Validation JS file 
*  fileName : Clarks1.js
*
*/

"use strict";
var validity = true; 
var experience = document.getElementById("experience");
var interestlist = [document.getElementById("computers"), document.getElementById("programming"), document.getElementById("webDevelopment"),
    document.getElementById("dataAnalytics"), document.getElementById("networkSetup")];
var interests = [];
var interestlog;
var interestsString;

// validate the application form
function applicationValidation(){
    
    var name = document.getElementById("name");
    var address = document.getElementById("address");
    var state = document.getElementById("state");
    var city = document.getElementById("city");
    var zipcode = document.getElementById("zipcode");
    var email = document.getElementById("email");
    var phone = document.getElementById("phone#");
    experience = document.getElementById("experience");

    try{
        var namePattern = /[a-zA-Z]/
        if(namePattern.test(name.value)=== false) 
            {
            validity = false;
            name.style.backgroundColor = "rgb(255, 200, 200)";
            throw "Name can not be Empty";            
            }
         
        if (isNaN(name.value) === false){ 
                name.style.backgroundColor = "rgb(255, 200, 200)";
                validity = false;
                throw "Name can not contain numbers";
                
            }
        
        if (address.value === ""){
            address.style.backgroundColor = "rgb(255, 200, 200)";
            validity = false;
            throw "address can not be Empty";
            }
        
            var cityPattern = /^([a-zA-Z]+\s)*[a-zA-z]+$/;
        if (cityPattern.test(city.value) === false){
            city.style.backgroundColor = "rgb(255, 200, 200)";
            validity = false;
            throw "City can no contain Numbers";
        }

        var phonePattern = /^\(?([0-9]{3})\)?[-.●]?([0-9]{3})[-.●]?([0-9]{4})$/; 
        if (phonePattern.test(phone.value) === false){
            phone.style.backgroundColor = "rgb(255, 200, 200)";
            validity = false;
            throw "Please enter a valid Phone Number";
           
        }
        if (isNaN(phone.value) === true){
            phone.style.backgroundColor = "rgb(255, 200, 200)";
            validity = false;
            throw "Phone number must contain numbers";
            
        }
        
        if (state.value === ""){
            state.style.backgroundColor = "rgb(255, 200, 200)";
            validity = false;
            throw "State can not be Empty";
            
        }
        if (isNaN(state.value) === false){
            state.style.backgroundColor = "rgb(255, 200, 200)";
            validity = false;
            throw "State Can not be a number"
            
        }
        var zipcodePattern = /^[0-9]{5}$/
        if (zipcodePattern.test(zipcode.value) === false){
            zipcode.style.backgroundColor = "rgb(255, 200, 200)";
            validity = false;
            throw "enter a valid 5 digit zipcode";
           
        }
        
        var emailPattern = /^[_a-zA-Z0-9\-]+(\.[_a-zA-Z0-9\-]+)*@[a-zA-Z0-9\-]+(\.[a-zA-Z0-9\-]+)*(\.[a-z]{2,6})$/
        if(emailPattern.test(email.value) === false){
            validity = false;
            email.style.backgroundColor = "rgb(255, 200, 200)";
            throw "Enter a Valid Email address";            
        }
        
        if (experience.value === ""){
            experience.style.backgroundColor = "rgb(255, 200, 200)";
            validity = false;
            throw "Please enter your experience";
            }
        if(experience.value !== ""){
            experience.style.backgroundColor = "rgb(255, 255, 255)"
        }    
        
        if(validity === true){
            registerInterests();
            applicationSubmission();
        }
          
 }
    catch(err){
        var errorMessage = document.getElementById("error")
        errorMessage.style.color = "red"
        errorMessage.innerHTML = err;
        validity = true;
    }
}

function registerInterests(){
    
   
    

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

// Show the application after the page has been submitted
function applicationSubmission(){
    var application = document.getElementById("application")
    var name = "Name: " + document.getElementById("name").value;
    var address = "Address: " + document.getElementById("address").value;
    var state = "State: " + document.getElementById("state").value;
    var city = "City: " + document.getElementById("city").value;
    var zipcode = "Zip Code: " + document.getElementById("zipcode").value;
    var email = "Email: " + document.getElementById("email").value;
    var phone = "Phone: " + document.getElementById("phone#").value;
    var experience = "Experience: " + document.getElementById("experience").value; 
    // read interests
    interestsString
    interests = [];

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
   
    application.innerHTML = "Thank you For your Interest in Our Company We will" +
     "<br> get in contact with you If something becomes avalible. <br> <br> "  +
      name + "<br>" + address + "<br>" + state + "<br>" + city + "<br>" + zipcode + "<br>" + email + "<br>" + phone + "<br>" + experience +"<br>" + interests; 
    
      document.getElementById("apply").style.display = "none";
}

// clear the form after a successful Validation
function clearForm(){
    
    var elementArray = document.getElementsByTagName("input");
    for(var i = 0; i < 7; i++){
        elementArray[i].value = "";
        elementArray[i].style.backgroundColor = "white";
    }
    experience.value = "";
    experience.style.backgroundColor = "white";
    for(var k = 7; k < elementArray.length; k++){
        if(elementArray[k].checked === true){
            elementArray[k].checked = false;
    }
    }

        

}
// create event Listeners
function createEventListener(){
    var applyNow = document.getElementById("apply");
    if (applyNow.addEventListener){
        applyNow.addEventListener("click", applicationValidation, false);
    }
    else if(applyNow.attachEvent){
        applyNow.attachEvent("onclick", applicationValidation);
    }
    var interestBox = document.querySelectorAll("input[type = 'checkbox']")
    if(interestBox.addEventListener){
        interestBox.addEventListener("change", registerInterests, false);
    }
    else if(interestBox.attachEvent){
        interestBox.attachEvent("onchange", registerInterests);
    }
}
if (window.addEventListener){
    window.addEventListener("load", createEventListener, false);
}
else if(window.attachEvent){
    window.attachEvent("onload", createEventListener);
}
