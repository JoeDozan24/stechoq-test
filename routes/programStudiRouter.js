const express = require("express");
const router = express.Router();
const programStudiController = require("../controllers/programStudiController");

router.get("/", programStudiController.index);
router.get("/register", programStudiController.addProgramStudi);
router.post("/", programStudiController.store);
router.get("/:kode_program_studi/edit", programStudiController.editProgramStudi);
router.put("/:kode_program_studi", programStudiController.update);
router.delete("/:kode_program_studi", programStudiController.removeProgramStudi);

module.exports = router;