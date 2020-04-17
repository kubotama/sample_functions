import axios from "axios";
import { shallowMount } from "@vue/test-utils";
import SampleFunctions from "@/components/SampleFunctions.vue";

jest.mock("axios");
axios.get.mockImplementation(() =>
  Promise.resolve({ statusCode: 200, body: "sample" })
);

describe("コードの呼び出し", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(SampleFunctions);
  });

  it("axios.getを呼び出す。", () => {
    wrapper.find("#sampleButton").trigger("click");

    expect(axios.get.mock.calls.length).toBe(1);
  });

  it("引数を確認する。", () => {
    wrapper.find("#sampleButton").trigger("click");

    expect(axios.get.mock.calls[0].length).toBe(1);
    expect(axios.get.mock.calls[0][0]).toBe(
      "http://localhost:9000/.netlify/functions/sample"
    );
  });
});
