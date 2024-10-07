import express from "express";

const app = express(); 
app.get("/status", (req, res, next) => {
    console.log("Request status API success!!");

    res.send('GOOD!');  //DB에서 select 한것 넘겨주기
});



export default app;