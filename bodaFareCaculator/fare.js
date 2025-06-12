function calculateBodaFare() {
  // Prompt the user to enter the distance in kilometers.
  let distanceInKmInput = prompt("Where are you headed? how far is it in kilometers?");

  // Convert the input string to a floating-point number.
  let distanceInKm = parseFloat(distanceInKmInput);

  // Validate the input: Check if it's a valid number and greater than zero.
  if (isNaN(distanceInKm) || distanceInKm <= 0) {
    // Log an error message if the input is invalid.
    console.log("Please enter a valid distance.");
    return; // Exit the function to prevent further execution with invalid data.
  }

    //Creating constant values : 
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

//Call the function to initiate fare payment process
calculateBodaFare();