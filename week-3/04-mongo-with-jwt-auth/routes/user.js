const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const {User, Course} = require('../db/index')
const jwt = require('jsonwebtoken')
const jwtpassword = "123"
// User Routes
router.post('/signup', async(req, res) => {
    // Implement user signup logic
    const {username , password } = req.body;
    await User.create({
        username:username, 
        password:password,
    })
    res.json({mssg:"User created successfully"})
});

router.post('/signin', async(req, res) => {
    // Implement admin signup logic
    const {username , password} =req.body;
    const response = await User.findOne({username})
    if(response){
        const token = jwt.sign({username}, jwtpassword)
        res.json({
            token: token,
        })
    }else{
        res.status(403).json({mssg:"User not registered"})
    }
});

router.get('/courses', async (req, res) => {
    // Implement listing all courses logic
    const response = Course.find({});
    res.json({
        courses: response,
    })
});

router.post('/courses/:courseId', userMiddleware, async(req, res) => {
    // Implement course purchase logic
    const courseId = req.params.courseId
    const username = req.headers.username
    const response = await Course.updateOne({
        username: username, 
    }, 
        {
            "$push":{
                purchasedCourse: courseId
            }
        }
    )

    res.json({mssg:"Course purchased successfully"})
});

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    // Implement fetching purchased courses logic
    const user = await User.find({
        username: req.headers.username, 
    })

    const response = await Course.find({
        "$in":{
            _id: user.purchasedCourse,
        }
    })

    res.json({
        purchasedCourses: response, 
    })
});

module.exports = router