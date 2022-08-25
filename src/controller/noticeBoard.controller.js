const Notice = require('../app/model/noticeBoard');

module.exports = {
  get_notice: async (req, res) => {
    try {
      const notice = await Notice.collection.find().toArray();
      res.status(200).json({
        notice: notice,
      });
    } catch (error) {
      return res.json({ error: error });
    }
  },
  post_create: async (req, res) => {
    const newNotice = new Notice({
      stt: req.body.stt,
      description: req.body.description,
    });
    try {
      const saveNotice = await newNotice.save();
      res.status(201).json({
        notice: saveNotice,
      });
    } catch (error) {
      res.status(500).json({
        error: error,
      });
    }
  },
  update_notice: async (req, res) => {
    try {
      const id = req.params.id;
      const updateNotice = await Notice.findByIdAndUpdate(
        { _id: id },
        req.body,
        { new: true }
      );
      res.status(200).json({
        updateNotice,
      });
    } catch (error) {
      return res.status(500).json({
        error: error,
      });
    }
  },
  delete_notice: async (req, res) => {
    try {
      const id = req.params.id;
      const notice = await Notice.findByIdAndDelete({ _id: id }, { new: true });
      if (notice.deletedCount === 0) {
        return res.status(404).json();
      } else {
        return res.status(200).json(notice);
      }
    } catch (error) {
      return res.status(500).json({ error: error });
    }
  },
};
