import besitzerdb from "$lib/besitzerdb.js";
import { redirect } from "@sveltejs/kit";

export async function load({ params }) {
  const besitzer = await besitzerdb.getBesitzerById(params.besitzer_id);

  if (!besitzer) {
    return {
      status: 404,
      error: new Error("Besitzer nicht gefunden"),
    };
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

    throw redirect(303, "/besitzer/");
  },
};
