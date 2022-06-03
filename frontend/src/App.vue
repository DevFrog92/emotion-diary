<template>
	<div id="app">
		<nav>
			<router-link to="calendar">Calendar</router-link>
		</nav>
		<router-view></router-view>
	</div>
</template>

<script>
export default {
	name: 'App',
};
</script>

<style lang="scss">
@import './assets/styles/main.scss';

nav {
	height: 3rem;
	width: 100%;
	border: 1px solid;
	position: absolute;
	background-color: orange;
}
</style>
