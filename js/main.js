const userAgeQ = parseInt (prompt("Insert your age"));

const userKmQ = parseInt (prompt("How far are you willing to travel (in km)"));

if (userAgeQ <= 17) {
  console.log("You will be entitled to a discount of 20% on the ticket.");

} else if (userAgeQ >= 65) {
    console.log("You will be entitled to a discount of 40% on the ticket.");
  
} else {
  console.log("You are not entitled to a discount.");
}


const KmCost = (0.21 * 1);
console.log (KmCost);


