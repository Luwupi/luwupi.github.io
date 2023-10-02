import player from "../user/Player.js";

function runc(msg, id) {
	if (!player.exists(id)) return "You don't have a profile! Use command "start" to start playing";
	return player.get(id).getTriangles(); + " triangles";
}

export default {
	name: "triangles",
	desc: "see how many triangles you have",
	detailed: "",
	examples: [],
	aliases: ["triangle", "t"],
	cheat: false,
	run(msg, id) { return runc(msg, id); }
}