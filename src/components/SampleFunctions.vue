<template>
  <div>
    <div>
      <button id="sampleButton" @click="onClick">{{ sampleLabel }}</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "SampleFunctions",
  data() {
    return {
      sampleLabel: "functionsを呼び出す"
    };
  },
  methods: {
    onClick() {
      return;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
