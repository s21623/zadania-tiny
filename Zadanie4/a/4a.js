const inputF = document.getElementById('fahrenheit-input');
const inputC = document.getElementById('celcjusz-input');

const btnF = document.getElementById('fahrenheit-btn');
const btnC = document.getElementById('celcjusz-btn');

const outF = document.getElementById('fahrenheit-output');
const outC = document.getElementById('celcjusz-output');

function run() {
	btnF.addEventListener('click', event => {
		event.preventDefault();
		const value = inputF.value || 0;
		outF.innerText = `Celsjusz ${(value - 32) * 5 / 9}`;
	}, false);
	
	btnC.addEventListener('click', event => {
		event.preventDefault();
		const value = inputC.value || 0;
		outC.innerText = `Fahrenheit ${value * 9 / 5 + 32}`;
	}, false);
}

run();