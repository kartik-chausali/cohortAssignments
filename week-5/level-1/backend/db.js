const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://tempodummy12:cbasN1EcC5pihCme@cluster0.ryhbgab.mongodb.net/')

const cardSchema = new mongoose.Schema({
    name:String,
    description:String,
    int1:String,
    int2:String,
    int3:String,
    linkedinURL:String,
    twitterURL:String, 
})

const card = new mongoose.model('card', cardSchema);

module.exports={
    card:card,
}