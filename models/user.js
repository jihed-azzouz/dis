const mongoose = require('mongoose')


const userScheme = new mongoose.Schema({
name :{
type : String,
required : true
},

userPhone :{
    type : String,
    required : true

},

regDate: {
type : Date,
required : true,
default : Date.now
}
})

module.exports = mongoose.model('User',userScheme)