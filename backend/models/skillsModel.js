const mongoose = require('mongoose');

const skillsSchema = mongoose.Schema({
   

frontend: {
    type: String,
    unique : true 
},
backend: {
    type: String,
    unique : true 
}, 

},
{
    timestamps: true,
}
)

module.exports = mongoose.model('skills',skillsSchema)