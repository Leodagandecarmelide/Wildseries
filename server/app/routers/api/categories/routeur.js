const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import categories-related actions
const { browse, read } = require("../../../controllers/categoryAction");

// Route to get a list of categories
router.get("/", browse);

// Route to get a specific categorie by ID
router.get("/:id", read);


/* ************************************************************************* */

module.exports = router;