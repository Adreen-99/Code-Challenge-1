--Code-Challenge-1--

This repository contains a collection of simple JavaScript functions designed to perform common calculations and estimations. Each function interacts with the user via prompt for input and displays results using console.log.

How to Run These Functions:

You can run these JavaScript functions in any environment that supports JavaScript, such as:

Your web browser's developer console: Open your browser (e.g., Chrome, Firefox), right-click on any webpage, select "Inspect" or "Inspect Element," and go to the "Console" tab. You can paste the function code and then call the function (e.g., calculateBodaFare()).
Node.js: If you have Node.js installed, save the function code to a .js file (e.g., utilities.js) and run it from your terminal using node utilities.js.
Functions Included:

--calculateChaiIngredients()--

This function calculates the required quantities of ingredients to make a specified number of cups of "Chai Bora" (Kenyan tea). How it works:

It prompts the user to enter the desired number of cups of chai.
It validates the input to ensure it's a positive number.
It uses a standard recipe per cup:
    --200 ml water
    --50 ml milk
    --1 tablespoon tea leaves
    --2 teaspoons sugar
It then calculates and displays the total required amounts for water, milk, tea leaves, and sugar based on the number of cups.
Example Usage: JavaScript

--calculateChaiIngredients()--

calculateBodaFare()
This function calculates the estimated fare for a "boda boda" (motorcycle taxi) trip based on the distance traveled. How it works:

It prompts the user to enter the distance in kilometers.
It validates the input to ensure it's a positive number.
The fare is calculated using a base fare of KES 50 and an additional charge of KES 15 per kilometer.
It then displays the breakdown of the fare, including the base fare, the distance-based charge, and the total trip bill.
Example Usage: JavaScript

--calculateBodaFare()--

estimateTransactionFee()
This function estimates the transaction fee for sending a specified amount of money, typically mimicking a mobile money transfer service. How it works:

It prompts the user to enter the amount they wish to send.
It validates the input to ensure it's a positive number.
Transaction fees are calculated based on different tiers:
    KES 10 for amounts up to KES 500.
    1.5% of the amount (minimum KES 10) for amounts between KES 501 and KES 10,000.
    A fixed fee of KES 70 for amounts greater than KES 10,000.
It displays the amount being sent, the calculated transaction cost, and the total amount to be debited.
Example Usage: JavaScript

estimateTransactionFee();


This project was developed by : Adreen.N.Githinji  
email: githinjiadreen27@gmail.com 
project link is https://github.com/Adreen-99/Code-Challenge-1
---