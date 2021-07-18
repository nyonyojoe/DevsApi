const logHeaders = (req, res, next)=>{
  console.log(req.headers)
  next()
}

module.exports = logHeaders