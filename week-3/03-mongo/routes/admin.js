const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const {Admin, User, Course} = require('../db/index')
const router = Router();

// Admin Routes
router.post('/signup', async(req, res) => {
    // Implement admin signup logic
    const {username, password} = req.body;
    await Admin.create({
        username:username, 
        password:password,
    })
    res.json({mssg:"Admin created successfully"});

});

router.post('/courses', adminMiddleware, async(req, res) => {
    // Implement course creation logic
    const {title, description, price , imageLink,} = req.body;
    await Course.create({
        title:title,
        description:description,
        price:price,
        imageLink:imageLink,
    })
});

router.get('/courses', adminMiddleware, async (req, res) => {
    // Implement fetching all courses logic
    const response = await Course.find({});
    res.json({
        courses:response,
    })
});

module.exports = router;