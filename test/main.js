import * as ping from "./cmd/ping.js";

export function processCmd(msg) {
	let c = msg.split(/\s+/g, 1)[0]; //split on whitespace
	switch (c) {
		case "ping":
			console.log(ping);
		default:
			return "idk";
	}
}