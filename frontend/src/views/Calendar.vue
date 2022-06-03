<template>
	<section class="calendar-container">
		<section class="calendar">
			<header>this is calendar header</header>
			<div class="week-days">
				<p v-for="day in dayText" :key="day">
					{{ day }}
				</p>
			</div>
			<div class="days"></div>
			<footer>this is footer</footer>
		</section>
	</section>
</template>

<script>
export default {
	data() {
		return {
			dayText: ['Sun', 'Mon', 'Thu', 'Wed', 'Thu', 'Fri', 'Sat'],
			date: null,
		};
	},
	created() {},
	methods: {
		setDateObject() {
			this.date = new Date();
		},
		generateCalendar() {
			this.date.setDate(1);

			const days = document.querySelector('.days');
			const currentMonthLastDay = new Date(
				this.date.getFullyYear(),
				this.date.getMonth() + 1,
				0,
			).getDate();

			const prevMonthLastDay = new Date(
				this.date.getFullyYear(),
				this.date.getMonth(),
				0,
			).getDate();

			const firstDayIndex = date.getDay();
			const lastDayIndex = new Date(
				this.date.getFullYear(),
				this.date.getMonth() + 1,
				0,
			).getDay();

			// getDay() -> 0 ~ 6
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
		},
	},
};
</script>

<style scoped>
.calendar-container {
	width: 100vw;
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	overflow: hidden;
}

.calendar {
	width: 70vw;
	height: 70vw;
	max-width: 500px;
	max-height: 500px;
	min-width: 250px;
	min-height: 250px;
	border: 1px solid;
}

.week-days {
	width: 100%;
	border: 1px solid;
	display: flex;
	align-items: center;
}
</style>
