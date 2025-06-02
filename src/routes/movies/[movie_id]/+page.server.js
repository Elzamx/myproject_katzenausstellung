import db from "$lib/db.js";
import { redirect } from "@sveltejs/kit";

export async function load({ params }) {
  return {
    katze: await db.getKatzeById(params.movie_id),
  };
}

export const actions = {
  delete: async ({ request }) => {
    const data = await request.formData();

    await db.deleteKatze(data.get("id"));
    redirect(303, "/movies");
  },
};
