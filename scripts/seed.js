import { db } from "@vercel/postgres";

const seedDatabase = async (client) => {
  try {
    console.log("Seeding the database...");

    // Create tables (if not already created)
    await client.sql`
      CREATE TABLE IF NOT EXISTS actions (
        id SERIAL PRIMARY KEY,
        pokeId VARCHAR(100) UNIQUE NOT NULL,
        value VARCHAR(255) UNIQUE NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `;

    console.log("Database has been seeded!");
  } catch (error) {
    console.error("Error seeding the database:", error);
  } finally {
    process.exit();
  }
};

async function main() {
  const client = await db.connect();

  await seedDatabase(client);

  await client.end();
}

main().catch((err) => {
  console.error(
    "An error occurred while attempting to seed the database:",
    err
  );
});
