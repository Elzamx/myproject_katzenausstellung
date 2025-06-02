import db from "$lib/db.js";
import { redirect, error } from "@sveltejs/kit";

export async function load({ params }) {
  const katze = await db.getMovie(params.movie_id);

  if (!katze) {
    throw error(404, "Katze nicht gefunden");
  }

  return { katze };
}

export const actions = {
  update: async ({ request, params }) => {
    const data = await request.formData();

    const updatedKatze = {
      _id: params.movie_id,
      name: data.get("name"),
      rasse: data.get("rasse"),
      alter: data.get("alter"),
      geschlecht: data.get("geschlecht"),
      poster: data.get("poster"),
    };

    await db.updateMovie(updatedKatze);

    throw redirect(303, "/movies/" + params.movie_id);
  },
};