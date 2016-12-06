console.log('Loading event');

exports.handle = function(event, context, callback) {
  console.log('event', event);
  console.log('context', context);
  console.log('"Hello":"World"');

  var resp = {
      "statusCode": 200,
      "headers": {},
      "body": "hello api gateway"
  }


  callback(null, resp);  // SUCCESS with message
};
