import { MongoClient, ObjectId } from "mongodb";
import { DB_URI } from "$env/static/private";

const client = new MongoClient(DB_URI);
await client.connect();
const db = client.db("Katzenausstellung");

//////////////////////////////////////////
// Besitzer
//////////////////////////////////////////

// Get all besitzer
async function getBesitzer() {
    let besitzer = [];
    try {
        const collection = db.collection("besitzer");
        const query = {};
        besitzer = await collection.find(query).toArray();
        besitzer.forEach((b) => { // b für besitzer wie zb katzen für katze
            b._id = b._id.toString();
        });
    } catch (error) {
        console.log(error);
    }
    return besitzer;
}

// Get besitzer by ID
async function getBesitzerById(id) {
    let besitzer = null;
    try {
        const collection = db.collection("besitzer");
        const query = { _id: new ObjectId(id) }; // filter by id
        besitzer = await collection.findOne(query);
        if (besitzer) besitzer._id = besitzer._id.toString();
    } catch (error) {
        console.log(error.message);
    }
    return besitzer;
}

// Create new besitzer
async function createBesitzer(b) {
    try {
        const collection = db.collection("besitzer");
        const result = await collection.insertOne(b);
        return result.insertedId.toString();
    } catch (error) {
        console.log(error.message);
    }
    return null;
}

// Update existing besitzer
async function updateBesitzer(b) {
    try {
        let id = b._id;
        delete b._id;
        const collection = db.collection("besitzer");
        const query = { _id: new ObjectId(id) };
        const result = await collection.updateOne(query, { $set: b });

        if (result.matchedCount === 0) {
            console.log("Kein Besitzer mit ID " + id + " gefunden.");
        } else {
            console.log("Besitzer mit ID " + id + " wurde aktualisiert.");
            return id;
        }
    } catch (error) {
        console.log(error.message);
    }
    return null;
}

// Delete besitzer by ID
async function deleteBesitzer(id) {
    try {
        const collection = db.collection("besitzer");
        const query = { _id: new ObjectId(id) };
        const result = await collection.deleteOne(query);
        if (result.deletedCount === 0) {
            console.log("Kein Besitzer mit ID " + id + " gefunden.");
        } else {
            console.log("Besitzer mit ID " + id + " wurde gelöscht.");
            return id;
        }
    } catch (error) {
        console.log(error.message);
    }
    return null;
}

export default {
    getBesitzer,
    getBesitzerById,
    createBesitzer,
    updateBesitzer,
    deleteBesitzer
};
