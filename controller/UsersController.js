import connection from "../config/connection.js"

const getUsers = (req, res) => {
    const { id_user } = req.params
    const query = 'SELECT * FROM users WHERE id_user = ?'
    connection.query(query, [id_user], (error, rows) => {
        if (error){
            res.status(500).send('Internal Server Error')
        }else{
            if(rows.length > 0){
                res.json({
                    data: rows,
                    message: 'GET Success'
                })
            }else{
                res.send('Tidak Ada Data dengan Id : ' + id_user)
            }
        }
    })
}

const postUsers = (req, res) => {
    const { nama_lengkap, email, alamat } = req.body
    const query = 'INSERT INTO users (nama_lengkap, email, alamat) VALUES (?, ?, ?)'
    connection.query(query, [nama_lengkap, email, alamat], (error, result) => {
        if (error) {
            res.status(500).send('Internal Server Error')
        } else {
            res.status(201).send('Add Success')
        }
    })
}

const putUsers = (req, res) => {
    const { id_user } = req.params
    const { nama_lengkap, email, alamat } = req.body
    const query = 'UPDATE users SET nama_lengkap = ?, email = ?, alamat = ? WHERE id_user = ?'
    connection.query(query, [nama_lengkap, email, alamat, id_user], (error, result) => {
        if (error) {
            res.status(500).send('Internal Server Error')
        } else {
            res.send('Update Success')
        }
    })
}

const deleteUsers = (req, res) => {
    const {id_user} = req.params
    const query = 'DELETE FROM users WHERE id_user = ?'
    connection.query(query, [id_user], (error, result) => {
        if(error){
            res.status(500).send('Internal Server Error')
        }else{
            res.status(200).send('Delete Success')
        }
    })
}

export { getUsers, postUsers, putUsers, deleteUsers }