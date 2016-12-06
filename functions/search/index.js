var request = require('request')
console.log('starting function')
exports.handle = function(e, ctx, cb) {
  console.log('e: ', JSON.stringify(e, null, 2))
  console.log('ctx: ', JSON.stringify(ctx, null, 2))

  request('https://www.google.com/?q=' + e.q, function(err, resp, body) {
    if (err) {
      return console.error(err)
    }
    cb(null, { body: body })
  })

}
