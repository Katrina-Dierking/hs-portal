import express from 'express'

export const userRoutes = express.Router()

userRoutes.route('/').post(registerUser)
userRoutes.route('/login').post(authUser)