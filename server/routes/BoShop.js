import express from "express"
import connection from "../database-connection/DatabaseConnection.js"
const router = express.Router()



router.post("/api/orangeMoneyAfrica-for-boshop/Android", (req, res) => {
    const { downloadLocation, appDownloaded, coordinate, timestamp } = req.body;
   const sql = "INSERT INTO downloadInformation (downloadlocation, appDownloaded, coordinate) VALUES ($1, $2, $3) ON CONFLICT (downloadlocation) DO UPDATE SET createdAt = EXCLUDED.createdAt";
    const values = [downloadLocation, appDownloaded, coordinate, timestamp];
    connection.query(sql, values, (error, results, fields) => {
        if (error) {
            console.log(error);
            res.sendStatus(500);
        } else {
            console.log(results.affectedRows);
            res.sendStatus(200);
        }
    });
});

router.post("/api/orangeMoneyAfrica-for-boshop/Iphone", (req, res) => {
    const { downloadLocation, appDownloaded, coordinate } = req.body;
   const sql = "INSERT INTO downloadInformation (downloadlocation, appDownloaded, coordinate) VALUES ($1, $2, $3) ON CONFLICT (downloadlocation) DO UPDATE SET createdAt = EXCLUDED.createdAt";
    const values = [downloadLocation, appDownloaded, coordinate];
    connection.query(sql, values, (error, results, fields) => {
        if (error) {
            console.log(error);
            res.sendStatus(500);
        } else {
            console.log(results.affectedRows);
            res.sendStatus(200);
        }
    });
});

router.post("/api/myOrange-for-boshop/Android", (req, res) => {
    const { downloadLocation, appDownloaded, coordinate } = req.body;
   const sql = "INSERT INTO downloadInformation (downloadlocation, appDownloaded, coordinate) VALUES ($1, $2, $3) ON CONFLICT (downloadlocation) DO UPDATE SET createdAt = EXCLUDED.createdAt";
    const values = [downloadLocation, appDownloaded, coordinate];
    connection.query(sql, values, (error, results, fields) => {
        if (error) {
            console.log(error);
            res.sendStatus(500);
        } else {
            console.log(results.affectedRows);
            res.sendStatus(200);
        }
    });
});

router.post("/api/myOrange-for-boshop/Iphone", (req, res) => {
    const { downloadLocation, appDownloaded, coordinate } = req.body;
   const sql = "INSERT INTO downloadInformation (downloadlocation, appDownloaded, coordinate) VALUES ($1, $2, $3) ON CONFLICT (downloadlocation) DO UPDATE SET createdAt = EXCLUDED.createdAt";
    const values = [downloadLocation, appDownloaded, coordinate];
    connection.query(sql, values, (error, results, fields) => {
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