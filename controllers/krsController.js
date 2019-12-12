const krs = require("../models/krs");

module.exports = {
    index: function(req, res) {
        krs.get(req.conn, function(err, rows) {
            res.render("krs/indexKRS", { data: rows });
        });
    },
    
    addKRS: function(req, res) {
        res.render("krs/addKRS");
    },
    
    store: function(req, res) {
        krs.create(req.conn, req.body, function(err) {
            res.redirect("/krs")
        });
    },
    
    removeKRS: function(req, res) {
        krs.delete(req.conn, req.params, function(err) {
            res.redirect("/krs");
        });
    },
    
    sortByNIM: function(req, res) {
        krs.getByNIM(req.conn, req.params.nim, function(err, rows) {
            krs.getTotalSKS(req.conn, req.params.nim, function(err2, rows2) {
                res.render("krs/indexKRSSortByNIM", { data: rows, total_sks: rows2[0].total_sks });
            });
        });
    },
    
    sortByKodeMataKuliah: function(req, res) {
        krs.getByKodeMataKuliah(req.conn, req.params.kode_mata_kuliah, function(err, rows) {
            res.render("krs/indexKRSSortByKodeMataKuliah", { data: rows });
        });
    }
};