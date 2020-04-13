<template>
  <div id="app">
    <SampleFunctions />
  </div>
</template>

<script>
import SampleFunctions from "./components/SampleFunctions.vue";

export default {
  name: "App",
  components: {
    SampleFunctions
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
