const express = require("express");
const router = express.Router();
const mhsController = require("../controllers/mahasiswaController");

router.get("/", mhsController.index);
router.get("/register", mhsController.addMahasiswa);
router.post("/", mhsController.store);
router.get("/:nim/edit", mhsController.editDataMahasiswa);
router.put("/:nim", mhsController.update);
router.delete("/:nim", mhsController.removeMahasiswa);

module.exports = router;