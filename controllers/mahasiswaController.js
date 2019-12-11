const mhs = require("../models/mahasiswa");

module.exports = {
    index: function(req, res) {
        mhs.get(req.conn, function(err, rows) {
            res.render("mahasiswa/indexMahasiswa", { data: rows })
        })
    },
    
    addMahasiswa: function(req, res) {
        res.render("mahasiswa/addMahasiswa");
    },
    
    store: function(req, res) {
        mhs.create(req.conn, req.body, function(err) {
            res.redirect("/mahasiswa")
        })
    },
    
    editDataMahasiswa: function(req, res) {
        mhs.getById(req.conn, req.params.nim, function(err, rows) {
            res.render("mahasiswa/editMahasiswa", { data: rows[0] });
        });
    },
    
    update: function(req, res) {
        mhs.update(req.conn, req.body, req.params.id, function(err) {
            res.redirect("/mahasiswa");
        })
    },
    
    removeMahasiswa: function(req, res) {
        mhs.delete(req.conn, req.params.id, function(err) {
            res.redirect("/mahasiswa");
        })
    }
};