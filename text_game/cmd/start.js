import player from "../user/Player.js";

function runc(msg, id) {
	if (player.exists(id)) return "You already have a profile!"
	player.create(id);
	return "Profile created for id " + id;
}

export default {
	name: "",
	desc: "",
	detailed: "",
	examples: [],
	aliases: [],
	cheat: false,
	run(msg, id) { return runc(msg, id); }
}