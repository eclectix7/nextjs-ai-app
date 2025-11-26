import { z } from "zod";

export const pokemonSchema = z.object({
  name: z.string(),
  abilities: z.array(z.string()),
});

// teh ui is expecting an array of pokemon
export const pokemonUISchema = z.array(pokemonSchema);