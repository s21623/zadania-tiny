function validateForm() {
	const name = document.forms['form']['name'].value.trim();
	const surname = document.forms['form']['surname'].value.trim();
	const age = document.forms['form']['age'].value.trim();

	if (!name || !surname || !age) {
		alert('Wszystkie pola muszą zostać wypełnione');
		return false;
	}

	if (isNaN(age)) {
		alert('Wiek musi być liczbą')
		return false;
	}

	return true;
}

function run() {
	const btn = document.getElementById('btn-submit');

	btn.addEventListener('click', event => {
		event.preventDefault();
		
		validateForm();
	}, false)
}

run();