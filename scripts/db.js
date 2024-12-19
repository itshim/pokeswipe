import PG from "pg";

// Create a pool of connections to the database
const pool = new PG.Pool({
  host: process.env.POSTGRES_HOST,
  database: process.env.POSTGRES_DATABASE,
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  port: parseInt(process.env.POSTGRES_PORT || "5432"),
});

export const query = async (text, params = () => {}) => {
  const res = await pool.query(text, params);
  return res;
};
