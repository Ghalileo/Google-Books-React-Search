const path = require("path");
const router = require("express").Router();
const searchRoutes = require ("./search");
const googleRoutes = require ("./google");

// Book Routes
router.use("/search", searchRoutes);

// Google Routes
router.use("/google", googleRoutes);

// For anyting else, render the HTML page
router.use((req, res) => {
    res.sendFile(path.join(_dirname, "../../client/build/index.html"))
})

module.exports = router;