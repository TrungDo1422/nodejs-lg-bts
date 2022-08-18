

const Banner = require('../app/model/banner');

module.exports = {
  get_banner: async (req, res) => {
    try {
      const banner = await Banner.collection.find().toArray();
      res.status(200).json({
        banner: banner,
      });
    } catch (error) {
      return res.json({ error: error });
    }
  },
  post_create: async (req, res) => {
    const newBanner = new Banner({
      title: req.body.title,
      content: req.body.content,
    });
    try {
      const saveBanner = await newBanner.save();
      res.status(201).json({
        banner: saveBanner,
      });
    } catch (error) {
      res.status(500).json({
        error: error,
      });
    }
  },
  update_banner: async (req, res) => {
    try {
      const id = req.params.id;
      const updateBanner = await Banner.findOneAndUpdate(
        { _id: id },
        req.body,
        { new: true }
      );
      res.status(200).json({
        updateBanner,
      });
    } catch (error) {
      return res.status(500).json({
        error: error,
      });
    }
  },
  delete_banner: async (req, res) => {
    try {
      const id = req.params.id;
      const banner = await Banner.findOneAndDelete({ id }, { new: true });
      if (banner.deletedCount === 0) {
        return res.status(404).json();
      } else {
        return res.status(200).json(banner);
      }
    } catch (error) {
      return res.status(500).json({ error: error });
    }
  },
};
