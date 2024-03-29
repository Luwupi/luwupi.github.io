import ping from "./cmd/ping.js";
import time from "./cmd/time.js";
import triangles from "./cmd/triangles.js";
import start from "./cmd/start.js";

const cmds = [ping, time, triangles, start];
var id = 1;

export function processCmd(msg) {
	let c = msg.split(/\s+/g, 1)[0].toLowerCase(); //split on whitespace
	
	if (c == "help") return help(msg);
	
	for (const cmd of cmds) {
		if (cmd.name == c || cmd.aliases.includes(c)) {
			return cmd.run(msg, id);
		}
	}
	
	return "Unrecognised command - type help for help";
}

/** Help needs all other commands so exists here */
function help(msg) {
	let args = msg.toLowerCase().split(/\s+/g, 2);
	if (args.length == 1) {
		let s = "use help <command> for more info on a specific command\nhelp - shows this list";
		for (let cmd of cmds) {
			s += cmd.name + " - " + cmd.desc + "\n"; 
		}
		return s;
	}
		
	for (let cmd of cmds) {
		if (cmd.name == args[1]) {
			return "Command: " + cmd.name + "\n" + cmd.desc;
		}
	}
	return "Command " + args[1] + " does not exist";
}