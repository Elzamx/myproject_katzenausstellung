import { MongoClient, ObjectId } from "mongodb";
import { DB_URI } from "$env/static/private";

const client = new MongoClient(DB_URI);

await client.connect();
const db = client.db("Katzenausstellung"); // select database

// Get all cats
async function getKatzen() {
  let katzen = [];
  try {
    const collection = db.collection("katzen");
    const query = {};

    // Get all objects that match the query
    katzen = await collection.find(query).toArray();
    katzen.forEach((katze) => {
      katze._id = katze._id.toString(); // convert ObjectId to String
    });
  } catch (error) {
    console.log(error);

  }
  return katzen;
}

// Get cat by id - Detailseite Katze einsehen
async function getKatzeById(id) {
  let katze = null;
  try {
    const collection = db.collection("katzen");
    const query = { _id: new ObjectId(id) }; // filter by id
    katze = await collection.findOne(query);

    if (!katze) {
      console.log("Keine Katze mit ID " + id + " gefunden.");
    } else {
      katze._id = katze._id.toString(); // convert ObjectId to String
    }
  } catch (error) {
    console.log(error.message);
  }
  return katze;
}

// Create a new cat
async function createKatze(katze) {
  katze.poster = "/images/placeholder.png"; // default poster
  try {
    const collection = db.collection("katzen");
    const result = await collection.insertOne(katze);
    return result.insertedId.toString(); // convert ObjectId to String
  } catch (error) {
    console.log(error.message);
  }
  return null;
}


// returns: id of the updated cat or null, if cat could not be updated
async function updateKatze(katze) {
  try {
    let id = katze._id;
    delete katze._id; // delete the _id from the object, because the _id cannot be updated
    const collection = db.collection("katzen");
    const query = { _id: new ObjectId(id) }; // filter by id
    const result = await collection.updateOne(query, { $set: katze });

    if (result.matchedCount === 0) {
      console.log("Keine Katze mit ID " + id);
    } else {
      console.log("Katze mit ID " + id + " wurde erfolgreich aktualisiert.");
      return id;
    }
  } catch (error) {

    console.log(error.message);
  }
  return null;
}

// returns: id of the deleted cat or null, if cat could not be deleted
async function deleteKatze(id) {
  try {
    const collection = db.collection("katzen");
    const query = { _id: new ObjectId(id) }; // filter by id
    const result = await collection.deleteOne(query);

    if (result.deletedCount === 0) {
      console.log("No cat with id " + id);
    } else {
      console.log("Cat with id " + id + " has been successfully deleted.");
      return id;
    }
  } catch (error) {
     console.log(error.message);
  }
  return null;
}

// export all functions so that they can be used in other files
export default {
  getKatzen,
  getKatzeById,
  createKatze,
  updateKatze,
  deleteKatze,
};
