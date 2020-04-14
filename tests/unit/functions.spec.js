import { shallowMount } from "@vue/test-utils";
import axios from "axios";
import SampleFunctions from "@/components/SampleFunctions.vue";

describe("SampleFunctions.vue", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(SampleFunctions);
  });
  it("vueコンポーネントである。", () => {
    expect(wrapper.isVueInstance()).toBeTruthy();
  });

  it("ラベル(サンプルのラベル)が正しい。", () => {
    expect(wrapper.find("#sampleButton").text()).toBe("functionsを呼び出す");
  });

  it("buttonにラベルにバインドされた変数が正しい。", () => {
    expect(wrapper.vm.sampleLabel).toBe("functionsを呼び出す");
  });

  it("クリックするとonClickが呼び出される。", () => {
    const onClick = jest.fn();
    wrapper.setMethods({ onClick });
    wrapper.find("#sampleButton").trigger("click");
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  describe("テキストを表示する領域", () => {
    it("ラベル(メッセージを表示する場所)が正しい。", () => {
      expect(wrapper.find("#sampleText").text()).toBe(
        "メッセージを表示する場所"
      );
    });

    it("ラベルの初期値を割り当てられた変数で確認する。", () => {
      expect(wrapper.vm.sampleText).toBe("メッセージを表示する場所");
    });

    it("テキストを変更した結果を変数で確認する。", () => {
      wrapper.setData({ sampleText: "メッセージを変更した" });
      expect(wrapper.vm.sampleText).toBe("メッセージを変更した");
    });
  });

  describe("Netlify functions", () => {
    it("ステータスコードとデータを確認する。", done => {
      axios
        .get("/.netlify/functions/sample")
        .then(response => {
          expect(response.status).toBe(200);
          expect(response.data).toBe("サンプル");
          done();
        })
        .catch(() => {
          expect(false).toBeTruthy();
          done();
        });
    });
  });
});
