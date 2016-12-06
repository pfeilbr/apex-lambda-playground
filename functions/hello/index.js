console.log('starting function')
exports.handle = function(e, ctx, cb) {
  console.log('e: ', JSON.stringify(e, null, 2))
  console.log('ctx: ', JSON.stringify(ctx, null, 2))
  cb(null, { hello: 'world' })
}
