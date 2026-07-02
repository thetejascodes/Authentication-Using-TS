import express from 'express'
import {authRouter} from './auth/auth.routes.js'

export function createApplication(){
    const app  = express()
    app.use(express.json())
    app.use('/auth', authRouter)

    app.get('/',(req,res)=>{
        return res.json({
            message:"welcome to express server"
        })
    })
    return app
}