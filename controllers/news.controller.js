const News = require("../models/News.model")

module.exports.newsController = {

    addNews: (req, res) => {
        News.create({
            title: req.body.title,
            text: req.body.text,
            category: req.body.category
        }).then((news) => {
            res.json(news)
        })
    },

    changeNews: (req, res) => {
        News.findByIdAndUpdate(req.params.id, { title: req.body.title }, {new: true}).then((news) => {
            res.json(news)
        })
    },

    getNews: (req, res) => {
        
        News.find().then((news) => {
            res.json(news)
        })
    },

    deleteNewsById: (req, res) => {
        News.findByIdAndDelete(req.params.id).then(() => {
            res.json('Новость удалена')
        })
    },

    getNewsById: (req, res) => {
        News.findById(req.params.id).then((news) => {
            res.json(news)
        })
    },

    getNewsByCats: (req, res) => {
        News.find({category: req.params.categoryId}).then((news) => {
            res.json(news)
        })
    }

   


}