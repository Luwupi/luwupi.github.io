function ping() {
	return "Pong!";
}

export const ping = {
	name: "ping",
	desc: "Check the game is functioning",
	aliases: [],
	run(msg) { return ping(); }
}