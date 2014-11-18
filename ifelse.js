function greaterNum(x, y) {
	if  (x < y){
	  return y;
	} else {
	  (y < x)
	  return x;	
	} 
}

console.log(greaterNum(5, 6))

function helloWorld(language) {
	if (language == "es"){
	  return "hello world";
	} else if (language == "de") {
	  return "guten tag welte";
	} else if (language == "fr") {
	  return "bonjour monde";	
	} else {
	  return "what language is that?";	
	}

}

console.log(helloWorld("de"))

function assignGrade(grade) {

	if (grade >=80){
		return "Good job, buddy! You got an A."
	} else if  (grade >= 70){
		return "Keep trying, B is pretty good."
	} else if (grade >= 60) {
		return "Study harder! C is no good."
	} else if (grade >= 50) {
		return "You got a D?! You're a disappointment."
	} else {
		return "F?! You're a complete failure!"
	}
}

console.log(assignGrade(47))

function pluralize(noun, num){

	if (num == 1){
		return num + " " + noun;
	} else {
		return num + " " + noun + "s";
	}

}

console.log(pluralize("chupacabra", 25))