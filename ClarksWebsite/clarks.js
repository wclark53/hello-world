"use strict"; //interpret contents in strict mode
var validity = false;
var dateObject = new Date();
var countDown;
var hours = document.getElementById("hours");
var techs = document.getElementById("techs");

// Calculate prices for the Tech Calculator
function calculateprices(){

    var total;
    // check form for proper input
    checkForm();
    if(validity = true){
        
        if ((hours.value * 20) * techs.value > 50){
            var subtotal = (hours.value * 20) * techs.value;
            var discount =  (hours.value * 20) * techs.value * .05;
            total = subtotal - discount;  
        }
        else {
            total = (hours.value * 20) * techs.value;
        }
    }

    document.getElementById("total").innerHTML = "$" + total;
    }
function checkForm(){
    var message
    message = document.getElementById("total");
    message.innerHTML = "";

    try {
     
      if(isNaN(hours.value)) 
        {throw "Your input in not a number";}
      if(hours.value < 1 || techs.value < 1) {
          throw "hours is too low must be 1 or higher. ";}
      else {validity = true;}
    }
    catch(err) {
      alert (err)
    }
  
}

// calculate time for The count down clock on the pricecalculator page
function calculateAndDisplay(){
    var dateToday = new Date();
    var dateFrom = Date.UTC(dateToday.getFullYear(),
        dateToday.getMonth(), dateToday.getDate(),
        dateToday.getHours(), dateToday.getMinutes(), 
        dateToday.getSeconds());
    var dateTo = Date.UTC(document.getElementById("year").value ,document.getElementById("month").value ,document.getElementById("days").value)
    if((dateTo - dateFrom) < 1000) {
    // Clear the Counter 
    clearInterval(countdown);
    document.getElementById("countdownSection").style.display = "block";
}
    // years
    var fractionalYear = (dateTo - dateFrom) % 31_536_000_000;
    var yearsUntil = Math.floor((dateTo - dateFrom) /31_536_000_000);
    if(yearsUntil < 1){
        yearsUntil = "0";
}
    document.getElementById("countdown").innerHTML = "Elapsed Time <br> " + yearsUntil + " Years, ";
    // days 
 
    var daysUntil = Math.floor((fractionalYear) / 86400000); 
    document.getElementById("countdown").innerHTML += daysUntil + " Days, ";
    // hours 

    var fractionalDay = (dateTo - dateFrom) % 86400000;
    var hoursUntil = Math.floor(fractionalDay / 3600000);
    if (hoursUntil < 10) { 
        hoursUntil = "0" + hoursUntil; 
}
    document.getElementById("countdown").innerHTML +=  hoursUntil + " Hours, " ;
    // minutes
    var fractionalHour = fractionalDay % 3600000; 
    var minutesUntil = Math.floor(fractionalHour / 60000);
    if (minutesUntil < 10) {minutesUntil = "0" + minutesUntil;}
        document.getElementById("countdown").innerHTML += minutesUntil + " Minutes, ";
    // seconds
    var fractionalMinute = fractionalHour % 60000;
    var secondsUntil = Math.floor(fractionalMinute / 1000);
    if (secondsUntil < 10) {secondsUntil = "0" + secondsUntil;}
        document.getElementById("countdown").innerHTML += secondsUntil + " Seconds "; 
        countDown = (setInterval(calculateAndDisplay), 1000);
    }

    // create Event Listners
function createEventListener(){
    var priceButton = document.getElementById("submit");
    if(priceButton.addEventListener){
        priceButton.addEventListener("click", calculateprices, false);
    }
    else if(priceButton.attachEvent){
        priceButton.attachEvent("onclick", calculateprices);
    }

    
    var calulateTimeButton = document.getElementById("calculate");
    
    if(calulateTimeButton.addEventListener){
        calulateTimeButton.addEventListener("click", calculateAndDisplay, false);
    }
    else if(calulateTimeButton.attachEvent){
        calulateTimeButton.attachEvent("onclick", calculateAndDisplay);
    }
    
    var applyNow = document.getElementById("apply");
    if(applyNow.addEventListener){
        applyNow.addEventListener("click", applicationValidation, false);
    }
    else if(applyNow.attachEvent){
        applyNow.attachEvent("onclick", applicationValidation);
    }

}
if (window.addEventListener){
    window.addEventListener("load", createEventListener, false);
}
else if(window.attachEvent){
    window.attachEvent("onload", createEventListener);
}




