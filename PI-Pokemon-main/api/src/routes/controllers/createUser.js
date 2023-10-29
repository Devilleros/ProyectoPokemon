const {User} = require("../../db")

 const createUser = async (req , res) => {
    try {
        const {name,email,password} = req.body;
        
        const newUser = await User.create({name,email,password})
        res.status(200).send(newUser);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
};

module.exports = {createUser}