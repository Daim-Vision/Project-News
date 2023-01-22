const mongoose = require("mongoose");

const commentSchema = mongoose.Schema({
    name: String,
    text: String,
    onNews: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'News'
    },
});

const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;