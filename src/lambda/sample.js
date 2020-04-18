export function handler(event, context, callback) {
  // console.log(event.headers);
  const data = {
    statusCode: 200,
    body: "sample"
  };
  if (event.headers.host === "localhost:9000") {
    data["headers"] = {
      "Access-Control-Allow-Origin": event.headers.origin
    };
  }
  callback(null, data);
}
