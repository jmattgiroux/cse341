// controller JS file
// This file uses code and insights from:
// https://github.com/byui-cse/cse341-code-student/blob/L02-personal-solution/controllers/contacts.js

const database = require("../database/connect");
const ObjectId = require("mongodb").ObjectId;

const getAllContacts = async (req, res, next) => {
  const result = await database
    .getDatabase()
    .db("cse341")
    .collection("contacts")
    .find();

  result.toArray().then((lists) => {
    res.setHeader("Content-Type", "application/json");
    res.status(200).json(lists);
  });
};

const getSingleContact = async (req, res, next) => {
  const userId = new ObjectId(req.params.id);
  const result = await database
    .getDatabase()
    .db("cse341")
    .collection("contacts")
    .find({ _id: userId });

  result.toArray().then((lists) => {
    res.setHeader("Content-Type", "application/json");
    res.status(200).json(lists);
  });
};

// Resource referenced: https://stackoverflow.com/questions/54587040/import-external-json-file-to-mongodb-using-nodejs-and-mongoose
// used code as example from here: https://github.com/byui-cse/cse341-code-student/blob/L03-personal-solution/controllers/contacts.js
const insertSingleContact = async (req, res, next) => {
  const contact = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    favoriteColor: req.body.favoriteColor,
    birthday: req.body.birthday,
  };

  const result = await database
    .getDatabase()
    .db("cse341")
    .collection("contacts")
    .insertOne(contact);

  if (result.acknowledged) {
    res.status(201).json(result);
  } else {
    res.status(500).json(result.error || "Failed to insert contact");
  }
};

// referenced code from here: https://github.com/byui-cse/cse341-code-student/blob/L03-personal-solution/controllers/contacts.js
// Resource referenced: https://www.mongodb.com/docs/manual/reference/method/db.collection.updateOne/
const updateSingleContact = async (req, res, next) => {
  const userId = new ObjectId(req.params.id);
  const contact = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    favoriteColor: req.body.favoriteColor,
    birthday: req.body.birthday,
  };

  const result = await database
    .getDatabase()
    .db("cse341")
    .collection("contacts")
    .updateOne(
      {
        _id: userId,
      },
      {
        $set: {
          firstName: req.body.firstName,
          lastName: req.body.lastName,
          email: req.body.email,
          favoriteColor: req.body.favoriteColor,
          birthday: req.body.birthday,
        },
      }
    );

  if (result.acknowledged) {
    res.status(201).json(result);
  } else {
    res.status(500).json(result.error || "Failed to update contact");
  }
};

const deleteSingleContact = async (req, res, next) => {
  const userId = new ObjectId(req.params.id);
  const contact = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    favoriteColor: req.body.favoriteColor,
    birthday: req.body.birthday,
  };

  const result = await database
    .getDatabase()
    .db("cse341")
    .collection("contacts")
    .deleteOne({ _id: userId });

  if (result.acknowledged) {
    res.status(201).json(result);
  } else {
    res.status(500).json(result.error || "Failed to delete contact");
  }
};

module.exports = {
  getAllContacts,
  getSingleContact,
  insertSingleContact,
  updateSingleContact,
  deleteSingleContact,
};
