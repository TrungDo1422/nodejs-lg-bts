const Faq = require('../app/model/faq');

module.exports = {
  get_faq: async (req, res) => {
    try {
      const faq = await Faq.collection.find().toArray();
      res.status(200).json({
        faq: faq,
      });
    } catch (error) {
      return res.json({ error: error });
    }
  },
  post_create: async (req, res) => {
    const newFaq = new Faq({
      title: req.body.title,
      faq: req.body.faq,
      content: req.body.content,
      description: req.body.description,
      linkVideo: req.body.linkVideo,
    });
    try {
      const saveFaq = await newFaq.save();
      res.status(201).json({
        faq: saveFaq,
      });
    } catch (error) {
      res.status(500).json({
        error: error,
      });
    }
  },
  update_faq: async (req, res) => {
    try {
      const id = req.params.id;
      const updateFaq = await Faq.findOneAndUpdate({ _id: id }, req.body, {
        new: true,
      });
      res.status(200).json({
        updateFaq,
      });
    } catch (error) {
      return res.status(500).json({
        error: error,
      });
    }
  },
  delete_faq: async (req, res) => {
    try {
      const id = req.params.id;
      const faq = await Faq.findOneAndDelete({ id }, { new: true });
      if (faq.deletedCount === 0) {
        return res.status(404).json();
      } else {
        return res.status(200).json(faq);
      }
    } catch (error) {
      return res.status(500).json({ error: error });
    }
  },
};
