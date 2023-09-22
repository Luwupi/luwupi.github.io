function runc() {
	return new Date().getTime();
}

export const time = {
	name: "time",
	desc: "Current Unix time",
	aliases: [],
	run(msg) { return runc(); }
}