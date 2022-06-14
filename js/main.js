const userAge = prompt("Insert your age");

const userKm = prompt("How far are you willing to travel (in km)");

if (userAge <= 17) {
  console.log("Hai diritto ad uno sconto del 20%");

} else if (userAge > 17 && userAge < 65) {
  console.log("Non hai diritto ad uno sconto");

} else if (userAge >= 65) {
  console.log("Hai diritto ad uno sconto del 40%");
}
