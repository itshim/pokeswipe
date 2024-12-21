import axios from "axios";
import getAllLike from "./getAllLike";
import TPokemon from "../interfaces/Pokemon";

function getRandomInRangeExcluding(
  min = 0,
  max = 1000,
  excludedNumbers: number[]
) {
  let randomValue;
  if (excludedNumbers.length === max - min) return -1;

  // Generate a random number until it's not in the excludedNumbers array
  do {
    randomValue = Math.floor(Math.random() * (max - min + 1)) + min;
  } while (excludedNumbers.includes(randomValue));

  return randomValue;
}

export async function getPokemon(id: number) {
  return axios<TPokemon>({
    url: `https://pokeapi.co/api/v2/pokemon/${id}`,
    method: "GET",
  }).then((r) => r.data);
}

export async function getRandomId(): Promise<number> {
  const alreadyExists = (await getAllLike()).rows.map((v) =>
    parseInt(v.pokeId)
  );
  return getRandomInRangeExcluding(0, 1000, alreadyExists);
}

export default async function getRandomPokemon(): Promise<
  TPokemon | undefined
> {
  try {
    const id = await getRandomId();
    if (id === -1) return undefined;
    return getPokemon(id);
  } catch (e) {
    console.warn((e as Error).message);
    return undefined;
  }
}
