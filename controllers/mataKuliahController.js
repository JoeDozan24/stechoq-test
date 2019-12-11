const mk = require("../models/mata_kuliah");

module.exports = {
    index: function(req, res) {
        mk.get(req.conn, function(err, rows) {
            res.render("mata_kuliah/indexMataKuliah", { data: rows })
        })
    },
    
    addMataKuliah: function(req, res) {
        res.render("mata_kuliah/addMataKuliah");
    },
    
    store: function(req, res) {
        mk.create(req.conn, req.body, function(err) {
            res.redirect("/mataKuliah")
        })
    },
    
    editMataKuliah: function(req, res) {
        mk.getById(req.conn, req.params.nim, function(err, rows) {
            res.render("mata_kuliah/editMataKuliah", { data: rows[0] });
        });
    },
    
    update: function(req, res) {
        mk.update(req.conn, req.body, req.params.id, function(err) {
            res.redirect("/mataKuliah");
        })
    },
    
    removeMataKuliah: function(req, res) {
        mk.delete(req.conn, req.params.id, function(err) {
            res.redirect("/mataKuliah");
        })
    }
}