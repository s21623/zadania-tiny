function silniaRekurencja(n) {
	if (n > 1) {
		return n * silniaRekurencja(n - 1);
	} else {
		return 1;
	}
}

const silniaIteracja = function(n) {
	if (n > 1) {
		let silnia = n;

		for (let i = 1; i < n; i++) {
			silnia = silnia * i;
		}

		return silnia;
	} else {
		return 1;
	}
}

const rekurencja = silniaRekurencja(4);
const iteracja = silniaIteracja(4);

console.log(rekurencja, iteracja);