const tables = require("../../database/tables");

const browse = async (req, res, next) => {
  try {
    const boats = await tables.boat.readAll();

    res.json(boats);
  } catch (err) {
    next(err);
  }
};

const edit = async (req, res, next) => {
  // Extract the category data from the request body and params
  const boat = { ...req.body, id: req.params.id };

  try {
    // Update the category in the database
    await tables.boat.update(boat);

    // Respond with HTTP 204 (No Content)
    res.sendStatus(204);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

module.exports = {
  browse,
  edit,
};
