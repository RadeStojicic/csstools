<template>
  <div id="app">
    <vue-background-color></vue-background-color>
    <vue-navbar>
      <vue-border></vue-border>
      <vue-box-shadow></vue-box-shadow>
      <vue-background-image></vue-background-image>
      <vue-text-decoration></vue-text-decoration>
      <vue-text-shadow></vue-text-shadow>
      <vue-transform-rotate></vue-transform-rotate>
      <vue-opacity></vue-opacity>
      <vue-background-gradient></vue-background-gradient>
      <vue-flexbox></vue-flexbox>
      <vue-cursor></vue-cursor>
      <vue-image-filter></vue-image-filter>
    </vue-navbar>

    <transition
      name="router-anim"
      enter-active-class="animated fadeIn"
      leave-active-class="animated fadeOut"
    >
      <router-view />
    </transition>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,500;1,700;1,900&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Roboto", sans-serif;
}

.page {
  position: fixed;
  width: inherit;
}

.fadeIn {
  animation-duration: 0.2s;
}
</style>
