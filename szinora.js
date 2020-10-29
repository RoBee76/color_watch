function colorClock() {
	var date = new Date(); /* a teljes objektumról készít egy másolatot, és az előre megírt metódusait is használni tudod majd. */
	var hours = date.getHours(); /* Most definiálj egy változót, amelyben a dátumbélyegző órákra vonatkozó részét tárolod el */
	var minutes = date.getMinutes();
	var seconds = date.getSeconds();
	if (hours <= 9) {
		/*  clockFace változó számokból konvertált szövegből áll, ha a szám 10-nél kisebb, egy karaktert fog tartalmazni, ha pedig 10 vagy annál nagyobb, akkor kettőt. Ez egy digitális órán furcsán mutatna, ezért javítsuk ki. */
		hours = '0' + hours; /* ha a szám kisebb vagy egyenlő mint 9, akkor adjunk elé egy "0"-t. */
	}
	if (minutes <= 9) {
		minutes = '0' + minutes;
	}
	if (seconds <= 9) {
		seconds = '0' + seconds;
	}
	var clockFace = hours + ':' + minutes + ':' + seconds; /* clockFace nevű változó, ami tárolja a pontos időt a megfelelő formátumban */
	var hexColor = '#' + hours + minutes + seconds; /* Adj meg egy új változót a colorClock funkciódon belül, amelyben ezt a "pillanatnyi színt" rögzíted: */
	document.getElementById('clock').innerHTML = clockFace; /* A document objektum tárolja a HTML-oldaladat a JavaScript számára hozzáférhető formában. Ebben fogjuk megkeresni a megfelelő elemet, és ennek a tartalmát írjuk át a változónk tartalmára, */
	document.getElementById('clock').style.background = hexColor;
	/* document.body.style.background = hexColor; */
	/* ez a sor a teljes oldalra -body- terjeszti ki */
	setTimeout(function () {
		/*  egy olyan előre megírt metódus, amely bizonyos idő elteltével lefuttat egy megadott kódot. */
		colorClock();
	}, 1000);
}

function fullYear() {
	var date = new Date();
	var n = date.getFullYear();
	document.getElementById('year').innerHTML = n;

	var month = new Array();
	month[0] = "Január";
	month[1] = "Február";
	month[2] = "Március";
	month[3] = "Április";
	month[4] = "Május";
	month[5] = "Június";
	month[6] = "Július";
	month[7] = "Augusztus";
	month[8] = "Szeptember";
	month[9] = "Október";
	month[10] = "November";
	month[11] = "December";

	var n2 = month[date.getMonth()];

	var n3 = date.getDate();
	document.getElementById('year').innerHTML = n3;

	var weekday = new Array(7);
	weekday[0] = "Vasárnap";
	weekday[1] = "Hétfő";
	weekday[2] = "Kedd";
	weekday[3] = "Szerda";
	weekday[4] = "Csütörtök";
	weekday[5] = "Péntek";
	weekday[6] = "Szombat";

	var n4 = weekday[date.getDay()];
	//     document.getElementById('year').innerHTML = n4;
	document.getElementById('day').innerHTML = n4;

	//     var yearFace = n + '. ' + n2 + ' ' + n3 + '. ' + n4;
	var yearFace = n + '. ' + n2 + ' ' + n3 + '.';
	document.getElementById('year').innerHTML = yearFace;
}

$(function() {
    colorClock();
    fullYear();
});