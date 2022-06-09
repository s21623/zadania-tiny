function min2Max2(arr) {
	let max = Math.max(...arr);
	let min = Math.min(...arr);
	let max2 = -Infinity;
	let min2 = Infinity;

	for (let num of arr) {
		if (num < max && num > max2) {
			max2 = num;
		}

		if (num > min && num < min2) {
			min2 = num;
		}
	}

	console.log(`Druga największa: ${max2}`);
	console.log(`Druga najmnijesza: ${min2}`);
}

min2Max2([14, 3, 55, 43, 5, 7, 11, 19, 22]);
