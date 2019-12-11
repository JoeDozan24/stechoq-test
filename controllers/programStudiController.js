const ps = require("../models/program_studi");

module.exports = {
    index: function(req, res) {
        ps.get(req.conn, function(err, rows) {
            res.render("program_studi/indexProgramStudi", { data: rows });
        });
    },
    
    addProgramStudi: function(req, res) {
        res.render("program_studi/addProgramStudi");
    },
    
    store: function(req, res) {
        ps.create(req.conn, req.body, function(err) {
            res.redirect("/programStudi")
        })
    },
    
    editProgramStudi: function(req, res) {
        ps.getById(req.conn, req.params.kode_program_studi, function(err, rows) {
            res.render("program_studi/editProgramStudi", { data: rows[0] });
        });
    },
    
    update: function(req, res) {
        ps.update(req.conn, req.body, req.params.kode_program_studi, function(err) {
            res.redirect("/programStudi");
        })
    },
    
    removeProgramStudi: function(req, res) {
        ps.delete(req.conn, req.params.kode_program_studi, function(err) {
            res.redirect("/programStudi");
        })
    }
};