const express=require('express')
const router=express.Router()
const {employeecontroller}= require ('./../controller')

router.post('/employees',employeecontroller.postemployee)
router.get('/employees', employeecontroller.selectemployee)
router.get('/employees /:id', employeecontroller.selectid)
router.put('/employees/:id',employeecontroller.putemployee)
router.delete('/employees/:id',employeecontroller.deleteemployee)
module.exports=router