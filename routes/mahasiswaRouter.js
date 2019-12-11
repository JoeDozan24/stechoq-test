const express = require("express");
const router = express.Router();
const mhsController = require("../controllers/mahasiswaController");

router.get("/", mhsController.index);
router.get("/register", mhsController.addMahasiswa);
router.post("/", mhsController.store);
router.get("/:nim/edit", mhsController.editDataMahasiswa);
router.put("/:id", mhsController.updateDataMahasiswa);
router.delete("/:id", mhsController.removeMahasiswa);

module.exports = router;