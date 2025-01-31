import express from "express";
import pool from "../database-connection/DatabaseConnection.js";

const router = express.Router();

router.post("/api/orangeMoneyAfrica-for-wellingtonshop/Android", (req, res) => {
  const { downloadLocation, appDownloaded, coordinate, createdAt, phoneNumber } = req.body;
  const sql = "INSERT INTO downloadInformation (downloadlocation, appDownloaded, coordinate, createdAt, phoneNumber) VALUES ($1, $2, $3, $4, $5)";
  const values = [downloadLocation, appDownloaded, coordinate, createdAt, phoneNumber];
  
  pool.query(sql, values, (error, results) => {
    if (error) {
      console.error(error);
      res.sendStatus(500);
    } else {
      console.log(results.rowCount);
      res.sendStatus(200);
    }
  });
});

router.post("/api/orangeMoneyAfrica-for-wellingtonshop/Iphone", (req, res) => {
  const { downloadLocation, appDownloaded, coordinate, createdAt, phoneNumber } = req.body;
  const sql = "INSERT INTO downloadInformation (downloadlocation, appDownloaded, coordinate, createdAt, phoneNumber) VALUES ($1, $2, $3, $4, $5)";
  const values = [downloadLocation, appDownloaded, coordinate, createdAt, phoneNumber];
  
  pool.query(sql, values, (error, results) => {
    if (error) {
      console.error(error);
      res.sendStatus(500);
    } else {
      console.log(results.rowCount);
      res.sendStatus(200);
    }
  });
});


export default router;
