var canvas, b64img;

const SCALE = 30;

function setup() {
  canvas = createCanvas(0, 0);
}

function main() {
	try {
		let xi = document.getElementById("xStart").value;
		let yi = document.getElementById("yStart").value;
		let img = document.getElementById("imgUpload").files;
		
		if (isNaN(parseInt(xi)) || isNaN(parseInt(yi))) throw "Bad x/y";
		
		xi = parseInt(xi);
		yi = parseInt(yi);
		
		if (!'files' in img) throw "Unsupported browser";
		if (img.length == 0) throw "No image";
		img = img[0];
		
		const reader = new FileReader();
		
		reader.onload = function() { 
			let dimg = new Image;
			
			dimg.onload = function() {
				let c = document.createElement('canvas').getContext('2d');
				c.drawImage(this,0,0);
				let w = this.width, h = this.height;
				var pixels = c.getImageData(0,0,w,h).data;
				canvas = createCanvas(SCALE*w,SCALE*h);
				
				//draw image + text
				noStroke();
				textSize(SCALE/3);
				for (let x = 0; x < w; x++) {
					for (let y = 0; y < h; y++) {
						let id = 4*(y*w+x);
						let r = pixels[id], g = pixels[id+1], b = pixels[id+2];
						fill(r,g,b);
						rect(SCALE*x, SCALE*y, SCALE, SCALE);
						
						if (r+g+b > 200) fill(0);
						else fill(255);
						text(xi+x,SCALE*x+2,SCALE*y+SCALE/2-3);
						text(yi+y,SCALE*x+2,SCALE*(y+1)-3);
					}
				}
				
				//draw lines
				strokeWeight(1);
				stroke(0);
				for (let x = 1; x < w; x++) { line(x*SCALE, 0, x*SCALE, h*SCALE); }
				for (let y = 1; y < h; y++) { line(0, y*SCALE, w*SCALE, y*SCALE); }
			}
			
			dimg.src = reader.result;
			
			//canvas = createCanvas(x, y);
			//background(220);
			
		};
		
		reader.readAsDataURL(img);
	} catch(e) {
		console.error(e);
	}
}