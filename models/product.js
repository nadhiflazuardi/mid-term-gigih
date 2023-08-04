const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  videoID: { type: mongoose.Schema.Types.ObjectId, ref: 'Video', required: true },
  link: { type: String, required: true },
  title: { type: String, required: true },
  price: { type: Number, required: true },
});

module.exports = mongoose.model('Product', productSchema);
