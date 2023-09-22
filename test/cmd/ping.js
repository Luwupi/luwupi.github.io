function ping() {
	return "Pong!";
}

const cmd = {
	name = "ping",
	desc = "Check the game is functioning",
	aliases = [],
	run(msg) { return ping(); }
}

export cmd;