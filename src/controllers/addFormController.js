import { events } from "../models/eventsModel";

const addFormController = (req, res) => {
  try {
    var { id, Form } = req.body;
    var dbres = events.findByIdAndUpdate(id, { Form }, { new: true });
  } catch (error) {
    res.send({ status: false });
  }
};

export default addFormController;
