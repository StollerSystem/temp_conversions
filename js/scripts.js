function celsToFar (temp1) {
  const far = (temp1 * (9/5)) + 32
  return far;
}

function farToCels (temp1) {
  const cels = (temp1 - 32) * (5/9)
  return cels;
}

const userInput = prompt("Enter a temperature:");
alert("Calsius to far is " + celsToFar(userInput) + " and far to celsius is " + farToCels(userInput) + ".");

 
