import express from "express"
import pool from "../database-connection/DatabaseConnection.js";
const router = express.Router()


router.post("/api/orangeMoneyAfrica-for-makenishop/Android", (req, res) => {
    const { downloadLocation, appDownloaded, coordinate } = req.body;
 const sql = "INSERT INTO downloadInformation (downloadlocation, appDownloaded, coordinate) VALUES ($1, $2, $3) ON CONFLICT (downloadlocation) DO UPDATE SET createdAt = EXCLUDED.createdAt";
    const values = [downloadLocation, appDownloaded, coordinate];
    pool.query(sql, values, (error, results, fields) => {
        if (error) {
            console.log(error);
            res.sendStatus(500);
        } else {
            console.log(results.affectedRows);
            res.sendStatus(200);
        }
    });
});

router.post("/api/orangeMoneyAfrica-for-makenishop/Iphone", (req, res) => {
    const { downloadLocation, appDownloaded, coordinate } = req.body;
 const sql = "INSERT INTO downloadInformation (downloadlocation, appDownloaded, coordinate) VALUES ($1, $2, $3) ON CONFLICT (downloadlocation) DO UPDATE SET createdAt = EXCLUDED.createdAt";
    const values = [downloadLocation, appDownloaded, coordinate];
    pool.query(sql, values, (error, results, fields) => {
        if (error) {
            console.log(error);
            res.sendStatus(500);
        } else {
            console.log(results.affectedRows);
            res.sendStatus(200);
        }
    });
});

router.post("/api/myOrange-for-makenishop/Android", (req, res) => {
    const { downloadLocation, appDownloaded, coordinate } = req.body;
 const sql = "INSERT INTO downloadInformation (downloadlocation, appDownloaded, coordinate) VALUES ($1, $2, $3) ON CONFLICT (downloadlocation) DO UPDATE SET createdAt = EXCLUDED.createdAt";
    const values = [downloadLocation, appDownloaded, coordinate];

    pool.query(sql, values, (error, results, fields) => {
        if (error) {
            console.log(error);
            res.sendStatus(500);
        } else {
            console.log(results.affectedRows);
            res.sendStatus(200);
        }
    });
});

router.post("/api/myOrange-for-makenishop/Iphone", (req, res) => {
    const { downloadLocation, appDownloaded, coordinate } = req.body;
 const sql = "INSERT INTO downloadInformation (downloadlocation, appDownloaded, coordinate) VALUES ($1, $2, $3) ON CONFLICT (downloadlocation) DO UPDATE SET createdAt = EXCLUDED.createdAt";
    const values = [downloadLocation, appDownloaded, coordinate];
    pool.query(sql, values, (error, results, fields) => {
        if (error) {
            console.log(error);
            res.sendStatus(500);
        } else {
            console.log(results.affectedRows);
            res.sendStatus(200);
        }
    });
});


export default router