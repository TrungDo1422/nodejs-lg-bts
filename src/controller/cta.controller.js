const Cta = require('../app/model/cta');

module.exports = {
  get_cta: async (req, res) => {
    try {
      const cta = await Cta.collection.find().toArray();
      res.status(200).json({
        cta: cta,
      });
    } catch (error) {
      return res.json({ error: error });
    }
  },
  post_create: async (req, res) => {
    const newCta = new Cta({
      imgUrl: req.body.imgUrl,
      title: req.body.title,
      content: req.body.content,
    });
    try {
      const saveCta = await newCta.save();
      res.status(201).json({
        cta: saveCta,
      });
    } catch (error) {
      res.status(500).json({
        error: error,
      });
    }
  },
  update_cta: async (req, res) => {
    try {
      const id = req.params.id;
      const updateCta = await Cta.findByIdAndUpdate({ _id: id }, req.body, {
        new: true,
      });
      res.status(200).json({
        updateCta,
      });
    } catch (error) {
      return res.status(500).json({
        error: error,
      });
    }
  },
  delete_cta: async (req, res) => {
    try {
      const id = req.params.id;
      const cta = await Cta.findByIdAndDelete({ _id: id }, { new: true });
      if (cta.deletedCount === 0) {
        return res.status(404).json();
      } else {
        return res.status(200).json(cta);
      }
    } catch (error) {
      return res.status(500).json({ error: error });
    }
  },
};
