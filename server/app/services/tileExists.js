const tables = require("../../database/tables");

/*
const tileExists = async (req, res, next) => {
    const { coordX, coordY} = req.body;
    if ( coordX < 0 || coordX >= 11 || coordY < 0 || coordY >= 5){
        next();
    } else {
        res.sendStatus(422)
    }
    next();
} */


// CORRECTION EN VERSION DYNAMIQUE

const tileExists = async (req, res, next) => {
    try {
      const tiles = await tables.tile.readByCoordinates(
        req.body.coord_x,
        req.body.coord_y
      );
  
      if (tiles.length !== 0) {
        next();
      } else {
        res.sendStatus(422);
      }
    } catch (err) {
      next(err);
    }
  };
    
    module.exports = tileExists;