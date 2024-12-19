import { query } from "./db.js";

const seedDatabase = async () => {
  try {
    console.log("Seeding the database...");

    // Create tables (if not already created)
    await query(`
      CREATE TABLE IF NOT EXISTS actions (
        id SERIAL PRIMARY KEY,
        pokeId VARCHAR(100) UNIQUE NOT NULL,
        value VARCHAR(255) UNIQUE NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `);

    console.log("Database has been seeded!");
  } catch (error) {
    console.error("Error seeding the database:", error);
  } finally {
    process.exit();
  }
};

seedDatabase();
