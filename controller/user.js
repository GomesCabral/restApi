const User = require('../model/User');
const bcrypt = require('bcryptjs');


exports.createUser = async (req, res)=>{
    try{
        //req.body.password = await bcrypt.hash(req.body.password, 8);
        const user = new User(req.body);
        await user.save();

        return res.status(201).json({success: true, user});
    }
    catch(e){
        return res.status(400).json({success: false, message: e.message});
    }
}


exports.fetchAllUsers = async (req, res)=>{
    const users = await User.find();
    return res.json({success: true, users});
}


exports.fetchSingleUser = async (req, res)=>{
    const user = await User.findById(req.params.id);
    return res.json({success: true, user});
}


exports.updateUser = async (req, res)=>{
    try{
        const user = await User.findById(req.params.id, req.body);
        const keys = Object.keys(req.body);

        for(let key of keys){
            user[key] = req.body[key];
        }

        await user.save();

        if(!user){
            return res.status(404).json({
                success: false,
                message: "user not found"
            });
        }
        return res.json({success: true, user});
    }
    catch(e){
        return res.status(400).json({
            success: false,
            message: e.message
        });
    }
}


exports.deleteUser =  async (req, res)=>{
    const user = await User.findByIdAndDelete(req.params.id);
    if(!user){
        return res.status(404).json({
            success: false,
            message: 'user not found'
        });
    }
    return res.json({success: true, user});
}


exports.login = async(req, res)=>{
    const {email, password} = req.body;
    const user = await User.findOne({email});

    if(!user){
        return res.status(401).json({
            success: false,
            message: "Invalid email"
        });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if(!isMatch){
        return res.status(401).json({
            success: false,
            message: "Invalid Password"
        });
    }

    return res.status(200).json({
        success: true,
        user
    });
}