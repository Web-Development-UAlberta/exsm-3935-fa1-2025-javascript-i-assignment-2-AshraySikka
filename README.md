# Name Editor and Remainder Calculator
This JavaScript prgram interacts with the user through the browser console using the `input()` and `output()` functions.  
It takes the total cost of goods, the customer's cash payment, and a discount code as input, applies the discount, and calculates the remaining balance or change to be returned.

#### Features
The main features of my code are:
1. Accepts user input for the total cost of the product, payment amount by the customer, and discount code  
2. Applies a discount percentage based on the provided discount code  
3. Calculates the final amount after discount and determines if the payment is sufficient  
4. Rounds the balance to two decimal places for accurate currency display  
5. Displays clear messages for all possible payment outcomes  

#### How It Works
My code works in 4 steps:
1. Takes input from the user (cost of goods, cash payment, and discount code)  
2. Determines the discount based on the entered code using a `switch` statement  
3. Calculates the final balance after applying the discount and subtracting the payment  
4. Outputs one of the following:
   - Invalid discount code message  
   - Successful payment with change to return  
   - No change required  
   - Insufficient payment with the amount to be paid more  

#### Example Output
    Please enter the total cost of goods: $20
    Please enter the amount of cash payment by the customer: $13.5
    Please enter the discount code: 5

    Successful Payment! Please give $1.5 back to the customer.

#### Functions Used
The key functions used my program are:
1. `input()` - captures user input  
2. `output()` - displays output in the console  
3. `switch` - applies the correct discount based on the entered code  
4. `Math.round()` - rounds numeric values (to 2 decimal places in my code)
5. `Math.abs()` - removes negative sign when displaying due balances  

#### How to Run
To run my code, complete the following steps:
1. Open the HTML file 'index.html' in your project directory
2. Open the file in your browser (double-click or right-click → Open With → Browser)

#### Notes
I have made a few assumptions for my code:
1. The user will enter valid numeric values for cost and payment  
2. The balance is rounded to two decimal places for proper currency formatting
3. The cashier needs to see the amount of change to be returned or the balance to be paid 
