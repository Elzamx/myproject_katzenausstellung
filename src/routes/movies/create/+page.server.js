import db from "$lib/db.js";

export const actions = {
  create: async ({ request }) => {
    const data = await request.formData();
    let katze = {
      name: data.get("name"),
      rasse: data.get("rasse"),
      alter: data.get("alter"),
      geschlecht: data.get("geschlecht"),
    };
    await db.createKatzenaustellung(Katzenausstellung);
    return { success: true };
  },
};
