
const Comms = require("../models/Comment.model")

module.exports.commentController = {

    addComment: (req, res) => {
        Comms.create({
            name: req.body.name,
            text: req.body.text,
            onNews: req.body.onNews
        }).then((comms) => {
            res.json(comms)
        })
    },

    getCoomms: (req, res) => {
        Comms.find().then((comms) => {
            res.json(comms)
        })
    },

    deleteCommsById: (req, res) => {
        Comms.findByIdAndDelete(req.params.id).then(() => {
            res.json('Комментарий удален')
        })
    },

    getCommsByNewsCats: (req, res) => {
        Comms.find( { news: req.params.newsId}).then((comms) => {
            res.json(comms)
        })
    }
};
