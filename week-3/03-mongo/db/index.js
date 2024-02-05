const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb+srv://tempodummy12:p5CRCymuW7uxpXkE@cluster0.a3lwv5g.mongodb.net/test?retryWrites=true&w=majority');

// Define schemas
const AdminSchema = new mongoose.Schema({
    // Schema definition here
    username: String, 
    password: String, 

});

const UserSchema = new mongoose.Schema({
    // Schema definition here
    username: String, 
    password: String, 
});

const CourseSchema = new mongoose.Schema({
    // Schema definition here
    title:String, 
    description:String, 
    price:Number,
    imageLink:String, 
});

const Admin = mongoose.model('Admin', AdminSchema);
const User = mongoose.model('User', UserSchema);
const Course = mongoose.model('Course', CourseSchema);

module.exports = {
    Admin,
    User,
    Course
}