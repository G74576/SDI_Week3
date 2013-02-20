// alert("JavaScript works!");

// Kevin M. O'Toole
// Project 2
// SDI 1302
// Functions and Loops

// My Variables
var name = "Kevin";
var money = 25;
var food = ["2 eggs", "1 milk", "1 bread", "2 water"];

console.log(name + " must go to the local store to pick up some groceries." + " His mother only gave him $" + money + " to pick up the items on the list she gave him." + " The things he must pick up are: " + food + "." + " If there is any money left over, " + name + " can buy a snack!");

// Procedure
var subtraction = function(moneyOnHand, totalSpent) {
	var moneyLeftOver = moneyOnHand-totalSpent;
		if (totalSpent < moneyOnHand) {
			console.log(name + " had $" + moneyLeftOver + " left over after shopping to buy a snack!");
		} else {
			console.log(name + " has no money left over to buy a snack :(");
		};
};

subtraction(25,22.50);

// Boolean Function
var foodCost = function(eggs, milk, bread, water) {
	var totalCost = (eggs+eggs)+milk+bread+(water+water);
	var moneyLeft = money-totalCost;
	if ((totalCost || moneyLeft) < money) {
		console.log("It is true that " + name + " has money left over for a snack.");
		return true;
	} else {
		console.log("It is false, " + name + " has no money left over for a snack.");
		return false;
	};
	/*if (totalCost < money) {
		console.log("It is true that " + name + " has money left over for a snack.");
		return true;
	} else {
		console.log("It is false, " + name + " has no money left over for a snack.");
		return false;
	};*/
};

foodCost(3,5.50,2,4.50);

// Number Function
var spend = function(snackMoney) {
	while (snackMoney > 0) {
	console.log("I have " + snackMoney + " left to buy snacks!");
	snackMoney--;
	};
	console.log("I have no more money to buy snacks!");
	
	return 0;
};

spend(2.50);

// String Function
var finishedShopping = function(home, doChores) {
	var allDone = "I get to watch cartoons!";
	console.log(home + " When I get home " + doChores + " When i have completed my chores, " + allDone);
	
	return allDone;

};

finishedShopping("After I am done shopping, I must go home.","I have to do my chores.");

// Array Function
var cartoons = function(name, time) {
	var cartoonName = ["He-Man", "Thundercats"];
	var timeLeft = time-30;
		console.log("Since I've completed my chores i have " + time + " to watch my " + name + " farvorite cartoons and eat my snacks from the store, before bed.");
	for (var i=0, c=cartoonName.length; i < c; i++) {
		console.log("After I watch " + cartoonName[i] + ", I have " + timeLeft + " minutes left before bed!"); 
	};

	var bed = "Snacks were great, cartoons were awesome, now time for bed!";
console.log(bed);

return bed;	

};

cartoons(2,60);

// Returned Variables






