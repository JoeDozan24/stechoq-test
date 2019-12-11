module.exports = {
    get: function(conn, callback) {
        conn.query("SELECT * FROM mata_kuliah", callback);
    },
    
    getById: function(conn, id, callback) {
        conn.query("SELECT * FROM mata_kuliah WHERE kode_mata_kuliah = ${id}", callback)
    },
    
    create: function(conn, data, callback) {
        conn.query("INSERT INTO mata_kuliah SET kode_mata_kuliah = ${data.kode_mata_kuliah}, nama = ${data.nama}", callback)
    },
    
    update: function(conn, data, id, callback) {
        conn.query("UPDATE mata_kuliah SET kode_mata_kuliah = ${data.kode_mata_kuliah}, nama = ${data.nama} WHERE kode_mata_kuliah = ${id}", callback)
    },
    
    delete: function(conn, id, callback) {
        conn.query("DELETE FROM mata_kuliah WHERE kode_mata_kuliah = ${id}", callback)
    }
}