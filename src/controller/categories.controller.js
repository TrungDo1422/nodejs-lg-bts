const Categories = require('../app/model/categories');

module.exports = {
  get_categories: async (req, res) => {
    try {
      const categories = await Categories.collection.find().toArray();
      res.status(200).json({
        categories: categories,
      });
    } catch (error) {
      return res.json({ error: error });
    }
  },
  post_create: async (req, res) => {
    const newCategories = new Categories({
      iconUrl: req.body.iconUrl,
      title: req.body.title,
      course: req.body.course,
    });
    try {
      const saveCategories = await newCategories.save();
      res.status(201).json({
        categories: saveCategories,
      });
    } catch (error) {
      res.status(500).json({
        error: error,
      });
    }
  },
  update_categories: async (req, res) => {
    try {
      const id = req.params.id;
      const updateCategories = await Categories.findOneAndUpdate(
        { _id: id },
        req.body,
        {
          new: true,
        }
      );
      res.status(200).json({
        updateCategories,
      });
    } catch (error) {
      return res.status(500).json({
        error: error,
      });
    }
  },
  delete_categories: async (req, res) => {
    try {
      const id = req.params.id;
      const categories = await Categories.findOneAndDelete(
        { id },
        { new: true }
      );
      if (categories.deletedCount === 0) {
        return res.status(404).json();
      } else {
        return res.status(200).json(categories);
      }
    } catch (error) {
      return res.status(500).json({ error: error });
    }
  },
};
