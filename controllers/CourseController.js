const Course = require('../models/Course');

// @desc Create new Course
// @route POST /api/course
// @access PUBLIC

//user: req.user.id

const createNewCourse = async (req, res)=> {
    //1. patikrinimai
    //2 insert funkcija, mongoose metodas, ka paimu is req.body ir ka idedu i mongoDB
    //3. aprasyti res, kai gerai sekasi, ir kai ne ka sekasi
    
    if(!req.body.name) res.status(404).send("Not Found");
    
    const course = new Course({
        name: req.body.name,
        description: req.body.description,
        author: req.body.author

    });

    const result = await course.save();
    res.status(200).send(result);
    
    }
    module.exports = {
        createNewCourse
    }