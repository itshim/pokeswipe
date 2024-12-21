import { sql } from "@vercel/postgres"

export default async function getAllLike() {
    return await sql`
        SELECT DISTINCT(pokeId) as pokeId from actions
    `
}

