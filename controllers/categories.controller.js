
const Cats = require("../models/Category.model")

module.exports.catsController = {

    addCategory: (req, res) => {
        Cats.create({ name: req.body.name }).then((cats) => {
            res.json(cats)
        })
    },

    getAllCats: (req, res) => {
        Cats.find().then((cats) => {
            res.json(cats)
        })
    },

    deleteCatsById: (req, res) => {
        Cats.findByIdAndDelete(req.params.id).then(() => {
            res.json('Категория удалена')
        })
    },

};
