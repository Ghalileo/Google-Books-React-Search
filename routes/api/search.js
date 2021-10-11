const router = require("express").Router();
const searchController = require("../../controllers/searchController");


router.route("/")
.get(searchController.findAll)
.post(searchController.create);

// Matches with "api/book/:id"
router
.route("/:id")
.get(searchController.findById)
.put(searchController.update)
.delete(searchController.remove);

    module.exports = router;