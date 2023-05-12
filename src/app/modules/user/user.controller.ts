import { NextFunction, Request, Response } from "express"
import { createUserToDb, getAllAdminUsersFromDb, getUserByIdFromDbs, getUserFromDbs } from "./user.service"


export const createUser = async (req: Request, res: Response, next: NextFunction) => {

    const data = req.body



    const user = await createUserToDb(data)

    res.status(200).json({
        status: 'success',
        data: user
    })



}


export const getUser = async (req: Request, res: Response, next: NextFunction) => {


    const users = await getUserFromDbs()


    res.status(200).json({
        status: 'success',
        data: users
    })



}

export const getUserById = async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params



    const user = await getUserByIdFromDbs(id)


    res.status(200).json({
        status: 'success',
        data: user
    })



}


export const getAdmins = async (req: Request, res: Response, next: NextFunction) => {


    const users = await getAllAdminUsersFromDb()


    res.status(200).json({
        status: 'success',
        data: users
    })



}





