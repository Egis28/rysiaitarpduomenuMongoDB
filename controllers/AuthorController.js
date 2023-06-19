const Author = require("../models/Author");


//@desc Create new Author
//@route POST/api/author
//@access PUBLIC


const createNewAuthor = async (req, res)=> {
//1. patikrinimai
//2 insert funkcija, mongoose metodas, ka paimu is req.body ir ka idedu i mongoDB
//3. aprasyti res, kai gerai sekasi, ir kai ne ka sekasi

if(!req.body.name) res.status(404).send("Not Found");

const author = new Author({
    name: req.body.name,
    bio: req.body.bio,
    website: req.body.website
});
const result = await author.save();
res.status(200).send(result);

}

//@get all Authors
//@ route GET /api/author
//@access PUBLIC

const getAllAuthors = async (req,res) => {
    const result = await Author.find();
    res.send(result);

}
const getAuthorById = async (req,res) => {
    const result = await Author.find({_id: req.params.id});
    res.send(result);

}


module.exports = {
    createNewAuthor,
    getAllAuthors,
    getAuthorById
}
