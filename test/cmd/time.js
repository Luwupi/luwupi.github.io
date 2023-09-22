function runc() {
	return new Date().getTime();
}

export default {
	name: "time",
	desc: "Current Unix time",
	aliases: [],
	run(msg) { return runc(); }
}