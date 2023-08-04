const Comment = require('../models/comment');

exports.getCommentList = async (req, res) => {
  const { videoID } = req.query;
  if (!videoID) {
    return res.status(400).json({ message: 'VideoID is required' });
  }

  try {
    const comments = await Comment.find({ videoID }, 'username comment timestamp');
    res.json(comments);
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
};

exports.submitComment = async (req, res) => {
  const { videoID, username, comment } = req.body;
  if (!videoID || !username || !comment) {
    return res.status(400).json({ message: 'VideoID, username, and comment are required' });
  }

  try {
    const newComment = await Comment.create({ videoID, username, comment });
    res.json({ success: true, comment: newComment });
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
};
