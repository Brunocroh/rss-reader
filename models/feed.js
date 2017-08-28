const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const _schema = {
    title : {type: String},
    description: {type: String}
};

var Feed = new Schema(_schema);

module.exports = Feed;
