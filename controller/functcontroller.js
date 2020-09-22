
const db= require('../connection')

module.exports={
     // ======= SELECT STRING ======= //
    selectall:(req,res)=>{
        var sql='select * from answer'
        db.query(sql,(err,result)=>{
            if(err) res.status(500).send(err)
            res.status(200).send(result)
        })
    },
    // ======= REVERSE STRING ======= //
    postString:(req,res)=>{
        const string = req.body.answer
        // REVERSE FUNCTION
        const reverse=(string)=>{
            var x=''
            for(i = (string.length-1)  ; i >= 0  ; i--){
                x+= string[i]
            }
            return ({...req.body,answer:x})
        }
        //INSET QUERY SQL
        var sql='insert into answer set ?'
        db.query(sql,reverse(string),(err,result)=>{
            if(err) res.status(500).send(err)
            var id=result.insertId
            var sql1=`select * from answer where id=${id}`
            db.query(sql1,(err1,result1)=>{
                if(err1) res.status(500).send(err1)
                res.status(200).send(result1)
            })
        })
    },
    // ======= FIBONACCI ======= //
    fibonacci:(req,res)=>{
        const params=req.body.answer
        //FUNCTION FIBONACCI
        const fibo=(params)=>{
            var x=[0,1]
            for(i = 2 ; i < params ; i++){
                x.push(x[i-2] + x[i-1])
            }
            var j=x.toString()
            var y=j.replace(/,/g," ")
            return ({...req.body, answer:y})
        }
        //INSERT QUERY SQL
        var sql='insert into answer set ?'
        db.query(sql,fibo(params),(err,result)=>{
            if(err) res.status(500).send(err)
            var id=result.insertId
            var sql1=`select * from answer where id=${id}`
            db.query(sql1,(err1,result1)=>{
                if(err1) res.status(500).send(err1)
                res.status(200).send(result1)
            })
        })
    },
    // ======= PERMUTATION & COMBINATION ======= //
    combination:(req,res)=>{
        const n=req.body.n
        const r=req.body.r 
        
        const combi=(n,r)=>{
            if(r>n){
                var x = r
                var y = n
            }else{
                var x = n
                var y = r
            }
         // TOP EQUATION n!
        var top=1
        for(i = 1 ; i <= x ; i++){
        top*=i 
        console.log(top);
   }
        // BOTTOM EQUATION r!
        var r1=1
        for(j = 1 ; j <= y ; j++){
        r1*=j
        
   }
   // BRACKET EQUATION (n-r)!
        var bracket=x-y
        var total=1
        for(k = 1 ; k <= bracket ; k++){
        total*=k
       
   }
   // END RESULT 
        var result= top / (r1*total)
        return ({...req.body, result:result , n , r})
        }
        var sql='insert into combination set ?'
        db.query(sql,combi(n,r),(err,result)=>{
            if(err) res.status(500).send(err)
            res.status(200).send(result)
        })
    }
}