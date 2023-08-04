const mongoose = require('mongoose');

const videoSchema = new mongoose.Schema({
  videoID: { type: String, required: true },
  thumbnailURL: { type: String, required: true },
});

module.exports = mongoose.model('Video', videoSchema);
