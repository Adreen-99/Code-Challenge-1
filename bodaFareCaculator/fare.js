//input set-up(readline module);
//This is a Node js version using readline module to read user input from the console.
const readline = require('readline');
const {stdin: input, stdout: output} = require('process');

//Input setup
const rl = readline.createInterface({ input, output });

// Function to calculate the fare based on the distance
function calculateBodaFare(distanceInKm) {
    const baseFare = 50; // Base fare in Ksh
    const chargePerKm = 15; // Fare per kilometer in Ksh

    // Calculate total fare
    const totalFare = baseFare + ( distanceInKm * chargePerKm); //Total fare
    const travelFare = distanceInKm * chargePerKm; //Fare for the distance traveled
    
    //Output into the console
    console.log(`\nUko kwote? Io ni ${distanceInKm} km:`);
  console.log(`Ukikalia Pikipiki: KES ${baseFare}`);
  console.log(`Mpaka Uko: KES ${travelFare}`);
  console.log(`Total: KES ${totalFare}`);
  console.log("Panda Pikipiki!\n");

}
// Function to prompt the user for the distance and validate input
rl.question("Unafika wapi Mkubwa? Kilomita ngapi?:", function(userInput) {
    const distanceInKm = parseFloat(userInput);

    if (isNaN(distanceInKm) && distanceInKm > 0) {
        calculateBodaFare(distanceInKm);

    }else {
        console.log("Tafadhali ingiza umbali halali kwa kilomita.");

    }

    rl.close(); // Close the readline interface if input is invalid
    

});
