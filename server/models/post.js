const mongoose = require('mongoose');

const { Schema } = mongoose;

const postSchema = new Schema({
    title: {
        type: String,
        required: true },
    link: String,
    text: String,
    isDeleted: { type: Boolean, default: false },
    createdAt: { type: Date, default: Date.now },
    _creator: { type: Schema.ObjectId, ref: 'User'},
    voteAmount: { type: Number, default: 0},
    voters: [{ type: Schema.ObjectId, ref: 'User' }],
    comments: [ { type: Schema.ObjectId, ref: 'Comment' } ]
});


const Post = mongoose.model('Post', postSchema);
module.exports = Post;