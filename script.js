

//////////////////////////////////////////
// UI control



document.getElementById("button").addEventListener("click", function() {
	var amount = document.getElementById("input_amount").value; 
	teaspoons = amount / 4.929; 
	tablespoons = amount / 14.787;
	cups = amount * 0.004227;
	quarts = amount / 946.353;
	gallons = amount / 3785.412;
document.getElementById("tsp").innerHTML = `${teaspoons.toFixed(2)} Teaspoons(tsp)`;	
document.getElementById("tbsp").innerHTML = `${tablespoons.toFixed(2)} Tablespoons(tbsp)`;	
document.getElementById("cups").innerHTML = `${cups.toFixed(2)} Cups`;
document.getElementById("qt").innerHTML = `${quarts.toFixed(2)} Quarts`;
document.getElementById("gal").innerHTML = `${gallons.toFixed(2)} Gallons`;
 });


            



