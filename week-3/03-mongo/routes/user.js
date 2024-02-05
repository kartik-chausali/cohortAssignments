const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const{User, Course} = require('../db/index')
// User Routes 
router.post('/signup', async(req, res) => {
    // Implement user signup logic
    const{username , password} = req.body;
    await User.create({
        username:username,
        password:password,
    })

    res.json({mssg:"User created successfully"});
}); 

router.get('/courses', (req, res) => {
    // Implement listing all courses logic
    const response = Course.find({});
    res.json({
        courses: response,
    })
});

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
    // Implement course purchase logic
    const courseId = req.params.courseId;
    const username = req.headers.username;

    await Course.updateOne({
        username: username,
    }, {
        "$push":{
            purchasedCourses: courseId,
        }
    })

    res.json({msg:"Course purchased successfully"})

});

router.get('/purchasedCourses', userMiddleware,async (req, res) => {
    // Implement fetching purchased courses logic
    const user = await User.findOne({
        username: req.headers.username,
    })

    const purchasedCourses = Course.find({
        _id:{
            "$in": user.purchasedCourses
        }
    })
    res.json({
        courses: courses
    })
});

module.exports = router