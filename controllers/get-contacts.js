// controller JS file
// This file uses code and insights from:
// https://github.com/byui-cse/cse341-code-student/blob/L02-personal-solution/controllers/contacts.js

const database = require("../database/connect");
const ObjectId = require("mongodb").ObjectId;

// const getAllContacts =  async (req, res, next) => {
//^original version; why do they have those params if they won't be used?
// TODO: make getAllContacts function comply with functional programming (i.e. database in, results out)
// may be difficult since the res parameter from the instructor's solution implies we're updating whatever res is passed to this function.
// const getAllContacts = async (database) => { // new
const getAllContacts = async (req, res, next) => {
  // old
  const result = await database
    .getDatabase()
    .db("cse341")
    .collection("contacts")
    .find();

  // All the stuff below can just be done outside of this function to res; on the bright side, this function now complies with functional programming (aside from how the database can returns errors or whatnot).
  result.toArray().then((lists) => {
    res.setHeader("Content-Type", "application/json");
    res.status(200).json(lists);
  });

  // return result;
};

// const getSingleContact = async (database, request) => { //new
const getSingleContact = async (req, res, next) => {
  // old
  const userId = new ObjectId(req.params.id);
  const result = await database
    .getDatabase()
    .db("cse341")
    .collection("contacts")
    .find({ _id: userId });

  // All the stuff below can just be done outside of this function to res; on the bright side, this function now complies with functional programming (aside from how the database can returns errors or whatnot).
  result.toArray().then((lists) => {
    res.setHeader("Content-Type", "application/json");
    res.status(200).json(lists);
  });

  // return result;
};

module.exports = {
  getAllContacts,
  getSingleContact,
};
