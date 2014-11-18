function tellFortune(jobTitle, location, partner, numKids) {
	var future = "You're going to be a " + jobTitle + " in " + location + " and married to " + partner + " with " + numKids +	" kids.";
	return future;
}

console.log(tellFortune("taco eater", "Germany", "Edward Norton", "75"));
console.log(tellFortune("chimney-sweep", "Istanbul", "Johnny Depp", "1.2"));
console.log(tellFortune("research assistant", "Madagascar", "Uma Thurman", "4"));

console.log(tellFortune);

function calculateAge(birthYear, currentYear){
	var age = "You're " + (currentYear - birthYear) + " years old!";
	return age;
}

console.log(calculateAge(1985, 2014));


function calculateSupply (age, amountPerDay) {
	var maxAge = 99;
	var totalNeeded = (((maxAge - age) * 365) * amountPerDay);
	return totalNeeded;
}

console.log(calculateSupply(98, 1));


function calcCircumference(radius) {
	var diameter = ((2*Math.PI) * radius)
	return diameter
}
	
console.log(calcCircumference(8))

function celsiusToFahrenheit(celtemp) {
	var fahtemp = ((celtemp * 9/5) + 32)
	return fahtemp 
}

console.log(celsiusToFahrenheit(20))

function fahrenheitToCelsius(ftemp) {
	var ctemp = ((ftemp - 32) * (5/9))
	return ctemp
}

console.log(fahrenheitToCelsius(68))

