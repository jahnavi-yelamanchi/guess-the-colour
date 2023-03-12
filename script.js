// function generateRandomRGB() {
// 	const r = Math.floor(Math.random() * 256);
// 	const g = Math.floor(Math.random() * 256);
// 	const b = Math.floor(Math.random() * 256);
// 	return [r, g, b];
// }

// function checkValues(r, g, b, actualRGB) {
// 	const result = [];
// 	if (r > actualRGB[0]) {
// 		result.push("HIGHER");
// 	} else if (r < actualRGB[0]) {
// 		result.push("LOWER");
// 	}
// 	if (g > actualRGB[1]) {
// 		result.push("HIGHER");
// 	} else if (g < actualRGB[1]) {
// 		result.push("LOWER");
// 	}
// 	if (b > actualRGB[2]) {
// 		result.push("HIGHER");
// 	} else if (b < actualRGB[2]) {
// 		result.push("LOWER");
// 	}
// 	return result;
// } 
// function checkValues(r, g, b, actualRGB) {
// 	const result = [];
// 	if (r > actualRGB[0]) {
// 		result.push("GO LOWER");
// 	} else if (r < actualRGB[0]) {
// 		result.push("GO HIGHER");
// 	} else {
// 		result.push("MATCHED");
// 		document.getElementById("red").style.borderColor = "green";
// 	}
// 	if (g > actualRGB[1]) {
// 		result.push("GO LOWER");
// 	} else if (g < actualRGB[1]) {
// 		result.push("GO HIGHER");
// 	} else {
// 		result.push("MATCHED");
// 		document.getElementById("green").style.borderColor = "green";
// 	}
// 	if (b > actualRGB[2]) {
// 		result.push("GO LOWER");
// 	} else if (b < actualRGB[2]) {
// 		result.push("GO HIGHER");
// 	} else {
// 		result.push("MATCHED");
// 		document.getElementById("blue").style.borderColor = "green";
// 	}
// 	return result;
// }


// const [r, g, b] = generateRandomRGB();
// const actualRGB = [r, g, b];
// const rgbValue = `rgb(${r}, ${g}, ${b})`;
// let tries = 0

// document.getElementById("box").style.backgroundColor = rgbValue;



// const submitButton = document.getElementById("submit");
// submitButton.addEventListener("click", () => {
// 	tries += 1
// 	const triesDiv = document.getElementById("tries");
// 	triesDiv.innerHTML = "TRIES: " + tries
// 	const redInput = document.getElementById("red").value;
// 	const greenInput = document.getElementById("green").value;
// 	const blueInput = document.getElementById("blue").value;
// 	const userRGB = `rgb(${redInput}, ${greenInput}, ${blueInput})`;
// 	document.getElementById("userBox").style.backgroundColor = userRGB;
// 	const results = checkValues(redInput, greenInput, blueInput, actualRGB);
// 	const resultDiv = document.getElementById("result");	
// 	resultDiv.innerHTML = results.join("<br>");
// });

function generateRandomRGB() {
	const r = Math.floor(Math.random() * 256);
	const g = Math.floor(Math.random() * 256);
	const b = Math.floor(Math.random() * 256);
	return [r, g, b];
}

function checkValues(r, g, b, actualRGB) {
	const result = [];
	if (r > actualRGB[0]) {
		result.push("GO LOWER");
	} else if (r < actualRGB[0]) {
		result.push("GO HIGHER");
	} else {
		result.push("MATCHED");
		document.getElementById("red").style.borderColor = "green";
	}
	if (g > actualRGB[1]) {
		result.push("GO LOWER");
	} else if (g < actualRGB[1]) {
		result.push("GO HIGHER");
	} else {
		result.push("MATCHED");
		document.getElementById("green").style.borderColor = "green";
	}
	if (b > actualRGB[2]) {
		result.push("GO LOWER");
	} else if (b < actualRGB[2]) {
		result.push("GO HIGHER");
	} else {
		result.push("MATCHED");
		document.getElementById("blue").style.borderColor = "green";
		const score = Number(localStorage.getItem("score")) || 0; // get score from local storage, defaults to 0 if not found
		localStorage.setItem("score", score + 1); // increment score and store in local storage
		document.getElementById("score").innerHTML = "SCORE: " + (score + 1); // update score display
	}
	return result;
}

function updateScoreDisplay() {
	const score = Number(localStorage.getItem("score")) || 0; // get score from local storage, defaults to 0 if not found
	document.getElementById("score").innerHTML = "SCORE: " + score; // update score display
}

const [r, g, b] = generateRandomRGB();
const actualRGB = [r, g, b];
const rgbValue = `rgb(${r}, ${g}, ${b})`;
let tries = 0;

document.getElementById("box").style.backgroundColor = rgbValue;

updateScoreDisplay(); // call the function to update the score display when the page loads

const submitButton = document.getElementById("submit");
submitButton.addEventListener("click", () => {
	tries += 1;
	const triesDiv = document.getElementById("tries");
	triesDiv.innerHTML = "TRIES: " + tries;
	const redInput = document.getElementById("red").value;
	const greenInput = document.getElementById("green").value;
	const blueInput = document.getElementById("blue").value;
	const userRGB = `rgb(${redInput}, ${greenInput}, ${blueInput})`;
	document.getElementById("userBox").style.backgroundColor = userRGB;
	const results = checkValues(redInput, greenInput, blueInput, actualRGB);
	const resultDiv = document.getElementById("result");
	resultDiv.innerHTML = results.join("<br>");
	localStorage.setItem("score", Number(localStorage.getItem("score")) + 1); // update score in local storage with every submission
	updateScoreDisplay(); // update the score display after every submission
});
