var AWS = require('aws-sdk')

console.log('starting function')



exports.handle = function(e, ctx, cb) {

  var handler = function(err, resp) {
    if (err) {
       console.log("Error", err);
       cb(err);
    } else {
       cb(null, resp);
     }
   };

  console.log('e: ', JSON.stringify(e, null, 2))
  console.log('ctx: ', JSON.stringify(ctx, null, 2))

  var s3 = new AWS.S3({apiVersion: '2006-03-01'});

  //s3.listBuckets(handler);
  //s3.getObject({Bucket: 'brian.pfeil', Key: 'temp/a.txt'}, handler);

  s3.putObject({Bucket: 'brian.pfeil', Key: 'temp/b.txt', Body: 'hello world'}, handler);

}
