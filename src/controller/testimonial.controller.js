const Testimonial = require('../app/model/testimonial');

module.exports = {
  get_testimonial: async (req, res) => {
    try {
      const testimonial = await Testimonial.collection.find().toArray();
      res.status(200).json({
        testimonial: testimonial,
      });
    } catch (error) {
      return res.json({ error: error });
    }
  },
  post_create: async (req, res) => {
    const newTestimonial = new Testimonial({
      title: req.body.title,
      testimonial: req.body.testimonial,
      content: req.body.content,
      avataUrl: req.body.avataUrl,
      name: req.body.name,
      Plus: req.body.Plus,
    });
    try {
      const saveTestimonial = await newTestimonial.save();
      res.status(201).json({
        testimonial: saveTestimonial,
      });
    } catch (error) {
      res.status(500).json({
        error: error,
      });
    }
  },
  update_testimonial: async (req, res) => {
    try {
      const id = req.params.id;
      const updateTestimonial = await Testimonial.findOneAndUpdate(
        { _id: id },
        req.body,
        {
          new: true,
        }
      );
      res.status(200).json({
        updateTestimonial,
      });
    } catch (error) {
      return res.status(500).json({
        error: error,
      });
    }
  },
  delete_testimonial: async (req, res) => {
    try {
      const id = req.params.id;
      const testimonial = await Testimonial.findOneAndDelete(
        { id },
        { new: true }
      );
      if (testimonial.deletedCount === 0) {
        return res.status(404).json();
      } else {
        return res.status(200).json(testimonial);
      }
    } catch (error) {
      return res.status(500).json({ error: error });
    }
  },
};
