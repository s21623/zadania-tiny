const input = document.getElementById('text-input');
const btn = document.getElementById('text-btn');
const out = document.querySelector('.output');

function run() {
	btn.addEventListener('click', event => {
		event.preventDefault();
		const text = input.value;
	
		const p = document.createElement("p");
		const textNode = document.createTextNode(text);
	
		p.appendChild(textNode);
	
		out.appendChild(p);
	}, false);
}

run();