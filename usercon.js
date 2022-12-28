
const postuser=async (res,req)=>{
    const postdata= req.body 
    if(postdata>1){
        const data=await User.bulkcreate(postdata)
        console.log("All users:", JSON.stringify(postuser));
    }
    else{
    
    const data=await User.create(postdata)
    res.status(200).json({data:data})

}

}
const adduser =async (res,req)=>{
    const adduser= req.body 
    if(postdata>1){
        const data=await User.create(adduser)
        console.log("All users:", JSON.stringify(adduser));
    }
    else{
    
    const data=await User.update(adduser)
    res.status(200).json({data:data})
    }}
module.exports=adduser

