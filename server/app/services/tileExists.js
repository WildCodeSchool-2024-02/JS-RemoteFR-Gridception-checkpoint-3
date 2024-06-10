const tileExists = (req, res, next) => {
    const { coordX, coordY} = req.body;
    if ( coordX < 0 || coordX >= 11 || coordY < 0 || coordY >= 5){
        next();
    } else {
        res.sendStatus(422)
    }
}


module.exports = tileExists;



// npm run test step4 : créer un middleware dans server/app/services/tileExists.js 
// pour tester si une tuile avec les coordonnées req.body.coord_x et req.body.coord_y 
// existe ou non dans la base de données.
// Pour cette étape, idéalement tu devrais utiliser tables.tile pour trouver des tuiles
// à partir de leurs coordonnées (tu devras ajouter une nouvelle méthode readByCoordinates à TileRepository.js).
// Si tu as des difficultés à utiliser TileRepository, tu peux t'en passer en 
// vérifiant que la coordonnée X est comprise entre 0 et 11 (inclus), 
// et que la coordonnée Y est comprise entre 0 et 5 (inclus).
// Si les coordonnées sont valides, passe au suivant. Sinon, répond avec un statut 422.