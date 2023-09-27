function runc() {
	return new Date().getTime();
}

export default {
	name: "time",
	desc: "Current system time",
	aliases: [],
	run(msg) { return runc(); }
}