export default {
	random() {
		return Math.random();
	},
	
	integer(min, max) {
		return Math.floor(Math.random()*(1+max-min))+min
	},
	
	elem(arr) {
		return arr[this.integer(0,arr.length-1)]
	}
}