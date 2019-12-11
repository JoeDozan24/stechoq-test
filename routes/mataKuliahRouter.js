const express = require("express");
const router = express.Router();
const matkulController = require("../controllers/mataKuliahController");

router.get("/", matkulController.index);
router.get("/register", matkulController.addMataKuliah);
router.post("/", matkulController.store);
router.get("/:nim/edit", matkulController.editMataKuliah);
router.put("/:id", matkulController.update);
router.delete("/:id", matkulController.removeMataKuliah);

module.exports = router;