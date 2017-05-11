//The Clicker

var clickCount = 0

document.getElementById("clicker").addEventListener('click', function() {
	if (upgradeOnePurchases == 1) {
		clickCount += 2;
	}
	else if (upgradeOnePurchases == 2) {
		clickCount += 3;
	}
	else if (upgradeOnePurchases == 3) {
		clickCount += 4;
	}
	else if (upgradeOnePurchases == 4) {
		clickCount += 5;
	}
	else {
		clickCount += 1;
	}
	document.getElementById("clickerCount").innerHTML = clickCount + " " + "Points"; 
})

//The Auto Clicker
var autoClicksPerSec = 0
var autoClicker = function() {
	if (upgradeTwoPurchases == 1) {
		clickCount += 1;
		document.getElementById("clickerCount").innerHTML = clickCount + " " + "Points"; 
		document.getElementById("pointsPerSec").innerHTML = autoClicksPerSec + " " + "Points/sec"; 
	}
	else if (upgradeTwoPurchases == 2) {
		clickCount += 2;
		document.getElementById("clickerCount").innerHTML = clickCount + " " + "Points";
		document.getElementById("pointsPerSec").innerHTML = autoClicksPerSec + " " + "Points/sec";  
	}
	else if (upgradeTwoPurchases == 3) {
		clickCount += 3;
		document.getElementById("clickerCount").innerHTML = clickCount + " " + "Points";
		document.getElementById("pointsPerSec").innerHTML = autoClicksPerSec + " " + "Points/sec";
	}
	else if (upgradeTwoPurchases == 4) {
		clickCount += 4;
		document.getElementById("clickerCount").innerHTML = clickCount + " " + "Points";
		document.getElementById("pointsPerSec").innerHTML = autoClicksPerSec + " " + "Points/sec";
	}
	else if (upgradeTwoPurchases == 5) {
		clickCount += 5;
		document.getElementById("clickerCount").innerHTML = clickCount + " " + "Points";
		document.getElementById("pointsPerSec").innerHTML = autoClicksPerSec + " " + "Points/sec";
	}
	else {
		clickCount += 0;
		document.getElementById("clickerCount").innerHTML = clickCount + " " + "Points"; 
	}
}

window.setInterval(autoClicker, 1000);

//The Shop
	//Upgrade One

var upgradeOnePurchases = 0
document.getElementById("upgradeOne").innerHTML = "Upgrade 1:" + " " + 25 + " " + "Points";

 document.getElementById("upgradeOne").addEventListener('click', function() {
 	if (clickCount >= 25 && upgradeOnePurchases == 0) {
 		clickCount -= 25;
 		document.getElementById("clickerCount").innerHTML = clickCount + " " + "Points";
 		document.getElementById("upgradeOne").innerHTML = "Upgrade 1:" + " " + 50 + " " + "Points";
 		upgradeOnePurchases += 1;
 	}
 	else if (clickCount >= 50 && upgradeOnePurchases == 1) {
 		clickCount -= 50;
 		document.getElementById("clickerCount").innerHTML = clickCount + " " + "Points";
 		document.getElementById("upgradeOne").innerHTML = "Upgrade 1:" + " " + 75 + " " + "Points";
 		upgradeOnePurchases += 1;
 	}
 	else if (clickCount >= 75 && upgradeOnePurchases == 2) {
 		clickCount -= 75;
 		document.getElementById("clickerCount").innerHTML = clickCount + " " + "Points";
 		document.getElementById("upgradeOne").innerHTML = "Upgrade 1:" + " " + 100 + " " + "Points";
 		upgradeOnePurchases += 1;
 	}
 	else if (clickCount >= 100 && upgradeOnePurchases == 3) {
 		clickCount -= 100;
 		document.getElementById("clickerCount").innerHTML = clickCount + " " + "Points";
 		document.getElementById("upgradeOne").innerHTML = "Upgrade 1:" + " " + "Maxed Out";
 		upgradeOnePurchases += 1;
 	}
 	else if (upgradeOnePurchases == 4) {
 		alert("You maxed this upgrade!");
 	}
 	else {
 		alert("You do not have enough points!");
 	}
 })
 document.getElementById("upgradeOne").onmouseover = function() {
 	document.getElementById('upgradeOneDescription').style.display = 'block';
 }
 document.getElementById("upgradeOne").onmouseout = function() {
 	document.getElementById('upgradeOneDescription').style.display = 'none';
 }

 	//Upgrade Two

 var upgradeTwoPurchases = 0
document.getElementById("upgradeTwo").innerHTML = "Upgrade 2:" + " " + 50 + " " + "Points";

 document.getElementById("upgradeTwo").addEventListener('click', function() {
 	if (clickCount >= 50 && upgradeTwoPurchases == 0) {
 		clickCount -= 50;
 		document.getElementById("clickerCount").innerHTML = clickCount + " " + "Points";
 		document.getElementById("upgradeTwo").innerHTML = "Upgrade 2:" + " " + 100 + " " + "Points";
 		upgradeTwoPurchases += 1;
 		autoClicksPerSec += 1;
 	}
 	else if (clickCount >= 100 && upgradeTwoPurchases == 1) {
 		clickCount -= 100;
 		document.getElementById("clickerCount").innerHTML = clickCount + " " + "Points";
 		document.getElementById("upgradeTwo").innerHTML = "Upgrade 2:" + " " + 150 + " " + "Points"; 
 		upgradeTwoPurchases += 1;
 		autoClicksPerSec += 1;
 	}
 	else if (clickCount >= 150 && upgradeTwoPurchases == 2) {
 		clickCount -= 150;
 		document.getElementById("clickerCount").innerHTML = clickCount + " " + "Points";
 		document.getElementById("upgradeTwo").innerHTML = "Upgrade 2:" + " " + 200 + " " + "Points";
 		upgradeTwoPurchases += 1;
 		autoClicksPerSec += 1;
 	}
 	else if (clickCount >= 200 && upgradeTwoPurchases == 3) {
 		clickCount -= 200;
 		document.getElementById("clickerCount").innerHTML = clickCount + " " + "Points";
 		document.getElementById("upgradeTwo").innerHTML = "Upgrade 2:" + " " + 250 + " " + "Points";
 		upgradeTwoPurchases += 1;
 		autoClicksPerSec += 1;
 	}
 	else if (clickCount >= 250 && upgradeTwoPurchases == 4) {
 		clickCount -= 250;
 		document.getElementById("clickerCount").innerHTML = clickCount + " " + "Points";
 		document.getElementById("upgradeTwo").innerHTML = "Upgrade 2:" + " " + "Maxed Out";
 		upgradeTwoPurchases += 1;
 		autoClicksPerSec += 1;
 	}
 	else if (upgradeTwoPurchases == 5) {
 		alert("You maxed out this upgrade!");
 	}
 	else {
 		alert("You do not have enough points!");
 	}
 })
 document.getElementById("upgradeTwo").onmouseover = function() {
 	document.getElementById('upgradeTwoDescription').style.display = 'block';
 }
 document.getElementById("upgradeTwo").onmouseout = function() {
 	document.getElementById('upgradeTwoDescription').style.display = 'none';
 }

 	//Secret Upgrade

var secretUpgradePurchases = 0
document.getElementById("secretOne").innerHTML = "Secret:" + " " + 1000 + " " + "Points"
var clickerCycleOne = function () {
	document.getElementById('clicker').style.width = 10;
	setInterval(clickerCycleTwo, 1000);
}
var clickerCycleTwo = function () {
	document.getElementById('clicker').style.width = 300;
	setInterval(clickerCycleOne, 1000);
}

document.getElementById("secretOne").addEventListener('click', function() {
	if (clickCount >= 1000 && secretUpgradePurchases == 0) {
		clickCount -= 1000;
		document.getElementById("clickerCount").innerHTML = clickCount + " " + "Points";
		document.getElementById("secretOne").innerHTML = "Secret:" + " " + "Maxed Out";
		clickerCycleOne();
		secretUpgradePurchases += 1;
	}
	else {
		alert("You do not have enough points!");
	}
})

document.getElementById("secretOne").onmouseover = function() {
	document.getElementById("secretOneDescription").style.display = 'block';
}
document.getElementById("secretOne").onmouseout = function() {
	document.getElementById("secretOneDescription").style.display = 'none';
}