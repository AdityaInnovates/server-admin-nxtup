var events = require("../models/eventsModel");

const addFormController = async (req, res) => {
  try {
    var { id, Form } = req.body;
    // Form.
    var dbres = await events.findByIdAndUpdate(
      id,
      { Form: Form },
      { new: true }
    );
    res.send({ status: true });
  } catch (error) {
    console.log(error);
    res.send({ status: false });
  }
};

module.exports = addFormController;
