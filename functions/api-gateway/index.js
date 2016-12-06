
console.log('starting function')
exports.handle = function(e, ctx, cb) {
  console.log('e: ', JSON.stringify(e, null, 2))
  console.log('ctx: ', JSON.stringify(ctx, null, 2))

  // Output Format of a Lambda Function for Proxy Integration
  // see https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-set-up-simple-proxy.html#api-gateway-simple-proxy-for-lambda-output-format
  // see screenshot @ http://static-content-01.s3-website-us-east-1.amazonaws.com/API_Gateway_1DF71074.png
  var resp = {
      "statusCode": 200,
      "headers": {},
      "body": "hello world"
  }

  cb(null, resp)
}
