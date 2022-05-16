//You will not like what you see :(

const ROOT2 = Math.sqrt(2);
const S7 = {
  LEN: 210,
  END: 35,
  PAD: 12/ROOT2,
}
const S7W = S7.LEN+2*S7.PAD+2*S7.END;

class SevenSegment {
  
  constructor(x,y,w) {
    this.x = x;
    this.y = y;
    this.number = 0;
    this.on = true;
  
    this.unlit = "#200000";
    this.lit = "#ff0000";
    
    let m = w/S7W;
    this.segW = m*S7.LEN;
    this.segH = m*S7.END*2;
    this.tri = m*S7.END;
    this.pad = m*S7.PAD;
    
  }
  
  setNumber(n) {
    if (n < 0 || n > 9 || isNaN(n)) return console.error("Invalid number");
    this.number = n;
  }
  
  draw() {
    fill(this.unlit);
    this.drawSegment(1,1,1,1,1,1,1);
    fill(this.lit);
    this.drawNumber(this.number);
  }
  
  drawNumber(number) {
    switch(number) {
      case 0: return this.drawSegment(1,1,1,1,1,1,0);
      case 1: return this.drawSegment(0,1,1,0,0,0,0);
      case 2: return this.drawSegment(1,1,0,1,1,0,1);
      case 3: return this.drawSegment(1,1,1,1,0,0,1);
      case 4: return this.drawSegment(0,1,1,0,0,1,1);
      case 5: return this.drawSegment(1,0,1,1,0,1,1);
      case 6: return this.drawSegment(1,0,1,1,1,1,1);
      case 7: return this.drawSegment(1,1,1,0,0,0,0);
      case 8: return this.drawSegment(1,1,1,1,1,1,1);
      case 9: return this.drawSegment(1,1,1,1,0,1,1);
    }
  }
  
  drawSegment(a,b,c,d,e,f,g) {
    if (a) this.dsA();
    if (b) this.dsB();
    if (c) this.dsC();
    if (d) this.dsD();
    if (e) this.dsE();
    if (f) this.dsF();
    if (g) this.dsG();
  }
  
  dsA() {
    let left = this.x+this.tri+this.pad;
    let top = this.y;
    this.horizSeg(left, top);
  }
  
  dsB() {
    let left = this.x+2*this.pad+this.segW;
    let top = this.y+this.tri+this.pad;
    this.vertSeg(left, top);
  }
  
  dsC() {
    let left = this.x+2*this.pad+this.segW;
    let top = this.y+this.tri+3*this.pad+this.segW;
    this.vertSeg(left, top);
  }
  
  dsD() {
    let left = this.x+this.tri+this.pad;
    let top = this.y+2*this.segW+4*this.pad;
    this.horizSeg(left, top);
  }
  
  dsE() {
    let left = this.x;
    let top = this.y+this.tri+3*this.pad+this.segW;
    this.vertSeg(left, top);
  }
  
  dsF() {
    let left = this.x;
    let top = this.y+this.tri+this.pad;
    this.vertSeg(left, top);
  }
  
  dsG() {
    let left = this.x+this.tri+this.pad;
    let top = this.y+1*this.segW+2*this.pad;
    this.horizSeg(left, top);
  }
  
  horizSeg(left, top) {
    let tri = this.tri, segW = this.segW, segH = this.segH;
    beginShape();
    vertex(left, top+tri);
    vertex(left+tri, top);
    vertex(left+segW-tri, top);
    vertex(left+segW, top+tri);
    vertex(left+segW-tri, top+segH);
    vertex(left+tri, top+segH);
    endShape(CLOSE);
  }
  
  vertSeg(left, top) {
    let tri = this.tri, segW = this.segH, segH = this.segW;
    beginShape();
    vertex(left+tri,top);
    vertex(left+segW,top+tri);
    vertex(left+segW,top+segH-tri);
    vertex(left+tri,top+segH);
    vertex(left,top+segH-tri);
    vertex(left,top+tri);
    endShape(CLOSE);
  }
  
  get height() {
    return 2*this.segW + 4*this.pad + this.segH
  }
}

class ColonSegment {
  
  constructor(x,y,w) {
    this.unlit = "#200000";
    this.lit = "#ff0000";
  
    this.d = w;
    this.r = this.d/2;
    this.x = x+this.r;
    this.y = y;
    this.halfGap = this.d;
  }
  
  draw() {
    circle(this.x, this.y + this.halfGap, this.d);
    circle(this.x, this.y - this.halfGap, this.d);
  }
}

const FRAMERATE = 30;
const WIDTH = 128;
const PAD = 20;
const END = 1653022800;

var segments = [];

function setup() {
  createCanvas(1360, 265);
  noStroke();
  frameRate(FRAMERATE);
  
  for (let i = 0; i <= 10; i++) {
    let s;
    let x = (i+1)*PAD + i*WIDTH - 3*WIDTH*Math.floor(i/3)/4;
    
    if (i%3==2) { //colon
      s = new ColonSegment(x,PAD+WIDTH*0.875,WIDTH/4);
    } else {
      s = new SevenSegment(x, PAD, WIDTH);
    }
    segments.push(s);
  }
  
  console.log(segments[0].height);
  
}

function draw() {
  background(0);
  fill(255,0,0);
  
  let str = main();
  if (str != null) {
    
    str = str.split('');
    for (let i = 0; i <= 10; i++) {
      if (i%3==2) continue;
      let id = i - Math.floor(i/3);
      segments[i].setNumber(parseInt(str[id]));
    }
    
    for (let s in segments) {
      segments[s].draw();
    }
  }
}

var lastTime;
var tstr;
function main() {
  let now = new Date().getTime();
  now = Math.floor(now/1000);
  if (now == lastTime) return null;
  
  let dt = END - now;
  let s = Math.floor(dt%60) + "";
  let m = Math.floor(dt%3600 / 60) + "";
  let h = Math.floor(dt%86400 / 3600) + "";
  let d = Math.floor(dt/86400) + "";
  if (s.length == 1) s = "0"+s;
  if (m.length == 1) m = "0"+m;
  if (h.length == 1) h = "0"+h;
  if (d.length == 1) d = "0"+d;
  
  return d+h+m+s;
}