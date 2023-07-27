import { Request,Response } from "express";
import bcrypt from "bcrypt";
import authorModel from "../Model/authorModel";

export const createAuthor =async(req: Request, res: Response)=>{
    try {
        const {name,email,password}= req.body
        const salt =await bcrypt.genSalt(10)
        const hash =await bcrypt.hash(salt,password)
        const user =await authorModel.create({name,email,password:hash})

        return res.status(201).json({
            message:"Success" ,
            data:user
        })
    } catch (error) {
        return res.status(404).json({
            message:"not found",
            data:error.message
        })
    }
}