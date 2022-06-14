const userAgeQ = prompt("Insert your age");

const userKmQ = prompt("How far are you willing to travel (in km)");

const travelKmCost = 0.21 * 100;

const minorPercentage = (userAgeQ * 20) / 100;

const overPercentage = (userAgeQ * 40) / 100;

const overallTravelCostMinor = (travelKmCost + minorPercentage);

const overallTravelCostOver = (travelKmCost + overPercentage);

if (userAgeQ <= 17) {

    console.log("Your overall ticket cost for your joruney is ${overallTravelCostOver}")


} else if (userAgeQ >= 65) {

    console.log("Your overall ticket cost for your joruney is ${overallTravelCostOver}")

} else {
    console.log("You are not entitled to a discount.");
}
// to fixed per cifre decimali






