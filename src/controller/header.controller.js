const Header = require('../app/model/header');

module.exports = {
  get_header: async (req, res) => {
    try {
      const header = await Header.collection.find().toArray();
      res.status(200).json({
        header: header,
      });
    } catch (error) {
      return res.status(500).json({ error: error });
    }
  },
  post_create: async (req, res) => {
    const newHeader = new Header({
      logoUrl: req.body.logoUrl,
      header: req.body.header,
      item: req.body.item,
      plus: req.body.plus,
      plusCampus: req.body.plusCampus,
    });
    try {
      const saveHeader = await newHeader.save();
      res.status(201).json({
        header: saveHeader,
      });
    } catch (error) {
      res.status(500).json({
        error: error,
      });
    }
  },
  update_header: async (req, res) => {
    try {
      const id = req.params.id;
      const updateHeader = await Header.findOneAndUpdate(
        { _id: id },
        req.body,
        {
          new: true,
        }
      );
      res.status(200).json({
        updateHeader,
      });
    } catch (error) {
      return res.status(500).json({
        error: error,
      });
    }
  },
  delete_header: async (req, res) => {
    try {
      const id = req.params.id;
      const header = await Header.findOneAndDelete({ id }, { new: true });
      if (header.deletedCount === 0) {
        return res.status(404).json();
      } else {
        return res.status(200).json(header);
      }
    } catch (error) {
      return res.status(500).json({ error: error });
    }
  },
};
