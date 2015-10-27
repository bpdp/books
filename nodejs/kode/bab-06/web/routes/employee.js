/*
 * GET employees listing.
 */

var databaseUrl = "localhost/mydb",
    collections = ["employees"],
    mongojs = require("mongojs"),
    db = mongojs(databaseUrl, collections);

exports.list = function(req, res){

    // mencari dan menampilkan semua pegawai
    db.employees.find(function(err, employees) {
        res.render('employee', {listOfEmployee: employees, title: 'Daftar pegawai'});
    });

};
