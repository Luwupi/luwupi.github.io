import ping from "./cmd/ping.js";
import time from "./cmd/time.js";

const cmds = [ping, time];

export function processCmd(msg) {
	let c = msg.split(/\s+/g, 1)[0].toLowerCase(); //split on whitespace
	
	for (const cmd of cmds) {
		if (cmd.name == c || cmd.aliases.includes(c)) {
			return cmd.run(msg);
		}
	}
}