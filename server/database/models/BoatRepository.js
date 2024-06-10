const AbstractRepository = require("./AbstractRepository");

class BoatRepository extends AbstractRepository {
  constructor() {
    super({ table: "boat" });
  }

  // The Rs of CRUD - Read operations
  async readAll() {
    // Execute the SQL SELECT query to retrieve all boats from the "boat" table
    const [rows] = await this.database.query(`
          SELECT 
            boat.id,
             boat.coord_x,
              boat.coord_y,
               boat.name,
                tile.type,
                 tile.has_treasure
          FROM 
            ${this.table} 
          INNER JOIN 
          tile
          ON
          boat.coord_x = tile.coord_x 
          AND
          boat.coord_y = tile.coord_y 
        `);

    // Return the array of boats
    return rows;
  }

  // The U of CRUD - Update operation
  async update(boat) {
    const [result] = await this.database.query(
      `update boat set coord_x=?, coord_y=? where id=?`,
      [boat.coord_x, boat.coord_y, boat.id]
    );
    // Return how many rows were affected
    return result.affectedRows;
  }
}

module.exports = BoatRepository;
