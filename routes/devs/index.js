const {Router} = require('express')
const router = Router()
const getDevInfo = require('./getInfo.route')

router.get('/', (req, res)=>{
  const details = getDevInfo()
  res.json(details)
})

module.exports = router