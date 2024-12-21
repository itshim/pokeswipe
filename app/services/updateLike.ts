import { sql } from "@vercel/postgres";

export default async function updateLike(
  id: string,
  type: "like" | "superlike" | "dislike"
): Promise<void> {
  await sql`
        INSERT INTO actions (pokeId, value)
        VALUES (${id}, ${type})
    `;
}
