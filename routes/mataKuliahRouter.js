const express = require("express");
const router = express.Router();
const matkulController = require("../controllers/mataKuliahController");

router.get("/", matkulController.index);
router.get("/register", matkulController.addMataKuliah);
router.post("/", matkulController.store);
router.get("/:kode_mata_kuliah/edit", matkulController.editMataKuliah);
router.put("/:kode_mata_kuliah", matkulController.update);
router.delete("/:kode_mata_kuliah", matkulController.removeMataKuliah);

module.exports = router;