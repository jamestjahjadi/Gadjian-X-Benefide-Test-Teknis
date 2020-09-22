const { Router } = require('express')
const express=require('express')
const router=express.Router()
const {functcontroller} = require('./../controller')

router.post('/reverse', functcontroller.postString)
router.get('/getanswer',functcontroller.selectall)
router.post('/fibonacci',functcontroller.fibonacci)
router.post('/combination',functcontroller.combination)
module.exports=router