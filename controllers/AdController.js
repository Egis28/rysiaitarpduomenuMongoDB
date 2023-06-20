const Ad = require('../models/Ad');

// @desc Create new Ad
// @route POST /api/ad
// @access PUBLIC
//user:

const createAd = async (req, res) => {

    if (!req.body.name || !req.body.price || !req.body.user) res.status(404).send("not Found");

    const ad = new Ad({

        name: req.body.name,
        category: req.body.category,
        description: req.body.description,
        price: req.body.price,
        picture: req.body.picture,
        user: req.body.user
    });

    const result = await ad.save();
    res.status(200).send(result);
}

// @desc get ads
// @route GET /api/ads
// @access PUBLIC

const getAdsByUser = async (req, res) => {
    if (!req.body.user) res.status(404).send("not Found");
    const result = await Ad.find({ user: req.body.user });
    res.status(200).send(result)
}

// @desc put ad
// @route PUT /api/ad/:id
// @access PUBLIC

const updateAd = async (req, res) => {
    // if (!req.body.name) res.status(404).send("not Found");
    const result = await Ad.updateOne({
        _id: req.params.id,

    }, {

        $set: {
            name: req.body.name,
            category: req.body.category,
            description: req.body.description,
            price: req.body.price,
            picture: req.body.picture,
        }
    })

    // res.send(result)

    if (result.modifiedCount > 0) {
        res.status(200).send(`${req.body.name} "successfully updated"`)
    } else {
        res.status(200).send("data is the same")
    };
}

// @desc del ad
// @route DEL /api/ad/:id
// @access PUBLIC

const deletAd = async (req, res) => {
    const result = await Ad.findByIdAndRemove(req.params.id);
    (result === null) ? res.status(200).send(`There is no such ad id: '${req.params.id}'`) : res.status(200).send(`Ad ${result} deleted Successfully `)

}

module.exports = {
    createAd,
    getAdsByUser,
    updateAd,
    deletAd

}