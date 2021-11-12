const urlParameter = new URLSearchParams(window.location.search);
const time = urlParameter.get('time');
const FRAMERATE = 1000/60

if (!isNaN(time) && time !== null) {
	document.getElementById('select').style.display = 'none';
	document.getElementById('clock').style.display = 'block';
	setInterval(function() {
		timeInt = Math.round(parseInt(time, 10)/1000);
		let y,d,h,r,s;
		let t = Math.abs(timeInt - Math.round(new Date().getTime()/1000));
		
		//get into hrt
		y = Math.floor(t / 31536000);
		t -= y * 31536000;
		d = Math.floor(t / 86400);
		t -= d * 86400;
		h = Math.floor(t / 3600);
		t -= h * 3600;
		m = Math.floor(t / 60);
		t -= m * 60;
		s = Math.floor(t);
		
		d += ''; h += ''; m += ''; s += '';
		while (d.length < 3) d = '0' + d;
		if (h.length == 1) h = '0' + h;
		if (m.length == 1) m = '0' + m;
		if (s.length == 1) s = '0' + s;
		
		document.getElementById('stime').innerHTML = s;
		document.getElementById('mtime').innerHTML = m;
		document.getElementById('htime').innerHTML = h;
		document.getElementById('dtime').innerHTML = d;
		document.getElementById('ytime').innerHTML = y;
	}, FRAMERATE);
}

function go() {
	let dh = document.getElementById('dh').value;
	let dm = document.getElementById('dm').value;
	let ds = document.getElementById('ds').value;
	
	let y = document.getElementById('y').value;
	let mo = document.getElementById('mo').value;
	let d = document.getElementById('d').value;
	let h = document.getElementById('h').value;
	let mi = document.getElementById('mi').value;
	let s = document.getElementById('s').value;
	
	if (isNaN(dh) || isNaN(dm) || isNaN(ds) || ds == '' || dm == '' || dh == '') {
		if (isNaN(y) || isNaN(mo) || isNaN(d) || isNaN(h) || isNaN(mi) || isNaN(s)) {
			return;
		} else {
			if (y.length == 2) y = '20' + y;
			if (h.length == 1) h = '0' + h;
			if (mi.length == 1) mi = '0' + mi;
			if (s.length == 1) s = '0' + s;
			if (mo.length == 1) mo = '0' + mo;
			if (d.length == 1) d = '0' + d;
			
			let date = y + '/' + mo + '/' + d + ' ' + h + ':' + mi + ':' + s;
			console.log(date);
			let endTime = new Date(date);
			console.log(endTime);
			window.location.href = 'https://luwupi.github.io/countdown/index.html?time=' + endTime.getTime();
		}
	} else {
		let extra = 3600000 * dh + 60000 * dm + 1000 * ds;
		let endTime = new Date().getTime() + extra;
		window.location.href = 'https://luwupi.github.io/countdown/index.html?time=' + endTime;
	}
}