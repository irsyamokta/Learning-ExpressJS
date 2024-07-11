import mysql from "mysql"

const connection =  mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'db_tes'
})

connection.connect((error) => {
    if(error){
        console.log(error)
    }else{
        console.log("Koneksi Berhasil")
    }
})

export default connection