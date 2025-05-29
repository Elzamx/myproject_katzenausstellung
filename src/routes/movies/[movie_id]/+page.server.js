import db from "$lib/db.js";
import { redirect } from "@sveltejs/kit";

export async function load({ params }) {
  return {
    katze: await db.getMovie(params.katze_id),
  };
}

export const actions = {
  delete: async ({ request }) => {
    const data = await request.formData();

    await db.deleteMovie(data.get("id"));
    redirect(303, "/movies");
  },
};
