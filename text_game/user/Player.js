var players = {};

// create new player
function newPlayer(id) {
	if (!playerExists(id)) {
		players[id] = new Player(id);
		return players[id];
	}
}

// check player exists
function playerExists(id) {
	return players.hasOwnProperty(id) || players[id] === null;
}

// get player
function getPlayer(id) {
	if (playerExists(id)) {
		return players[id];
	}
	return null;
}

// put player
function putPlayer(id, player) {
	players[id] = player;
}

// Stores player data
class Player {
	constructor(id) {
		this.id = id;
		this.triangles = 0;
	}
	
	addTriangles(qty) {
		this.triangles += qty;
	}
	
	getTriangles() {
		return this.triangles;
	}
}

export default {
	create(id) { return newPlayer(id); },
	get(id) { return getPlayer(id); },
	put(player) { return putPlayer(player.id, player); },
	exists(id) { return playerExists(id); }
};