function scuberGreetingForFeet(feet){
  // Write your code here!
  let distance = feet;
  let msg;
  if (distance <= 400) {
    msg = "This one is on me!";
  }
  else if (distance <= 2000) {
    msg = "That will be twenty bucks.";
  }
  else if ((distance > 2000) && (distance <= 2500)) {
    msg = "I will gladly take your thirty bucks.";
  }
  else if (distance > 2500) {
    msg = "No can do.";
  }
  else {
    msg = "please enter the distance for your ride. "
  }


  console.log(msg);
  return msg;
}

function ternaryCheckCity(city){
  // Write your code here!
  let msg;
  city === "NYC" ? msg = "Ok, sounds good." : msg = "No go.";
  
  return msg;
}

function switchOnCharmFromTip(tip){
  // Write your code here!
  let msg;

  switch(tip) {
    case "generous":
      msg = "Thank you so much.";
      break;
    case "not as generous":
      msg = "Thank you.";  
      break;
    default:
      msg = "Bye." 
  }
  return msg;
  

}

// scuberGreetingForFeet(350);