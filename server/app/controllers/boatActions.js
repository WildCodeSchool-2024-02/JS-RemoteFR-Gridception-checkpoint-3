const tables = require("../../database/tables");

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
const update = async (req, res, next) => {
  try{
  const boatId = await tables.boat.update(req.params.id);
  
  res.json(boatId);
}
  catch (error) {
    next(error)

  }
  
};

module.exports = {
  browse,update
};
