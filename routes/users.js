import express from "express"
import {getUsers, postUsers, putUsers, deleteUsers} from "../controller/UsersController.js"

const userRouter = express.Router()

userRouter.get('/', getUsers)
userRouter.post('/', postUsers)
userRouter.put('/:id_user', putUsers) 
userRouter.delete('/:id_user', deleteUsers) 

export default userRouter