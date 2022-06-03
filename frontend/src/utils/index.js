const date = new Date();

const renderCalendar = () => {
	date.setDate(1);
	const monthDays = document.querySelector('.days');

	// 0을 마지막 인수로 넣으면 전달의 마지막 날을 알 수 있다.
	const lastDay = new Date(
		date.getFullYear(),
		date.getMonth() + 1,
		0,
	).getDate();
	const prevLastDate = new Date(
		date.getFullYear(),
		date.getMonth(),
		0,
	).getDate();
	const firstDayIndex = date.getDay();
	const lastDayIndex = new Date(
		date.getFullYear(),
		date.getMonth() + 1,
		0,
	).getDay();
	const nextDays = 7 - lastDayIndex - 1;
	const months = [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December',
	];

	document.querySelector('.date h1').innerText = months[date.getMonth()];
	document.querySelector('.date h2').innerText = date.getFullYear();
	document.querySelector('.date p').innerHTML = new Date().toDateString();

	let days = '';

	for (let x = firstDayIndex; x > 0; x--) {
		days += `<div class="prev-date">${prevLastDate - x + 1}</div>`;
	}

	for (let i = 1; i <= lastDay; i++) {
		if (
			i === new Date().getDate() &&
			date.getMonth() === new Date().getMonth() &&
			date.getFullYear() === new Date().getFullYear()
		) {
			days += `<div class="today">${i}</div>`;
		} else {
			days += `<div>${i}</div>`;
		}
	}

	for (let y = 1; y <= nextDays; y++) {
		days += `<div class="next-date">${y}</div>`;
	}

	monthDays.innerHTML = days;
};

document.querySelector('.prev').addEventListener('click', () => {
	date.setMonth(date.getMonth() - 1);
	renderCalendar();
});

document.querySelector('.next').addEventListener('click', () => {
	date.setMonth(date.getMonth() + 1);
	renderCalendar();
});

document.querySelector('.date p').addEventListener('click', () => {
	date.setFullYear(new Date().getFullYear());
	date.setMonth(new Date().getMonth());
	renderCalendar();
});

renderCalendar();
