// controller JS file
// This file uses code and insights from:
// https://github.com/byui-cse/cse341-code-student/blob/L02-personal-solution/controllers/contacts.js

const mongoDatabase = require("../db/connect");
const ObjectId = require("mongoDatabase").ObjectId;

// const getAllContacts =  async (req, res, next) => {
//^original version; why do they have those params if they won't be used?
// TODO: make getAllContacts function comply with functional programming (i.e. database in, results out)
// may be difficult since the res parameter from the instructor's solution implies we're updating whatever res is passed to this function.
export const getAllContacts = async (database) => {
  const result = await database
    .getDatabase()
    .db()
    .collection("contacts")
    .find();

  // All the stuff below can just be done outside of this function to res; on the bright side, this function now complies with functional programming (aside from how the database can returns errors or whatnot).
  //   result.toArray().then((lists) => {
  //     res.setHeader("Content-Type", "application/json");
  //     res.status(200).json(lists);
  //   });

  return result;
};

export const getSingleContact = async (database, request) => {
  const userId = new ObjectId(request.params.id);
  const result = await database
    .getDatabase()
    .db()
    .collection("contacts")
    .find({ _id: userId });

  // All the stuff below can just be done outside of this function to res; on the bright side, this function now complies with functional programming (aside from how the database can returns errors or whatnot).
  //   result.toArray().then((lists) => {
  //     res.setHeader("Content-Type", "application/json");
  //     res.status(200).json(lists);
  //   });

  return result;
};