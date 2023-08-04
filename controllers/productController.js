const Product = require('../models/product');

exports.getProductList = async (req, res) => {
  const { videoID } = req.query;
  if (!videoID) {
    return res.status(400).json({ message: 'VideoID is required' });
  }

  try {
    const products = await Product.find({ videoID }, 'link title price');
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
};
