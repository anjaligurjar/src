const jwt= require('jsonwebtoken')
 

exports.loggin= function (req,res,next){
     let token = req.header('auth')
     if (!token) return res.status('access deniied')

     try{
        if(token.startwith('bear')){
            token=token.slice(1,token.length).trimleft();
        }
        const verified= jwt.verified(token, config.security_key)
            if( verified.user_id==2){
             let req_url=req.base_url+req.rout_path
             if(req_url.includes("users/:id") && parseInt(req.params.id) !== verified.id){
                return res.status(401).send("Unauthorized!");
            }
             


     }
     req.user = verified;
     next();
 }
 catch (err) {
     res.status(400).send("Invalid Token");
 }
}

exports.adminOnly = async function (req, res, next) {
 if( req.user.user_type_id === 2 ){
     return res.status(401).send("Access Denied");
 }  
 next();
      
    
}
}