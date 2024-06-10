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

const edit = async (req, res, next) => {
  const boats = { ...req.body, id: req.params.id };

  try {
    await tables.boat.update(boats);
    res.sendStatus(204);
  } catch (err){
    next(err);
   }
};

module.exports = {
  browse,
  edit,
};

// npm run test step3 : créer une route PUT /api/boats/:id pour mettre à jour un bateau de la base de données.
// Ta route devra renvoyer un statut 204 si la mise à jour a réussi.
// Dans ton controller, tu peux accéder avec le paramètre req à :
// l'id du bateau (req.params.id),
// ses coordonnées X et Y (req.body.coord_x et req.body.coord_y).
