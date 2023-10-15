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


  console.log(msg);
  return msg;
}

function ternaryCheckCity(){
  // Write your code here!
}

function switchOnCharmFromTip(){
  // Write your code here!
}

scuberGreetingForFeet(350);