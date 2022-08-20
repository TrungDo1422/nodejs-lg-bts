const Popular = require('../app/model/popular');

module.exports = {
  get_popular: async (req, res) => {
    try {
      const popular = await Popular.collection.find().toArray();
      res.status(200).json({
        popular: popular,
      });
    } catch (error) {
      return res.json({ error: error });
    }
  },
  post_create: async (req, res) => {
    const newPopular = new Popular({
      title: req.body.title,
      popular: req.body.popular,
      imgUrl: req.body.imgUrl,
      content: req.body.content,
    });
    try {
      const savePopular = await newPopular.save();
      res.status(201).json({
        popular: savePopular,
      });
    } catch (error) {
      res.status(500).json({
        error: error,
      });
    }
  },
  update_popular: async (req, res) => {
    try {
      const id = req.params.id;
      const updatePopular = await Popular.findOneAndUpdate(
        { _id: id },
        req.body,
        {
          new: true,
        }
      );
      res.status(200).json({
        updatePopular,
      });
    } catch (error) {
      return res.status(500).json({
        error: error,
      });
    }
  },
  delete_popular: async (req, res) => {
    try {
      const id = req.params.id;
      const popular = await Popular.findOneAndDelete({ id }, { new: true });
      if (popular.deletedCount === 0) {
        return res.status(404).json();
      } else {
        return res.status(200).json(popular);
      }
    } catch (error) {
      return res.status(500).json({ error: error });
    }
  },
};
