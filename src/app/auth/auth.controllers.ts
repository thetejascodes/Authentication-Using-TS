import type{Request,Response} from 'express'
import express from 'express'
import {signupPayloadModel} from './model.js'
import {db} from '../../db/index.js'
import {users} from '../../db/schema.js'
import {eq} from 'drizzle-orm'
import {randomBytes,createHmac} from 'node:crypto'
class AuthController{
    public async handleSignup(req:Request,res:Response){
        const validationResult = await signupPayloadModel.safeParseAsync(req.body)
        
        if(validationResult.error){
            return res.status(400).json({
                message:'body validation failed',
                error:validationResult.error
            })
        }
        const { firstName,lastName,email,password } = validationResult.data;

        const userEmailResult = await db.select().from(users).where(eq(users.email, email))

        if(userEmailResult.length > 0){
            return res.status(409).json({
                message:`user with this email ${email} already exists`
            })
        }
        const salt = randomBytes(32).toString('hex')
        const hash = createHmac('sha256',salt).update(password).digest('hex')

        const result = await db.insert(users).values({
            firstName,
            lastName,
            email,
            password:hash,
            salt
        }).returning({id:users.id})

        return res.status(201).json({
         message: 'user created successfully',
         data: { id: result?.[0]?.id }
        })
    }
}

export default AuthController;

