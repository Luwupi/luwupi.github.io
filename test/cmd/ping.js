function runc() {
	return "Pong!";
}

export default {
	name: "ping",
	desc: "Check the game is functioning",
	aliases: [],
	run(msg) { return runc(); }
}