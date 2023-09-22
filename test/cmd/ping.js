function runc() {
	return "Pong!";
}

export const ping = {
	name: "ping",
	desc: "Check the game is functioning",
	aliases: [],
	run(msg) { return runc(); }
}