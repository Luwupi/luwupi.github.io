export default {
	asStandard(n) {
		return asScientific(n);
	},
	
	asScientific(n, dp=4) {
		if (n == 0) return 0;
		if (n < 0) return "-" + this.asScientific(-n,dp);
		let e = Math.floor(Math.log10(n));
		let m = Math.floor((n/(10**e)) * 10**(dp))/(10**(dp));
		return m+"e"+e;
	}
	
	withCommas(n) {
		if (n === null) return "0";
		if (n < 0) return "-" + withCommas(-n);
		if (n < 1000) return n+"";
		if (n > Number.MAX_SAFE_INTEGER) return this.asScientific(n);
		let d = (n+"").split(".");
		let c = d[0].split("");
		let res = c.shift();
		switch (c.length%3 + 1) {
			case 2: res += c.shift(); break;
			case 3: res += c.shift() + c.shift(); break;
		}
		for (let i in c) {
			if (i%3==0) res += ",";
			res += c[i];
		}
		if (d.length == 2) res += "."+d[1];
		return res;
	}
}