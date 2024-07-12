import connection from "../config/connection.js"

const getUsers = async (req, res) => {
    try {
        const query = 'SELECT * FROM users'
        const rows = await connection.query(query)
        if (rows.length > 0) {
            res.status(200).json({
                "Data": rows,
                "Message": 'GET Success'
            })
        } else {
            res.status(200).json({
                "Message": "Data kosong"
            })
        }
    } catch (error) {
        res.status(500).json({
            "Message": error.message
        })
    }
}

const postUsers = async (req, res) => {
    try {
        const { nama_lengkap, email, alamat } = req.body
        const query = 'INSERT INTO users (nama_lengkap, email, alamat) VALUES (?, ?, ?)'
        const result = await connection.query(query, [nama_lengkap, email, alamat])
        if (result) {
            res.status(201).json({
                "Message": "POST Success"
            })
        } else {
            res.status(400).json({
                "Message": "Bad Request"
            })
        }
    } catch (error) {
        res.status(500).json({
            "Message": error.message
        })
        console.log(error)
    }
}

const putUsers = async (req, res) => {
    try {
        const { id_user } = req.params
        const { nama_lengkap, email, alamat } = req.body
        const query = 'UPDATE users SET nama_lengkap = ?, email = ?, alamat = ? WHERE id_user = ?'

        const result = await connection.query(query, [nama_lengkap, email, alamat, id_user])
        console.log(result)

        if (result.affectedRows > 0) {
            res.status(200).json({
                "Message": "PUT Success"
            })
        } else {
            res.status(404).json({
                "Message": "User Not Found"
            })
        }
    } catch (error) {
        res.status(500).json({
            "Message": error.message
        })
    }
}

const deleteUsers = async (req, res) => {
    try {
        const { id_user } = req.params
        const query = 'DELETE FROM users WHERE id_user = ?'
        const result = await connection.query(query, [id_user])

        if(result.affectedRows > 0){
            res.status(200).json({
                "Message": "DELETE Success"
            })
        }else{
            res.status(404).json({
                "Message": "User Not Found"
            })
        }

    } catch (error) {
        res.status(500).json({
            "Message": error.message
        })
    }


}

export { getUsers, postUsers, putUsers, deleteUsers }