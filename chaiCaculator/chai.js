function calculateChaiIngredients() {
  // Prompt the user for the number of cups
  let numberOfCupsInput = prompt("How many cups of Chai Bora would you like to make?");

  // Convert the input to a number
  let numberOfCups = parseFloat(numberOfCupsInput);

  // Check if the input is a valid number
  if (isNaN(numberOfCups) || numberOfCups <= 0) {
    console.log("Please enter a valid number of cups.");
    return; // Exit the function if the input is invalid
  }

    //Recipe for 1 cup
    const waterPerCup = 200; 
    const milkPerCup = 50;
    const teaPerCup = 1;
    const sugarPerCup = 2;

    //Caculatee required amounts
    const totalWater = waterPerCup * numberOfCups;
    const totalMilk = milkPerCup * numberOfCups;
    const totalTea = teaPerCup * numberOfCups;
    const totalSugar = sugarPerCup * numberOfCups;

    
    console.log(`\nTo make ${numberOfCups} cups of Kenyan Chai, you will need:`);
    console.log(`Water: ${totalWater} ml`);
    console.log(`Milk: ${totalMilk} ml`);
    console.log(`Tea Leaves (Majani): ${totalTea} tablespoon${totalTea > 1 ? 's' : ''}`);
    console.log(`Sugar (Sukari): ${totalSugar} teaspoon${totalSugar > 1 ? 's' : ''}`);
    console.log("\nEnjoy your Chai Bora!");

} 

//Call the function 
calculateChaiIngredients();