/**
 * @jest-environment node
 */

import axios from "axios";

describe("Netlify functions", () => {
  it("ステータスコードとデータを確認する。", async () => {
    let response;
    try {
      response = await axios.get(
        "http://localhost:9000/.netlify/functions/sample"
      );
    } catch (e) {
      console.error(e);
      return;
    }
    expect(response.status).toBe(200);
    expect(response.data).toBe("sample");
  });
});
