const Navbar = require('../app/model/navbar');

module.exports = {
  get_navbar: async (req, res) => {
    try {
      const navbar = await Navbar.collection.find().toArray();
      res.status(200).json({
        navbar: navbar,
      });
    } catch (error) {
      return res.json({ error: error });
    }
  },
  post_create: async (req, res) => {
    const newNavbar = new Navbar({
      logoUrl: req.body.logoUrl,
      content: req.body.content,
      map: req.body.map,
    });
    try {
      const saveNavbar = await newNavbar.save();
      res.status(201).json({
        navbar: saveNavbar,
      });
    } catch (error) {
      res.status(500).json({
        error: error,
      });
    }
  },
  update_navbar: async (req, res) => {
    try {
      const id = req.params.id;
      const updateNavbar = await Navbar.findByIdAndUpdate(
        { _id: id },
        req.body,
        {
          new: true,
        }
      );
      res.status(200).json({
        updateNavbar,
      });
    } catch (error) {
      return res.status(500).json({
        error: error,
      });
    }
  },
  delete_navbar: async (req, res) => {
    try {
      const id = req.params.id;
      const navbar = await Navbar.findByIdAndDelete({ _id: id }, { new: true });
      if (navbar.deletedCount === 0) {
        return res.status(404).json();
      } else {
        return res.status(200).json(navbar);
      }
    } catch (error) {
      return res.status(500).json({ error: error });
    }
  },
};
