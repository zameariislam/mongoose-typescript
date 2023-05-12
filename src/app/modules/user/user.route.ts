import express from 'express'
import { createUser, getAdmins, getUser, getUserById } from './user.controller'

const router = express.Router()

router.get('/', getUser)
router.get('/admins', getAdmins)

router.post('/create-user', createUser)

router.get('/:id', getUserById)

export default router




