import ping from "./cmd/ping.js";
import time from "./cmd/time.js";

export function processCmd(msg) {
	let c = msg.split(/\s+/g, 1)[0]; //split on whitespace
	switch (c) {
		case "ping":
			return ping.run(msg);
		case "time":
			return time.run(msg);
		default:
			return "idk";
	}
}