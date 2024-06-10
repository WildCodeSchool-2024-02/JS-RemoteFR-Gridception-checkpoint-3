const AbstractRepository = require("./AbstractRepository");

class BoatRepository extends AbstractRepository {
  constructor() {
    super({ table: "boat" });
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all boats from the "boat" table
    const [rows] = await this.database.query(
      `select boat.id, boat.coord_x, boat.coord_y, boat.name, tile.type, tile.has_treasure from ${this.table} inner join tile on boat.coord_x = tile.coord_x and boat.coord_y = tile.coord_y`
    );

    // Return the array of boats
    return rows;
  }

  async update(boat) {
    const [result] = await this.database.query(
      `update boat set coord_x=?, coord_y=? where id=?`,
      [boat.coord_x, boat.coord_y, boat.id]
    );

    return result.affectedRows;
  }
}

module.exports = BoatRepository;
