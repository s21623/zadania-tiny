function czyPalinodrom(tekst) {
	const reversed = tekst.split('').reverse().join('');

	if (tekst === reversed) {
		return 'To palinodrom'
	}

	return "No sorki to już nie palinodrom";
}

console.log(czyPalinodrom('ALALA'));
console.log(czyPalinodrom('BLALA'));
console.log(czyPalinodrom('ALSSLA'));