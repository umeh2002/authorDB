import cors from "cors"
import express, { Application,Request,Response } from "express"

const main =(app:Application)=>{
    app.use(express.json())
    app.use(cors())
    app.get("/",(req:Request,res:Response)=>{
        try {
            res.status(200).json({
message:"welcome home"
            })
        } catch (error) {
            res.status(404).json({
                message:"error" ,
                data:error.message
            })
        }
    })
}

export default main