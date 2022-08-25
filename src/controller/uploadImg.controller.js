const UploadImg = require('../app/model/uploadImg');

module.exports = {
  get_uploadImg: async (req, res) => {
    try {
      const uploadImg = await UploadImg.collection.find().toArray();
      res.status(200).json({
        uploadImg: uploadImg,
      });
    } catch (error) {
      return res.json({ error: error });
    }
  },
  post_create: async (req, res) => {
    const newUploadImg = new UploadImg({
      uploadImg: req.body.uploadImg,
    });
    try {
      const saveUploadImg = await newUploadImg.save();
      res.status(201).json({
        uploadImg: saveUploadImg,
      });
    } catch (error) {
      res.status(500).json({
        error: error,
      });
    }
  },
  update_uploadImg: async (req, res) => {
    try {
      const id = req.params.id;
      const updateUploadImg = await UploadImg.findByIdAndUpdate(
        { _id: id },
        req.body,
        {
          new: true,
        }
      );
      res.status(200).json({
        updateUploadImg,
      });
    } catch (error) {
      return res.status(500).json({
        error: error,
      });
    }
  },
  delete_uploadImg: async (req, res) => {
    try {
      const id = req.params.id;
      const uploadImg = await UploadImg.findByIdAndDelete(
        { _id: id },
        { new: true }
      );
      if (uploadImg.deletedCount === 0) {
        return res.status(404).json();
      } else {
        return res.status(200).json(uploadImg);
      }
    } catch (error) {
      return res.status(500).json({ error: error });
    }
  },
};
