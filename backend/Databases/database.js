const dotenv = require('dotenv');
require('dotenv').config()
const mongoose = require('mongoose')
  
let MONGO_URI = process.env.MONGO_URI;
    mongoose
    .connect(MONGO_URI)
    .then(()=> console.log("DB succesfully connected"))
    .catch((error) => {console.log("DB not connected"), console.log(error)})


const userSchema = new mongoose.Schema({
    firstName: {
       type: String,
       required: true,
       maxLength: 10,
    },
    lastName: {
      type: String,
      required: true,
      maxLength: 10
    },
    username: {
        type: String,
        required: true,
        lowercase: true,
        minLength: 6,
        maxLength: 20,
        trim: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minLength: 8,
        maxLength: 10,
    }
});

const accountSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId, // reference to User model
        ref: 'User',
        required: true
    },
    balance: {
        type: Number,
        required: true
    }
});

const User = mongoose.model('User', userSchema);
const Account = mongoose.model('Account', accountSchema);

module.exports = {
    User,
    Account
}