import besitzerdb from "$lib/besitzerdb.js";
import { redirect } from "@sveltejs/kit";

export async function load({ params }) {
  return {
    besitzer: await besitzerdb.getBesitzerById(params.besitzer_id)
  };
}

export const actions = {
  delete: async ({ request }) => {
    const data = await request.formData();
    await besitzerdb.deleteBesitzer(data.get("id"));
    throw redirect(303, "/besitzer");
  }
};
