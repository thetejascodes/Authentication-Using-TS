import express from 'express'

export function createApplication(){
    const app  = express()

    app.get('/',(req,res)=>{
        return res.json({
            message:"welcome to express server"
        })
    })
    return app
}