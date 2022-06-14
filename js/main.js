const userAgeQ = prompt("Insert your age");

const userKmQ = prompt("How far are you willing to travel (in km)");

// Defined Km Cost 

const travelKmCost = 0.21 * userKmQ;

// Discount conditions 

if (userAgeQ <= 17) {
  const minorPercentage = (travelKmCost * 20) / 100;
  const overallTravelCostMinor = travelKmCost - minorPercentage;

  alert(overallTravelCostMinor.toFixed(2));

} else if (userAgeQ >= 65) {
  const overPercentage = (travelKmCost * 40) / 100;
  const overallTravelCostOver = travelKmCost - overPercentage;

  alert(overallTravelCostOver.toFixed(2));
  
} else {

  alert(travelKmCost.toFixed(2));
}
