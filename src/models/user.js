const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcryptjs')

const userSchema= new mongoose.Schema({
    name : {
        type: String,
        required : true,
        trim: true
    },
    email : {
        type : String,
        required : true,
        trim : true,
        lowercase: true,
        validate(value){
            if (!validator.isEmail(value)) {
                throw new Error('Email is invalid')
            }
        }
    },
    password: {
        type : String,
        required: true,
        trim: true,
        minLength :7,
        validate(value){
            if (value.toLowerCase().includes('password')){
                throw new Error('Password must not include password text')
            }
        }
    },
    age : {
        type : Number,
        default: 0,
        validate(value){
            if (value < 0){
                throw new Error('Age must be positive ')
            }
        }
    }
})

userSchema.statics.findByCredntials = async(email, password) => {
    const user= await User.findOne({email })

    if (!user){
        throw new Error('Unable to login')
    }

    const isMatch = await bcrypt.compare(password, user.password)
    if(!isMatch){
        throw new Error('Unable to login')
    }

    return user
}

//hash the plain text password
userSchema.pre('save', async function(next){
    const user = this
    if (user.isModified('password')){
        user.password = await bcrypt.hash(user.password, 8)
    }
    next()
})

const User = mongoose.model('User', userSchema)

module.exports =User