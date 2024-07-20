import { NextResponse } from "next/server"
import User from "@/app/lib/modals/usersModal"
import connectDB from "@/app/lib/db"
import bcrypt from 'bcryptjs'

export const POST = async (request) => {
    try {
         const body = await request.json()
         connectDB()
         const {username, password, email} = body

         const hashPassword = await bcrypt.hash(password, 5)

         const newUser = new User ({
            username,
            password: hashPassword,
            email
        })

         
         const createdNewUser = newUser.save()

         return NextResponse.json(createdNewUser, {status:200})
         
    } catch (error) {
        return NextResponse.json('Issue in creating user', {status:501})
    }
   
}