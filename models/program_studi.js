module.exports = {
    get: function(conn, callback) {
        conn.query("SELECT * FROM program_studi", callback);
    },
    
    getById: function(conn, kode_program_studi, callback) {
        conn.query("SELECT * FROM program_studi WHERE kode_program_studi = '" + kode_program_studi + "'", callback)
    },
    
    create: function(conn, data, callback) {
        conn.query("INSERT INTO program_studi SET kode_program_studi = '" + data.kode_program_studi + "', nama = '" + data.nama + "'", callback)
    },
    
    update: function(conn, data, id, callback) {
        conn.query("UPDATE program_studi SET kode_program_studi = '" + data.kode_program_studi + "', nama = '" + data.nama + "' WHERE kode_program_studi = '" + id + "'", callback)
    },
    
    delete: function(conn, id, callback) {
        conn.query("DELETE FROM program_studi WHERE kode_program_studi = '" + id + "'", callback)
    },
    
    sortMataKuliahByProgramStudi: function(conn, id, callback) {
        conn.query("SELECT * FROM mata_kuliah WHERE kode_program_studi = '" + id + "'", callback);
    }
}