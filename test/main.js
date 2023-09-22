var ping = import cmd from "./cmd/ping.js";

function processCmd(msg) {
	c = msg.split(/\s+/g, 1)[0]; //split on whitespace
	switch (c) {
		case "ping":
			return ping.run(msg);
		default:
			return "idk";
	}
}