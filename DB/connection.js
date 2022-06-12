/**
 * Connection URI. Update <username>, <password>, and <your-cluster-url> to reflect your cluster.
 * See https://docs.mongodb.com/ecosystem/drivers/node/ for more details
 * File uses insights and code from 
 * https://github.com/byui-cse/cse341-code-student/blob/L02-personal-solution/db/connect.js
 * especially line 14 onwards.
 */
const { MongoClient } = require("mongodb");
const dotenv = require("dotenv");
dotenv.config();
const uri = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.rzqr5td.mongodb.net/?retryWrites=true&w=majority`;

let dataBase;

export function initDataBase() {

  // if it already exists, you don't need to re-initialize the dataBase.
  if (dataBase){
    console.log("DataBase is already initialized!!!");
    return callback(null, dataBase);
  }

  MongoClient.connect(uri)
  .then((client) => {
    dataBase = client;
    callback(null, dataBase);
  })
  .catch((error) => {
    if(!dataBase){
      throw Error("Database not initialized!!!");
    }
    return dataBase;
  });
};