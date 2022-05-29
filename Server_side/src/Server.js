const app = require("./index.js")

const connect = require("./config/db")

app.listen(8000,async()=>{
    await connect();
    console.log("Listening port from 8000")
})