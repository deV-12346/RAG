import express from "express"
import { aiRouter } from "./router/ai.router"
const app = express()
const PORT = process.env.PORT || 5000
const startServer = async() =>{
    app.use(express.json())
    app.use('/api/ai',aiRouter)
    app.listen(PORT,()=>{
      console.log(`server running on ${PORT}`)
    })
}
startServer()