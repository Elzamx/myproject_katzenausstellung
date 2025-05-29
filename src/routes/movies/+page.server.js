import db from "$lib/db.js";

export async function load() {
  return {
    katzen: await db.getMovies()
  };
}
