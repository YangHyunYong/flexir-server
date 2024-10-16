import express from "express";
import { connection } from "../db_connection.js";
import cors from "cors";

const app = express(); 
app.use(cors());
app.use(express.json());

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

// POST /newtoken 경로에 대한 처리
app.post("/newtoken", (req, res) => {
    const { tokenId, chainId, settleDuration } = req.body;
  
    const query = `
      INSERT INTO token (token_id, chain_id, settle_duration)
      VALUES (?, ?, ?);
    `;
  
    const values = [tokenId, chainId, settleDuration];
  
    connection.query(query, values, (err, results) => {
      if (err) {
        res.json({
          result: 0,
          message: err.message,
          data: {},
        });
        return;
      }
  
      res.json({
        result: 1,
        message: "success",
        data: { results },
      });
    });
  });
  
  // POST /newcommon 경로에 대한 처리
  app.post("/newcommon", (req, res) => {
    const {
      commonId,
      chainId,
      tokenId,
      collateral,
      amount,
      exchangeToken,
      fullMatch,
    } = req.body;
  
    const query = `
      INSERT INTO order_common (common_id, chain_id, token_id, collateral, amount, exchange_token, full_match) 
      VALUES (?, ?, ?, ?, ?, ?, ?);
    `;
  
    const values = [
      commonId,
      chainId,
      tokenId,
      collateral,
      amount,
      exchangeToken,
      fullMatch,
    ];
  
    connection.query(query, values, (err, results) => {
      if (err) {
        res.json({
          result: 0,
          message: err.message,
          data: {},
        });
        return;
      }
  
      res.json({
        result: 1,
        message: "success",
        data: { results },
      });
    });
  });
  
  // POST /a 경로에 대한 처리
  app.post("/a", (req, res, next) => {
    const { offer_id, value } = req.body;
  
    // offer_id와 value가 정상적으로 제공되었을 때 응답
    if (offer_id && value) {
      res.json({
        result: 1,
        message: "success",
        data: {
          offer_id: offer_id,
          value: value,
        },
      });
    } else {
      res.status(400).json({
        result: 0,
        message: "Invalid input",
        data: null,
      });
    }
  });

export default app;