const express = require("express");
const router = express.Router();
const krsController = require("../controllers/krsController");

router.get("/", krsController.index);
router.get("/register", krsController.addKRS);
router.post("/", krsController.store);
router.delete("/:nim/:kode_mata_kuliah/:tahun/:semester", krsController.removeKRS);
router.get("/nim/:nim", krsController.sortByNIM);
router.get("/kmk/:kode_mata_kuliah", krsController.sortByKodeMataKuliah);

module.exports = router;