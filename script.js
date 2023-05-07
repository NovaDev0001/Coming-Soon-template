const typingText = document.getElementById('typing-text');
const soonText = document.getElementById('soon-text');

const type = (text, element, delay = 150) => {
	text.split('').forEach((char, i) => {
		setTimeout(() => {
			element.textContent += char;
		}, i * delay);
	});
};

type('Project Nova.', typingText);
setTimeout(() => {
	typingText.insertAdjacentHTML('afterend', '<br>');
	type('Soon.', soonText, 100);
}, 2000);

setTimeout(() => {
	document.querySelector('.overlay').classList.add('hidden');
}, 2500);
