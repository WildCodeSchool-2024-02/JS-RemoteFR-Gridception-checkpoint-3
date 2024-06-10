const tables = require("../../database/tables");
const BoatRepository = require("../../database/models/BoatRepository");

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

const edit = async (req, res, next) => {
  try {
    const { id } = req.params.id;

    const { coordX, coordY } = req.body;

    const boatRepository = new BoatRepository();

    const affectedRows = await boatRepository.update({ id, coordX, coordY });

    if (affectedRows > 0) {
      res.json({ message: "Boat updated successfully" });
    } else {
      res.status(404).json({ message: "Boat not found" });
    }
  } catch (err) {
    next(err);
  }
};

module.exports = {
  browse,
  edit,
};
