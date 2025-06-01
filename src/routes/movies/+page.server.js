import db from "$lib/db.js";

export async function load() { // stellt einer Svelte-Komponente Daten zur Verfügung
  return {
    katzen: await db.getMovies()
  };
}
