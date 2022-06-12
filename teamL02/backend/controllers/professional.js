/**
 * File uses code and insights from
 * https://github.com/byui-cse/cse341-code-student/blob/L02-team-solution-stretch/backend/controllers/professional.js
 */

// mongodb version
const mongoDatabase = require('../database/connect');

const getData = async (req, res, next) => {
  const result = await mongoDatabase.getDatabase().db('cse341').collection('test').find();
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists[0]); // we just need the first one (the only one)
  });
};


module.exports = { getData };
