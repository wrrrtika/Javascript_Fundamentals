for (var x = 0; x <= 20; x++) {
  if (x % 2 === 0) {
    console.log(x + " is even");
  } else {
    console.log(x + " is odd");
  }
}


var multiplier = 9;
for (var i = 0; i <= 10; i++) {
    var result = multiplier * i;
    console.log(multiplier + ' * ' + i + ' = ' + result);
}

function assignGrade(score) {
	if (score > 90) {
		return "Hey, you got an A!";
	} else if (score > 80) {
		return "Not bad, you got a B";
	} else if (score > 70) {
		return "You got a C";
	} else if  (score > 65) {
		return "Work harder, you got a D";
	} else {	
		return "Aww man, you got an F";
    }
}

for (var i = 55; i <= 100; i++) {
  console.log('Your score was: ' + i + '. ' + assignGrade(i));
}
