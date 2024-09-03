const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

const categoriesRouter = require("./categories/routeur");

router.use("/categories", categoriesRouter);

// Import item-related actions

const itemsRouter = require("./items/router");

router.use("/items", itemsRouter);

const programsRouter =  require("./programs/router");

router.use("/programs", programsRouter);
/* ************************************************************************* */

module.exports = router;