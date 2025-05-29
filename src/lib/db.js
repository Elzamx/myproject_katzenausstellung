import { MongoClient, ObjectId } from "mongodb"; // See https://www.mongodb.com/docs/drivers/node/current/quick-start/
import { DB_URI } from "$env/static/private";

const client = new MongoClient(DB_URI);

await client.connect();
const db = client.db("Katzenausstellung"); // select database

//////////////////////////////////////////
// Movies
//////////////////////////////////////////

// Get all movies
async function getMovies() {
  let katzen = [];
  try {
    const collection = db.collection("katzen");

    // You can specify a query/filter here
    // See https://www.mongodb.com/docs/drivers/node/current/fundamentals/crud/query-document/
    const query = {};

    // Get all objects that match the query
    katzen = await collection.find(query).toArray();
    katzen.forEach((katze) => {
      katze._id = katze._id.toString(); // convert ObjectId to String
    });
  } catch (error) {
    console.log(error);
    // TODO: errorhandling
  }
  return katzen;
}

// Get movie by id
async function getMovie(id) {
  let katze = null;
  try {
    const collection = db.collection("katzen");
    const query = { _id: new ObjectId(id) }; // filter by id
    movie = await collection.findOne(query);

    if (!katze) {
      console.log("No cat with id " + id);
      // TODO: errorhandling
    } else {
      katze._id = katze._id.toString(); // convert ObjectId to String
    }
  } catch (error) {
    // TODO: errorhandling
    console.log(error.message);
  }
  return katze;
}

// create movie
// Example movie object:
/* 
{ 
  title: "Das Geheimnis von Altura",
  year: 2024,
  length: "120 Minuten"
} 
*/
async function createMovie(katze) {
  katze.poster = "/images/placeholder.jpg"; // default poster
  katze.actors = [];
  katze.watchlist = false;
  try {
    const collection = db.collection("katzen");
    const result = await collection.insertOne(katze);
    return result.insertedId.toString(); // convert ObjectId to String
  } catch (error) {
    // TODO: errorhandling
    console.log(error.message);
  }
  return null;
}

// update movie
// Example movie object:
/* 
{ 
  _id: "6630e72c95e12055f661ff13",
  title: "Das Geheimnis von Altura",
  year: 2024,
  length: "120 Minuten",
  actors: [
    "Lena Herzog",
    "Maximilian Schröder",
    "Sophia Neumann"
  ],
  poster: "/images/Altura.png",
  watchlist: false
} 
*/
// returns: id of the updated movie or null, if movie could not be updated
async function updateMovie(katze) {
  try {
    let id = katze._id;
    delete katze._id; // delete the _id from the object, because the _id cannot be updated
    const collection = db.collection("katzen");
    const query = { _id: new ObjectId(id) }; // filter by id
    const result = await collection.updateOne(query, { $set: katze });

    if (result.matchedCount === 0) {
      console.log("No cat with id " + id);
      // TODO: errorhandling
    } else {
      console.log("Cat with id " + id + " has been updated.");
      return id;
    }
  } catch (error) {
    // TODO: errorhandling
    console.log(error.message);
  }
  return null;
}

// delete movie by id
// returns: id of the deleted movie or null, if movie could not be deleted
async function deleteMovie(id) {
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
    // TODO: errorhandling
    console.log(error.message);
  }
  return null;
}

// export all functions so that they can be used in other files
export default {
  getMovies,
  getMovie,
  createMovie,
  updateMovie,
  deleteMovie,
};
