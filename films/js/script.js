const liList = document.querySelectorAll('li');
// console.log(liList);
const search = document.querySelector('.search');
// console.log(search);

const searchEngine = (e) => {
	const text = e.target.value.toLowerCase();
	console.log(text);

	liList.forEach((el) => {
		if (el.textContent.toLowerCase().indexOf(text) !== -1) {
			el.style.display = 'block';
		} else {
			el.style.display = 'none';
		}
	});
};

search.addEventListener('keyup', searchEngine);
