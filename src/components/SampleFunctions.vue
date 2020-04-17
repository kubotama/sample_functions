<template>
  <div>
    <div>
      <button id="sampleButton" @click="onClick">{{ sampleLabel }}</button>
    </div>
    <div>
      <span id="sampleText">{{ sampleText }}</span>
    </div>
  </div>
</template>

<script>
import axios from "axios";

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
      axios
        .get("http://localhost:9000/.netlify/functions/sample")
        .then(response => {
          console.log(response);
        })
        .catch(error => {
          console.error(error);
        });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
