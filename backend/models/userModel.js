const mongoose = require('mongoose');
const joi = require('joi');
const jwt = require('jsonwebtoken');
const passwordComplexity = require('joi-password-complexity');

const Schema = mongoose.Schema

const userSchema = new Schema({
    name: {
        type: String,
        default: "user_name"
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    img: {
        type: String,
        default: ""
    }  
});

userSchema.methods.generateAuthToken = function () {
    console.log("generateAuthToken")
    const token = jwt.sign(
        { _id: this._id,name: this.name,isAdmin: this.isAdmin},
        process.env.SECRET,
        { expiresIn: '3d'}
    );
    return token;
};

const validate = (voluser) => {
    console.log("validate")
    const schema = joi.object({
        name: joi.string().min(3).max(20),
        email: joi.string().email().required(),
        password: passwordComplexity().required(),
        img: joi.string(),
    })
    return schema.validate(voluser);
};

const User = mongoose.model('voluser',userSchema);

module.exports = {User,validate};