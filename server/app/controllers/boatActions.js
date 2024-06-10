const tables = require("../../database/tables");

// The B of BREAD - Browse (Read All) operation
const browse = async (req, res, next) => {
  try {
    // Fetch all boats from the database
    const boats = await tables.boat.readAll();

    // Respond with the boats in JSON format
    res.json(boats);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The E of BREAD - Edit (Update) operation
const edit = async (req, res, next) => {
  // Extract the data from the request body and params
  const boats = { ...req.body, id: req.params.id };

  try {
    await tables.boat.update(boats);
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
