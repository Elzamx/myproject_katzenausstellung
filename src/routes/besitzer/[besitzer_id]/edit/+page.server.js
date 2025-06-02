import besitzerdb from "$lib/besitzerdb.js";
import { redirect, error } from "@sveltejs/kit";

export async function load({ params }) {
  const besitzer = await besitzerdb.getBesitzerById(params.besitzer_id);

  if (!besitzer) {
    throw error(404, "Besitzer nicht gefunden");
  }

  return { besitzer };
}

export const actions = {
  update: async ({ request, params }) => {
    const data = await request.formData();

    const updatedBesitzer = {
      _id: params.besitzer_id,
      name: data.get("name"),
      email: data.get("email"),
      phoneNumber: data.get("phoneNumber"),
    };

    await besitzerdb.updateBesitzer(updatedBesitzer);

    throw redirect(303, "/besitzer/" + params.besitzer_id);
  },
};
