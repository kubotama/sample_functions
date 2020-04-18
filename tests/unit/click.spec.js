import axios from "axios";
import { shallowMount } from "@vue/test-utils";
import SampleFunctions from "@/components/SampleFunctions.vue";

jest.mock("axios");
axios.get.mockImplementation(() =>
  Promise.resolve({ statusCode: 200, body: "sample" })
);

describe("コードの呼び出し", () => {
  let wrapper;
  const idButton = "#sampleButton";

  beforeEach(() => {
    wrapper = shallowMount(SampleFunctions);
  });

  it("axios.getを呼び出す。", () => {
    wrapper.find(idButton).trigger("click");

    expect(axios.get.mock.calls.length).toBe(1);
  });

  it("引数を確認する。", () => {
    wrapper.find(idButton).trigger("click");

    expect(axios.get.mock.calls[0].length).toBe(1);
    expect(axios.get.mock.calls[0][0]).toBe(
      "http://localhost:9000/.netlify/functions/sample"
    );
  });

  it("ボタンがクリックされた後は、テキスト領域に'sample'が設定されている。", async () => {
    await wrapper.find(idButton).trigger("click");
    expect(wrapper.vm.sampleText).toBe("sample");
  });
});

describe("コードのURLを取得する。", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(SampleFunctions);
  });

  it.each`
    beforeUrl                                           | afterUrl
    ${"http://localhost/"}                              | ${"http://localhost:9000/.netlify/functions/sample"}
    ${"http://localhost:8080"}                          | ${"http://localhost:9000/.netlify/functions/sample"}
    ${"https://kubotama-sample-functions.netlify.com/"} | ${"https://kubotama-sample-functions.netlify.com/.netlify/functions/sample"}
  `("$before -> $after", ({ beforeUrl, afterUrl }) => {
    expect(wrapper.vm.getFunctionUrl(beforeUrl)).toBe(afterUrl);
  });
});
