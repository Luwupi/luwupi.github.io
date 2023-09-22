import { processCmd } from "./main.js";

const INPUTBOX = document.getElementById("msgIn");
const RESPONSES = document.getElementById("mainTable");
const SCROLLPT = document.getElementById("scrollPoint");
const TYPE = {IN: 0, OUT: 1};



var id = 0;

// event listener for text box
INPUTBOX.addEventListener("keyup", ({key}) => { if (key === "Enter") sendInput(); });

function sendInput() {
	// get input
	let msg = INPUTBOX.value;
	
	// null checks
	if (msg === null || msg.trim() == "") return;
	msg = msg.trim();
	
	// clear input
	INPUTBOX.value = ""; 
	
	// send IN message
	addMessage(TYPE.IN, msg);
	
	// respond with OUT message
	addMessage(TYPE.OUT, respond(msg));
	
	// scroll to bottom of latest response
	SCROLLPT.scrollIntoView(false);
	
	// increment id
	id++;
}

function addMessage(type, msg) {
	let info = getInfo(type);
	let html = `<tr id="resp${id}"><td class="id">${info}</td><td class="msg">${msg}</td><tr>`;
	RESPONSES.innerHTML += html;
}

function respond(msg) {
	return processCmd(msg);
}

/**
 *  Make format good
 */
function sf(str) {
	return str.replaceAll(/\\n/gi, "<br>");
}

/** 
 * Purges messages so only the last `limit` messages are displayed 
 */
function purge(limit) {
	// implement at some point haha
}

function getInfo(type) {
	switch (type) {
		case TYPE.IN:
			return `IN&nbsp;&nbsp;[${id}]`;
		case TYPE.OUT:
			return `OUT&nbsp;[${id}]`;
		default:
			return `ERROR`;
	}
}