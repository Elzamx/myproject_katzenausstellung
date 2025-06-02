import besitzerdb from "$lib/besitzerdb.js";
import { redirect } from "@sveltejs/kit";

export const actions = {
  create: async ({ request }) => {
    const data = await request.formData();

    let newBesitzer = {
      name: data.get("name"),
      email: data.get("email"),
      phoneNumber: data.get("phoneNumber"),
    };

    await besitzerdb.createBesitzer(newBesitzer);
    return { success: true };
  }
};
