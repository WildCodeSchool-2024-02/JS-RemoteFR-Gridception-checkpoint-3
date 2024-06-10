const tileExists = (req, res, next) => {
  const { coord_x: coordX, coord_y: coordY } = req.body;

  if (coordX >= 0 && coordX <= 11 && coordY >= 0 && coordY <= 5) {
    next();
  } else {
    res.sendStatus(422);
  }
};

module.exports = tileExists;
