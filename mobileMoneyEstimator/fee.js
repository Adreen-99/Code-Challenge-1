//This script calculates the fees for a mobile money transfer based on the amount specified by the user.
// It prompts the user for the amount and outputs the calculated fees.

// Function to calculate the fees based on the amount
function estimateTransactionFee() {
  // Prompt the user to enter the amount they wish to send.
  let amountToSendInp = prompt("What amount do you wish to spend");

  // Convert the input string to a floating-point number.
  let amountToSend = parseFloat(amountToSendInp);

  // Validate the input: Check if it's a valid number and greater than zero.
  if (isNaN(amountToSend) || amountToSend <= 0) {
    // Log an error message if the input is invalid.
    console.log("Please enter a valid amount.");
    return; // Exit the function to prevent further execution with invalid data.
  }

  // Define a constant for the basic transaction fee rate (1.5%).
  const basicTransactionRate = 0.015;

  // Determine the transaction fee based on the amount to send using conditional logic.
  if (amountToSend <= 500) {

    // For amounts less than or equal to KES 500.
    console.log('Sending KES ${amountToSend}:');
    console.log(`Transaction Fee: KES 70`);
    console.log(`Total Amount debited: KES ${amountToSend + 70}`);
    
}

console.log(`Send Money Securely!`);

}

//Call the function to initiate the transaction payment estimator process
estimateTransactionFee();

