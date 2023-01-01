const mongoose = require('mongoose');

const usersSchema = mongoose.Schema({
   
password: {
    type: String, 
    required: [true,'please add aname']
},
email: {
    type: String,
    required: [true,'please add aname'],
    unique : true 
}, 

},
{
    timestamps: true,
}
)

module.exports = mongoose.model('user', usersSchema)