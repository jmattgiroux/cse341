/**
 * Connection URI. Update <username>, <password>, and <your-cluster-url> to reflect your cluster.
 * See https://docs.mongodb.com/ecosystem/drivers/node/ for more details
 * File uses insights and code from
 * https://github.com/byui-cse/cse341-code-student/blob/L02-team-solution-stretch/backend/db/connect.js
 */
const MongoClient = require("mongodb").MongoClient;
const dotenv = require("dotenv");
dotenv.config();
const uri = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.rzqr5td.mongodb.net/?retryWrites=true&w=majority`;


let database;

const initDatabase = (callback) => {
  // if it already exists, you don't need to re-initialize the database.
  if (database) {
    console.log("Database is already initialized!!!");
    return callback(null, database);
  }

  // Examples: https://mongodb.github.io/node-mongodb-native/api-generated/mongoclient.html
  MongoClient.connect(uri)
    .then((client) => {
      database = client;
      callback(null, database);
    })
    .catch((error) => {
        callback(error);
    });
};

const getDatabase = () => {
  if (!database) {
    throw Error("Database not initialized!!!");
  }
  return database;
};

async function main() {
  const uri = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.rzqr5td.mongodb.net/?retryWrites=true&w=majority`;

  const client = new MongoClient(uri);

  try {
    // Connect to the MongoDB cluster
    await client.connect();

    // Make the appropriate DB calls
    await listDatabases(client);
  } catch (e) {
    console.error(e);
  } finally {
    await client.close();
  }
}

module.exports = {
  initDatabase,
  getDatabase,
};