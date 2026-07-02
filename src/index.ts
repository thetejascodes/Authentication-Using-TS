import {createServer} from "node:http";
import { createApplication } from "./app/app.js";
async function main(){
    try {
        const server = createServer(createApplication())
        const PORT : number = 3000;
        server.listen(PORT,()=>{
            console.log(`Server is 🚀 running on ${PORT} `)
        })
    } catch (error) {
        console.log('error starting http server')
        throw error
    }
}
main()