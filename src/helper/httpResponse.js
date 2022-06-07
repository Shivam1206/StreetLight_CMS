module.exports.HttpResponse = class HttpResponse {
  constructor(message, data, statusCode = 200) {
    (this.status = true),
      (this.statusCode = statusCode),
      (this.message = message),
      (this.data = data);
  }
};
