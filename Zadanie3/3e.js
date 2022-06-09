function najdluzszeSlowo(tekst) {
	const words = tekst.split(' ');

	let longest;

	for (let word of words) {
		if (iloscLiter(word) > iloscLiter(longest)) {
			longest = word;
		}
	}

	console.log(longest)
}

function iloscLiter(slowo) {
	if (!slowo) return 0;

	const litery = slowo.split('');

	return litery.length;
}

najdluzszeSlowo("Ala ma kota")