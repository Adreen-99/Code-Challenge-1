//This script calculates the fees for a mobile money transfer based on the amount specified by the user.
// It prompts the user for the amount and outputs the calculated fees.

// Input setup
// The script uses the readline module to read user input from the console.
const readline = require('readline');

// Function to calculate the fees based on the amount
function estimateTransactionFee(amountToSend) {
    let fee = amountToSend * 0.015; 

    if (fee < 10) {
        fee = 10; // Minimum fee is Ksh 10
    } else if (fee > 70) {
        fee = 70; // Maximum fee is Ksh 1000
    }
    // Output the fee and total amount
    const totalDebited = amountToSend + fee; // Total amount including the fee

    console.log('nSending KES ${amountToSend}:');
    console.log(`Caculated Transaction Fee: KES ${fee}`);
    console.log(`Total Amount debited: KES ${totalDebited}`);
    console.log("\nSend Money Securely!");

}

//Create interface to read from the terminal
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


function promptForTransactionAmount(){

//Ask the user for the amount to send and validate input
rl.question('Unatuma Ngapi? (KES): ', function(input) {
    const amountToSend = parseFloat(input);

    if(isNaN (amountToSend) && amountToSend > 0) {
        estimateTransactionFee(amountToSend); // Call the function to calculate fees
    }else{
        console.log("\nTafadhali weka kiasi sahihi cha pesa.");

        rl.close(); // Close the readline interface after input
    }

    

});

}

promptForTransactionAmount(); // Start the program by prompting the user for the amount