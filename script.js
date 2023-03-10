function generateRandomRGB() {
	const r = Math.floor(Math.random() * 256);
	const g = Math.floor(Math.random() * 256);
	const b = Math.floor(Math.random() * 256);
	return [r, g, b];
}
// function getComplement(rgb) {
// 	const rComp = 255 - rgb[0];
// 	const gComp = 255 - rgb[1];
// 	const bComp = 255 - rgb[2];
// 	return [rComp, gComp, bComp];
// }

function checkValues(r, g, b, actualRGB) {
	const result = [];
	if (r > actualRGB[0]) {
		result.push("HIGHER");
	} else if (r < actualRGB[0]) {
		result.push("LOWER");
	}
	if (g > actualRGB[1]) {
		result.push("HIGHER");
	} else if (g < actualRGB[1]) {
		result.push("LOWER");
	}
	if (b > actualRGB[2]) {
		result.push("HIGHER");
	} else if (b < actualRGB[2]) {
		result.push("LOWER");
	}
	return result;
} function checkValues(r, g, b, actualRGB) {
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
	}
	return result;
}


const [r, g, b] = generateRandomRGB();
const actualRGB = [r, g, b];
const rgbValue = `rgb(${r}, ${g}, ${b})`;
// const complementValue = `rgb(${getComplement([r, g, b]).join(", ")})`;

document.getElementById("box").style.backgroundColor = rgbValue;

// document.body.style.backgroundColor = rgbValue;
// document.body.style.color = complementValue;

const submitButton = document.getElementById("submit");
submitButton.addEventListener("click", () => {
	const redInput = document.getElementById("red").value;
	const greenInput = document.getElementById("green").value;
	const blueInput = document.getElementById("blue").value;
	const userRGB = `rgb(${redInput}, ${greenInput}, ${blueInput})`;
	document.getElementById("userBox").style.backgroundColor = userRGB;
	const results = checkValues(redInput, greenInput, blueInput, actualRGB);
	const resultDiv = document.getElementById("result");
	resultDiv.innerHTML = results.join("<br>");
});