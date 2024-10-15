import express from "express";
import connection from "./db";
import cors from "cors";

const app = express(); 
app.use(cors());
app.get("/status", (req, res, next) => {
    console.log("Request status API success!!");

    res.send('GOOD!');  //DB에서 select 한것 넘겨주기
});

app.get("/api/tokens", (req, res) => {
    connection.query("SELECT * FROM token", (err, data) => {
        if(err){
            console.log("Get Token DB error: ", err);
            res.status(500).send("DB Error");
        }else{
            console.log(data);
            res.send(data);
        }
    });
})




export default app;