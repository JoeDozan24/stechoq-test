module.exports = {
    get: function(conn, callback) {
        conn.query("SELECT * FROM mahasiswa", callback);
    },
    
    getById: function(conn, id, callback) {
        conn.query("SELECT * FROM mahasiswa WHERE NIM = '" + id + "'", callback)
    },
    
    create: function(conn, data, callback) {
        console.log(data);
        conn.query("INSERT INTO mahasiswa SET NIM = '" + data.nim + "', nama = '" + data.nama + "', tempat_lahir = '" + data.tempat_lahir + "', tgl_lahir = '" + data.tgl_lahir + "', tahun_masuk = '" + data.tahun_masuk + "', kode_program_studi = '" + data.kode_program_studi + "'", callback)
    },
    
    update: function(conn, data, id, callback) {
        conn.query("UPDATE mahasiswa SET NIM = '" + data.nim + "', nama = '" + data.nama + "', tempat_lahir = '" + data.tempat_lahir + "', tgl_lahir = '" + data.tgl_lahir + "', tahun_masuk = '" + data.tahun_masuk + "', kode_program_studi = '" + data.kode_program_studi + "' WHERE NIM = '" + id + "'", callback)
    },
    
    delete: function(conn, id, callback) {
        conn.query("DELETE FROM mahasiswa WHERE NIM = '" + id + "'", callback)
    }
}