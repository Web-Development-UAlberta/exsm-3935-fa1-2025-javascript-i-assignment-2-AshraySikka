async function main() {
  let cost_of_goods = await input("Please enter the total cost of goods: $");
  let cash_payment = await input("Please enter the amount of cash payment by the customer: $");
  let discount_code = Number(await input("Please enter the discount code: "));
  
  let discount = 0;
  let balance = 0;
  let error = "no";
  
  output(" "); // Adding a new line

  switch(discount_code){
    case 0:
            discount = 0;
            break;
    case 1:
            discount = 10;
            break;
    case 2:
            discount = 15;
            break;
    case 3:
            discount = 25;
            break;
    case 4:
            discount = 35;
            break;
    case 5:
            discount = 40;
            break;
    default:
            error = "yes";
  }
  
  cost_of_goods = cost_of_goods - (cost_of_goods*(discount/100));
  balance = Math.round((cash_payment - cost_of_goods) * 100) / 100; 
  // ^ rounding the balance to 2 decimal places by moving the decimal by 2 places and then rounding and then moving the decimal back
  
  if (error == "yes"){
    output("Error! Invalid Discount code.");
  }
  else if (balance == 0){
    output("Balance is $"+balance+", no change to be returned!");
  }
  else if (balance < 0){
    output("Insufficient Payment! Customer needs to pay $"+Math.abs(balance)+" more."); // using absolute function to remove the negative sign
  }
  else{
    output("Successful Payment! Please give $"+balance+" back to the customer.");
  }
}