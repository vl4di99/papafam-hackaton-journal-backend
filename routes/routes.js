const express = require("express");

// recordRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /listings.
const createdRoutes = express();

const journalRoutes = require("./journal");
createdRoutes.use("/journal", journalRoutes);

module.exports = createdRoutes;
