// alert("JavaScript works!");

// Kevin M. O'Toole
// Project 3
// SDI 1302
// Functions and Loops

// My Variables
var name = "Kevin";
var money = 25;
var food = ["2 eggs", "1 milk", "1 bread", "2 water"];
var groceries = {
	"dairy": "Milk",
	"produce": "Eggs",
	"bakery": "Bread",
	"drinks": "Water"
};

console.log(name + " must go to the local store to pick up some groceries." + " His mother only gave him $" + money + " to pick up the items on the list she gave him." + " The things he must pick up are: " + food + "." + " If there is any money left over, " + name + " can buy a snack!");

// Json
	console.log("Mom's Grocery List:");
var handleData = function(json) {
	for (var i = 0; i < json.groceries.length; i++) {
		var grocery = json.groceries[i];
		console.log("Department: " + grocery.department + ", Item: " + grocery.item + ", Quantity: " + grocery.quantity);
	};
};

handleData(json2);

// Objects Function
var groceryList = function() {
	for (var key in groceries) {
	console.log("At the grocery store i must go to the " + key + " section, and pick up " + groceries[key]);
	};
	return "Picked up all the groceries my mom wanted me to get.";
};

var newGroceryList = function(newDairy,newProduce,newBakery,newDrinks) {
	groceries.dairy = newDairy;
	groceries.produce = newProduce;
	groceries.bakery = newBakery;
	groceries.drinks = newDrinks;
	for (var key in groceries) {
	console.log("At the grocery store i must go to the " + key + " section, and now pick up " + groceries[key]);
		for (var i = 0, g=groceries.lenght; i < g; i--) {
			console.log("I have " + groceries[i] + " things to pick up!");
		};	
	};
	return "Picked up all the groceries my mom wanted me to get.";	
};

var list = groceryList();
var newList = newGroceryList("1 Milk","2 Eggs","1 Bread","2 Water");

// Procedure
var subtraction = function(moneyOnHand, totalSpent) {
	var moneyLeftOver = moneyOnHand-totalSpent;
		if (totalSpent < moneyOnHand) {
			console.log(name + " has $" + moneyLeftOver + "0 left over after shopping to buy a snack!");
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

var canBuySnacks = foodCost(3,5.50,2,4.50);
//console.log(canBuySnacks);

// Number Function
var spend = function(snackMoney) {
	while (snackMoney > 0) {
	console.log("I have " + snackMoney + " left to buy snacks!");
	snackMoney--;
		var snacksLeft = 3;
		while (snacksLeft > 0) {
			console.log("I can get " + snacksLeft + " snacks!");
			snacksLeft--;
		};
	};
	console.log("I have no more money to buy snacks!");
	
	return 0;
};

var allGone = spend(2.50);
//console.log(allGone);

// String Function
var finishedShopping = function(home, doChores) {
	var allDone = "I get to watch cartoons!";
	console.log(home + " When I get home " + doChores + " When i have completed my chores, " + allDone);
	
	return allDone;

};

var afterShopping = finishedShopping("After I am done shopping, I must go home.","I have to do my chores.");
//console.log(afterShopping);

// Array Function
var cartoons = function(howMany, time) {
	var cartoonName = ["He-Man", "Thundercats"];
	cartoonName.push("G.I. Joe");
		console.log("Since I've completed my chores i have " + time + " minutes to watch my " + cartoonName.length + " farvorite cartoons and eat my snacks from the store, before bed.");
	for (var i=0, c=cartoonName.length; i < c; i++) {
		var timeLeft = time-=30;
		if (timeLeft >= 0) {
		console.log("After I watch " + cartoonName[i] + ", I have " + timeLeft + " minutes left before bed!"); 
		} else {
		console.log("I have no time left to watch cartoons!");
		};
	};

	var bed = "Snacks were great, cartoons were awesome, now time for bed!";
	console.log(bed);
	
return bed;	

};
var timeForBed = cartoons(2,90);
//console.log(timeForBed);

// Returned Variables
console.log(newList);
console.log("Is it true that i have money left: " + canBuySnacks);
console.log("How much do i have after buying snacks: " + allGone);
console.log("If chores are complete: " + afterShopping);
console.log(timeForBed);