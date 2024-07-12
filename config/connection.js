import mysql from "mysql"
import util from "util"
import "dotenv/config"

const connection =  mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
})

connection.connect((error) => {
    if(error){
        console.log(error)
    }else{
        console.log("Koneksi Berhasil")
    }
})

connection.query = util.promisify(connection.query)

export default connection