import { shallowMount } from "@vue/test-utils";
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
});
