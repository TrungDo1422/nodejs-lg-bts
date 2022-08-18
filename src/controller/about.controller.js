const About = require('../app/model/about');

module.exports = {
  get_about: async (req, res) => {
    try {
      const about = await About.collection.find().toArray();
      res.status(200).json({
        about: about,
      });
    } catch (error) {
      return res.json({ error: error });
    }
  },
  post_create: async (req, res) => {
    const newAbout = new About({
      title: req.body.title,
      content: req.body.content,
    });
    try {
      const saveAbout = await newAbout.save();
      res.status(201).json({
        about: saveAbout,
      });
    } catch (error) {
      res.status(500).json({
        error: error,
      });
    }
  },
  update_about: async (req, res) => {
    try {
      const id = req.params.id;
      const updateAbout = await About.findOneAndUpdate({ _id: id }, req.body, {
        new: true,
      });
      res.status(200).json({
        updateAbout,
      });
    } catch (error) {
      return res.status(500).json({
        error: error,
      });
    }
  },
  delete_about: async (req, res) => {
    try {
      const id = req.params.id;
      const about = await About.findOneAndDelete({ id }, { new: true });
      if (about.deletedCount === 0) {
        return res.status(404).json();
      } else {
        return res.status(200).json(about);
      }
    } catch (error) {
      return res.status(500).json({ error: error });
    }
  },
};
