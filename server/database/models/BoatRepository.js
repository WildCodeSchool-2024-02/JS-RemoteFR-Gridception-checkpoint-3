const AbstractRepository = require("./AbstractRepository");

class BoatRepository extends AbstractRepository {
  constructor() {
    super({ table: "boat" });
  }

  async readAll() {
    try {
      // Execute the SQL SELECT query to retrieve all boats from the "boat" table
      const [rows] = await this.database.query(`
            SELECT
                boat.id,
                boat.name,
                boat.coord_x,
                boat.coord_y,
                tile.id as tile_id,
                tile.type,
                tile.has_treasure
            FROM 
                ${this.table} AS boat
            LEFT JOIN 
                tile ON boat.coord_x = tile.coord_x AND boat.coord_y = tile.coord_y
        `);

      // Return the array of boats with tile information
      return rows;
    } catch (error) {
      throw new Error(`Error in BoatRepository.readAll: ${error.message}`);
    }
  }

  async update(boat) {
    // Execute the SQL UPDATE query to update a specific category
    const [result] = await this.database.query(
      `update ${this.table} set coord_x=?, coord_y=? where id=?`,
      [boat.coord_x, boat.coord_y, boat.id]
    );

    // Return how many rows were affected
    return result.affectedRows;
  }
}

module.exports = BoatRepository;
