// analysis variables
var minlen = 2;
var maxlen = 15;
var contain = "";
var forbid = "";
var start = "";
var end = "";
var middle = "";

function analyse() {
	let goodWords = [];
	outer: for (let w of WORDS) {
		if (w.length < minlen) continue;
		if (w.length > maxlen) continue;
		
		if (!w.startsWith(start)) continue;
		if (!w.endsWith(end)) continue;
		if (!w.includes(middle)) continue;
		
		let good = contain.split("");
		let bad = forbid.split("");
		
		for (let l of bad) {
			if (w.includes(l)) continue outer;
		}
		
		let wA = w.split("");
		for (let l of good) {
			let i = wA.indexOf(l);
			if (i == -1) continue outer;
			wA.splice(i,1);
		}
		
		goodWords.push(w);
	}
	
	let html = "";
	for (let w of goodWords) {
		html += "<li>" + w + "</li>"
	}
	
	document.getElementById("count").innerHTML = goodWords.length+"";
	document.getElementById("results").innerHTML = html;
	
}

// yucky event listener html stuff
let minLenInput = document.getElementById("lenmin");
let maxLenInput = document.getElementById("lenmax");
let containInput = document.getElementById("contain");
let forbidInput = document.getElementById("forbid");
let startInput = document.getElementById("start");
let endInput = document.getElementById("end");
let middleInput = document.getElementById("middle");

minLenInput.addEventListener("change", (e) => {
	let x = e.target.value;
	
	if (isNaN(x)) {
		minLenInput.value = minlen+"";
		return;
	}
	
	if (x < 2) x = 2;
	if (x > maxlen) x = maxlen;
	
	minlen = x;
	minLenInput.value = x+"";
});

maxLenInput.addEventListener("change", (e) => {
	let x = e.target.value;
	
	if (isNaN(x)) {
		maxLenInput.value = maxlen+"";
		return;
	}
	
	if (x < minlen) x = minlen;
	if (x > 15) x = 15;
	
	maxlen = x;
	maxLenInput.value = x+"";
});

containInput.addEventListener("change", (e) => {
	let x = e.target.value;
	let matches = x.match(/[a-zA-Z]/g);
	if (matches === null) {
		contain = "";
		return;
	}
	contain = matches.join('');
	containInput.value = contain;
});

forbidInput.addEventListener("change", (e) => {
	let x = e.target.value;
	let matches = x.match(/[a-zA-Z]/g);
	if (matches === null) {
		forbid = "";
		return;
	}
	forbid = matches.join('');
	forbidInput.value = forbid;
});

startInput.addEventListener("change", (e) => {
	let x = e.target.value;
	let matches = x.match(/[a-zA-Z]/g);
	if (matches === null) {
		start = "";
		return;
	}
	start = matches.join('');
	startInput.value = start;
});

endInput.addEventListener("change", (e) => {
	let x = e.target.value;
	let matches = x.match(/[a-zA-Z]/g);
	if (matches === null) {
		end = "";
		return;
	}
	end = matches.join('');
	endInput.value = end;
});

middleInput.addEventListener("change", (e) => {
	let x = e.target.value;
	let matches = x.match(/[a-zA-Z]/g);
	if (matches === null) {
		middle = "";
		return;
	}
	middle = matches.join('');
	middleInput.value = middle;
});