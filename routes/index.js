const router = require("express").Router();
const searchR = require ("./search");

router.use("/search", searchR);

module.exports = router;