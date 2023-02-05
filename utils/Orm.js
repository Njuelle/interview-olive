import Db from "./Db";

export class Orm {
  /*
   * Return a boolean validating the existence
   * of a given ID in the given table
   */
  static exist(tableName, id) {
    const res = Db.query(`SELECT * FROM ${tableName} WHERE id = ${id}`);

    return res.length > 0 ? true : false;
  }

  /*
   * Update an existing given row the given value
   * in the given table
   */
  static update(tableName, id, field, value) {
    return Db.query(
      `UPDATE ${tableName}
      SET ${field} = '${value}'
      WHERE id = ${id}`
    );
  }

  /*
   * Create a new row in the given table
   */
  static create(tableName, item) {
    return Db.query(
      `INSERT INTO ${tableName} VALUES ( ${Object.values(item)} )`
    );
  }
}
