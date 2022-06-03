const date = new Date();

const renderCalendar = () => {
	// Sets the day of the month for a specified date according to local time.
	date.setDate(1);

	const monthDays = document.querySelector('.days');

	// 현재 달의 마지막 날짜를 알 수 있다.
	const lastDay = new Date(
		date.getFullYear(),
		date.getMonth() + 1,
		0,
	).getDate();

	// Returns the day of the month (1–31) for the specified date according to local time.
	// 이전 달의 마지막 날짜를 알 수 있다.
	const prevLastDay = new Date(
		date.getFullYear(),
		date.getMonth(),
		0,
	).getDate();

	// Returns the day of the week (0–6) for the specified date according to local time.
	// 이번달 첫날의 요일의 인덱스를 알 수 있다.
	const firstDayIndex = date.getDay();

	// 이번달의 마지막 날짜를 알 수 있다.
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

	document.querySelector('.date h1').innerHTML = months[date.getMonth()];
	document.querySelector('.date p').innerHTML = new Date().toDateString();

	let days = '';

	// 반복문을 순회하면서 달력 한면에 들어갈 날짜를 계산한다.
	for (let x = firstDayIndex; x > 0; x--) {
		days += `<div class="prev-date">${prevLastDay - x + 1}</div>`;
	}

	for (let i = 1; i <= lastDay; i++) {
		if (
			i === new Date().getDate() &&
			date.getMonth() === new Date().getMonth()
		) {
			days += `<div class="today">${i}</div>`;
		} else {
			days += `<div>${i}</div>`;
		}
	}

	// 이번달의 남은 날짜 만큼 다음달의 날로 채워준다,
	for (let j = 1; j <= nextDays; j++) {
		days += `<div class="next-date">${j}</div>`;
		monthDays.innerHTML = days;
	}
};

document.querySelector('.prev').addEventListener('click', () => {
	date.setMonth(date.getMonth() - 1);
	renderCalendar();
});

document.querySelector('.next').addEventListener('click', () => {
	date.setMonth(date.getMonth() + 1);
	renderCalendar();
});

renderCalendar();
