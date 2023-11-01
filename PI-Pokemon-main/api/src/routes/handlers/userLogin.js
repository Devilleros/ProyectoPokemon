const axios = require("axios");

const {User} = require("../../db");

const userLogin = async (req , res)=>{
    const {email , password} = req.query;
    try {
        const user = await User.findOne({where: {email: email , password: password}})
        if(user){
            res.status(200).send({access:true});
        }else{
            res.status(401).send("No existe este usuario");
        }
    } catch (error) {
        res.status(400).json({error : error.message});
    }
}

module.exports = {userLogin}