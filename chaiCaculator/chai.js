// This script calculates the ingredients needed to make Kenyan Chai based on the number of cups specified by the user.
// It prompts the user for the number of cups and outputs the required amounts of water, milk, tea leaves, and sugar.   


//Input setup
// The script uses the readline module to read user input from the console.
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
}); 

// Function to calculate the ingredients based on the number of cups

function calculateChaiIngredients(numberOfCups) {
    const waterPerCup = 200; 
    const milkPerCup = 50;
    const teaPerCup = 1;
    const sugarPerCup = 2;

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

// Function to prompt the user for the number of cups and validate input

function promptForCups() {
    rl.question('How many cups of Kenyan Chai would you like to make? ', (input) => {
        const numberOfCups = parseInt(input, 10);
        if (isNaN(numberOfCups) || numberOfCups <= 0) {
            console.log('Please enter a valid number of cups.');
            promptForCups(); // Prompt again if input is invalid
        } else {
            const ingredients = calculateChaiIngredients(numberOfCups);
            // Close the readline interface after calculation
            rl.close();
        }
    });
} 

// Start the program by prompting the user for the number of cups
promptForCups(); 