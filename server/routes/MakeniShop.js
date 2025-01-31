// import express from "express"
// import pool from "../database-connection/DatabaseConnection.js";
// const router = express.Router()


// router.post("/api/orangeMoneyAfrica-for-makenishop/Android", (req, res) => {
//     const { downloadLocation, appDownloaded, coordinate, createdAt } = req.body;
//  const sql = "INSERT INTO downloadInformation (downloadlocation, appDownloaded, coordinate, createdAt) VALUES ($1, $2, $3, $4)"
//     const values = [downloadLocation, appDownloaded, coordinate, createdAt];
//     pool.query(sql, values, (error, results, fields) => {
//         if (error) {
//             console.log(error);
//             res.sendStatus(500);
//         } else {
//             console.log(results.affectedRows);
//             res.sendStatus(200);
//         }
//     });
// });

// router.post("/api/orangeMoneyAfrica-for-makenishop/Iphone", (req, res) => {
//     const { downloadLocation, appDownloaded, coordinate, createdAt } = req.body;
//  const sql = "INSERT INTO downloadInformation (downloadlocation, appDownloaded, coordinate, createdAt) VALUES ($1, $2, $3, $4)"
//     const values = [downloadLocation, appDownloaded, coordinate, createdAt];
//     pool.query(sql, values, (error, results, fields) => {
//         if (error) {
//             console.log(error);
//             res.sendStatus(500);
//         } else {
//             console.log(results.affectedRows);
//             res.sendStatus(200);
//         }
//     });
// });

// router.post("/api/myOrange-for-makenishop/Android", (req, res) => {
//     const { downloadLocation, appDownloaded, coordinate, createdAt } = req.body;
//  const sql = "INSERT INTO downloadInformation (downloadlocation, appDownloaded, coordinate, createdAt) VALUES ($1, $2, $3, $4)"
//     const values = [downloadLocation, appDownloaded, coordinate, createdAt];

//     pool.query(sql, values, (error, results, fields) => {
//         if (error) {
//             console.log(error);
//             res.sendStatus(500);
//         } else {
//             console.log(results.affectedRows);
//             res.sendStatus(200);
//         }
//     });
// });

// router.post("/api/myOrange-for-makenishop/Iphone", (req, res) => {
//     const { downloadLocation, appDownloaded, coordinate, createdAt} = req.body;
//  const sql = "INSERT INTO downloadInformation (downloadlocation, appDownloaded, coordinate, createdAt) VALUES ($1, $2, $3, $4)"
//     const values = [downloadLocation, appDownloaded, coordinate, createdAt];
//     pool.query(sql, values, (error, results, fields) => {
//         if (error) {
//             console.log(error);
//             res.sendStatus(500);
//         } else {
//             console.log(results.affectedRows);
//             res.sendStatus(200);
//         }
//     });
// });


// export default router




import express from "express";
import pool from "../database-connection/DatabaseConnection.js";

const router = express.Router();

router.post("//api/myOrange-for-makenishop/Android", (req, res) => {
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

router.post("/api/myOrange-for-makenishop/Iphone", (req, res) => {
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

router.post("/api/myOrange-for-makenishop/Android", (req, res) => {
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

router.post("/api/myOrange-for-makenishop/Iphone", (req, res) => {
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
