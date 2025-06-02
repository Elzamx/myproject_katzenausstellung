import besitzerdb from "$lib/besitzerdb.js";

export async function load() {
  return {
    besitzer: await besitzerdb.getBesitzer()
  };
}
