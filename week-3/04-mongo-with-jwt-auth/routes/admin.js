const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const {Admin , User, Course} = require('../db/index')
const jwt = require('jsonwebtoken');
const jwtpassword = "123"
// Admin Routes
router.post('/signup',async (req, res) => {
    // Implement admin signup logic
    const {username, password} = req.body;
    await Admin.create({
        username:username,
        password:password,
    })
    res.json({mssg:"Admin created successfully"});
});

router.post('/signin', async (req, res) => {
    // Implement admin signup logic
    const {username, password} = req.body;
    const user = await User.find({
        username,
        password
    })
    if(user){
        const token = jwt.sign({username},jwtpassword );
        res.json({
                token:token,
            })
    }else{
        res.status(403).json({mssg:"Incorrect email and pass"})
    }
   
});

router.post('/courses', adminMiddleware, async(req, res) => {
    // Implement course creation logic
    const{title, description, price, imageLink} = req.body;
    const newCourse = await Course.create({
        title:title,
        description:description,
        price:price,
        imageLink:imageLink,
    })
    res.json({mssg:"Course creatd successfully", courseId: newCourse._id})
});

router.get('/courses', adminMiddleware, (req, res) => {
    // Implement fetching all courses logic
    const response = Course.findOne({});
    res.json({
        courses:response,
    })
});

module.exports = router;