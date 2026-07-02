import {z} from 'zod'

export const signupPayloadModel = z.object({
    firstName: z.string().min(2).max(45),
    lastName: z.string().min(2).max(45),
    email: z.email().max(322),
    password: z.string().min(6).max(66)
})

export const signinPayloadModel = z.object({
    email: z.email().max(322),
    password: z.string().min(6).max(66)
})