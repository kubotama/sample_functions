<template>
  <div>
    <div>
      <button id="sampleButton" @click="onClick">{{ sampleLabel }}</button>
    </div>
    <div><span id="sampleText">メッセージを表示する場所</span></div>
  </div>
</template>

<script>
export default {
  name: "SampleFunctions",
  data() {
    return {
      sampleLabel: "functionsを呼び出す",
      sampleText: "メッセージを表示する場所"
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
