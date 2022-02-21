const UserSchema= require("../models/auth")
const bcrypt= require("bcrypt")
const jwt= require('jsonwebtoken')
exports.Register= async (req,res) => {

    const {email,password}= req.body
    try {
        
        const user = new UserSchema(req.body)
    
        const found = await UserSchema.findOne({email})
        if (found)  {return res.status(400).send({errors: [{msg:"user already exists"}]})}
    
        // crypt l password 
        const salt =10
    
        const hashedpassword= await bcrypt.hash(password, salt)
          user.password= hashedpassword
    
          //token 
    const payload ={id: user._id  }
    const token = jwt.sign(payload, process.env.SecretOrKey )
    
       await  user.save()
    
       res.status(200).send({msg:'registered successfully', user, token})
    
    } catch (error) {
        res.status(500).send({errors: [{msg:"could not register"}]})
    }
    
    
    } 


    exports.Login= async (req,res)=>{

        const {email,password}=req.body
            try {
        
                const user= await UserSchema.findOne({email})
                if (!user)  {return res.status(400).send({errors: [{msg:'bad credentials'}]})}
        
                const match = await bcrypt.compare(password, user.password)
                if (!match) {return   res.status(400).send({errors: [{msg:'bad credentials'}]}) }
        
        
                const payload = {id: user._id}
        const token =jwt.sign(payload, process.env.SecretOrKey)   
        res.status(200).send({msg:'login successfully', user, token })      
            } catch (error) {
                res.status(500).send({errors: [{msg:"could not login"}]})
            }
        }