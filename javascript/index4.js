let input = prompt("Enter a price tag (for example: $30)");

let price = parseFloat(input.replace("$", ""));
let newPrice = price * 0.9;

console.log(`Your new price is: $${newPrice.toFixed(2)}`);