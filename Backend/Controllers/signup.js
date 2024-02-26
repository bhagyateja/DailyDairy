const userModel = require ('../Models/model.js')

module.exports.signup= (req,res)=>{
  console.log(req.body);
  
  const newUser = new userModel (
    {email: req.body.email,
    password: req.body.password
})

    newUser.save().then(()=>{
        res.send({code:200, message:"signup sucessfully"})
    }).catch((err)=>{
        res.send({code:500, message:"Signup Err"})
    })
  res.send('sucess')
};