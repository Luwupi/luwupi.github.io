import * as cmd from "./cmd/ping.js";
import * as cmd from "./cmd/time.js";

export function processCmd(msg) {
	let c = msg.split(/\s+/g, 1)[0]; //split on whitespace
	switch (c) {
		case "ping":
			return cmd.ping.run(msg);
		case "time":
			return cmd.time.run(msg);
		default:
			return "idk";
	}
}