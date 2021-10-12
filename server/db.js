const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  password: "aSa7yh2d",
  host: "localhost",
  port: 5432,
  database: "perntodo",
});

module.exports = pool;
