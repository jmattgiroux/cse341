/**
 * File uses code and insights from
 * https://github.com/byui-cse/cse341-code-student/blob/L02-team-solution-stretch/backend/controllers/professional.js
 */

// If I can get this to work, then I'll rename mongodb to mongoDatabase.

// mongodb version
const mongodb = require('../database/connect');

const getData = async (req, res, next) => {
  const result = await mongodb.getDatabase().db().collection('user').find();
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists[0]); // we just need the first one (the only one)
  });
};


module.exports = { getData };
