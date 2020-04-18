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
          this.sampleText = response.body;
        })
        .catch(error => {
          console.error(error);
        });
    },
    getFunctionUrl(pageUrl) {
      const url = new URL(pageUrl);
      if (url.hostname === "localhost") {
        url.port = 9000;
      }
      url.pathname = ".netlify/functions/sample";
      return url.href;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
