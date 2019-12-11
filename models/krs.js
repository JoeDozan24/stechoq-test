module.exports = {
    get: function(conn, callback) {
        conn.query("SELECT * FROM krs", callback);
    },
    
    getByNIM: function(conn, id, callback) {
        conn.query("SELECT * FROM krs WHERE NIM = '" + id + "'", callback)
    },
    
    getByKodeMataKuliah: function(conn, id, callback) {
        conn.query("SELECT * FROM krs WHERE kode_mata_kuliah = '" + id + "'", callback)
    },
    
    create: function(conn, data, callback) {
        conn.query("INSERT INTO krs SET kode_mata_kuliah = '" + data.kode_mata_kuliah + "', NIM = '" + data.nim + "', tahun = '" + data.tahun + "', semester = '" + data.semester + "'", callback)
    },
    
    delete: function(conn, data, callback) {
        conn.query("DELETE FROM krs WHERE NIM = '" + data.nim + "'AND tahun = '" + data.tahun + "' AND semester = '" + data.semester + "' AND kode_mata_kuliah = '" + data.kode_mata_kuliah + "'", callback)
    }
}