import { IUser } from "./user.interface"
import User from "./user.model"

export const createUserToDb = async (payload: IUser): Promise<IUser> => {



    const user = new User(payload)

    // custom instance method 
    console.log(user.fullName())

    return await user.save()


}


export const getUserFromDbs = async (): Promise<IUser[]> => {

    const users = await User.find({})

    return users


}

export const getUserByIdFromDbs = async (payload: string): Promise<IUser | null> => {

    // const users = await User.findOne({ id: payload }, { name: 1, id: 1, role: 1 })
    const users = await User.findOne({ id: payload }).select("name role contactNo ")

    return users


}

// static method 
// class->Method> can call directly using class 


export const getAllAdminUsersFromDb = async () => {
    const admins = await User.getAdminUsers()
    return admins



}



















