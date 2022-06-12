// routes are just code for handling urls
// see here: https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/routes
// This file uses code and insights from:
// https://github.com/byui-cse/cse341-code-student/blob/L02-personal-solution/routes/contacts.js

const router = require("express").Router();

const contactsController = require("../controllers/get-contacts");

// router.get() documentation: https://expressjs.com/en/guide/routing.html

// Moved toArray part of instructor code in contacts-controller over to here; will need to add the rest of the code from contacts-controller over to whatever makes the requests to the routers here.
router.get("/", contactsController.getAllContacts);

router.get("/:id", contactsController.getSingleContact);

module.exports = router;
