/**
 * @jest-environment node
 */

import axios from "axios";

describe("Netlify functions", () => {
  it("ステータスコードとデータを確認する。", done => {
    axios
      .get("http://localhost:9000/.netlify/functions/sample")
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
