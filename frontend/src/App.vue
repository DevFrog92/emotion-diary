<template>
  <div id="app">
    this is app component
    <img alt="Vue logo" src="./assets/logo.png" />
    <router-link to="/">home</router-link> |
    <router-link to="/test">test</router-link>
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
</style>
