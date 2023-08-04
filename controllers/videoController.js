const Video = require('../models/video');

exports.getVideoList = async (req, res) => {
  try {
    const videos = await Video.find({}, 'videoID thumbnailURL');
    res.json(videos);
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
};
