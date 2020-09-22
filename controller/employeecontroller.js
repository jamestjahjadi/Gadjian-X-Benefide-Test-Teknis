const db= require('./../connection')

module.exports={
    // ======= SELECT EMPLOYEE ======= //
    selectemployee:(req,res)=>{
        var sql='select * from employees'
        db.query(sql,(err,result)=>{
            if(err) res.status(500).send(err)
            res.status(200).send(result)
        })
    },
    // ======= GET SPECIFIC EMPLOYEE ======= //
    selectid:(req,res)=>{
        const {id}= req.params
        var sql=`select * from employees where id=${id}`
        db.query(sql,(err,result)=>{
            if(err) res.status(500).send(err)
            res.status(200).send(result)
        })
    },
    // ======= POST NEW EMPLOYEE ======= //
    postemployee:(req,res)=>{
        var newemployee=req.body
        console.log(newemployee);
        var sql='insert into employees set ?'
        db.query(sql,newemployee,(err,result)=>{
            if(err) res.status(500).send(err)
            var selectsql='select * from employees'
            db.query(selectsql,(err1,result1)=>{
                if(err1) res.status(500).send(err1)
                res.status(201).send(result1)
            })
        })
    },
    // ======= UPDATE EMPLOYEE ======= //
    putemployee:(req,res)=>{
        const {id}=req.params
        const update=req.body
        var sql=`update employees set ? where id=${id}`
        db.query(sql,update,(err,result)=>{
            if(err) res.status(500).send(err)
            var selectsql='select * from employees'
            db.query(selectsql,(err1,result1)=>{
                if(err1) res.status(500).send(err1)
                res.status(200).send(result1)
            })
        })
    },
    // ======= DELETE EMPLOYEE ======= //
    deleteemployee:(req,res)=>{
        const {id}=req.params
        var sql=`delete from employees where id=${id}`
        db.query(sql,(err,result)=>{
            if(err) res.status(500).send(err)
            var selectsql='select * from employees'
            db.query(selectsql,(err1,result1)=>{
                if(err1) res.status(500).send(err1)
                res.status(200).send(result1)
            })
        })
    }
}