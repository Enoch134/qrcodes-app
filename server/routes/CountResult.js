import express from "express"
import pool from "../database-connection/DatabaseConnection.js"
const router = express.Router()


router.get('/', (req, res) => {
    const sql = `
SELECT 'My Orange App For Iphone' as total_downloads,  COUNT(downloadLocation) as total FROM downloadInformation WHERE downloadLocation = 'Headquarter Shop' AND appDownloaded = 'My Orange App For Iphone'
UNION ALL
SELECT 'My Orange App For Android' as total_downloads,  COUNT(downloadLocation) as total FROM downloadInformation WHERE downloadLocation = 'Headquarter Shop' AND appDownloaded = 'My Orange App For Android'
UNION ALL
SELECT 'Orange Money Africa Iphone' as total_downloads,  COUNT(downloadLocation) as total FROM downloadInformation WHERE downloadLocation = 'Headquarter Shop' AND appDownloaded = 'Orange Money Africa Iphone'
UNION ALL
SELECT 'Orange Money Africa Android' as total_downloads,  COUNT(downloadLocation) as total FROM downloadInformation WHERE downloadLocation = 'Headquarter Shop' AND appDownloaded = 'Orange Money Africa Android'
UNION ALL

SELECT 'My Orange App For Iphone' as total_downloads,  COUNT(downloadLocation) as total FROM downloadInformation WHERE downloadLocation = 'Flagship Shop' AND appDownloaded = 'My Orange App For Iphone'
UNION ALL
SELECT 'My Orange App For Android' as total_downloads,  COUNT(downloadLocation) as total FROM downloadInformation WHERE downloadLocation = 'Flagship Shop' AND appDownloaded = 'My Orange App For Android'
UNION ALL
SELECT 'Orange Money Africa Iphone' as total_downloads,  COUNT(downloadLocation) as total FROM downloadInformation WHERE downloadLocation = 'Flagship Shop' AND appDownloaded = 'Orange Money Africa Iphone'
UNION ALL
SELECT 'Orange Money Africa Android' as total_downloads,  COUNT(downloadLocation) as total FROM downloadInformation WHERE downloadLocation = 'Flagship Shop' AND appDownloaded = 'Orange Money Africa Android'
UNION ALL

SELECT 'My Orange App For Iphone' as total_downloads,  COUNT(downloadLocation) as total FROM downloadInformation WHERE downloadLocation = 'Wellington Shop' AND appDownloaded = 'My Orange App For Iphone'
UNION ALL
SELECT 'My Orange App For Android' as total_downloads,  COUNT(downloadLocation) as total FROM downloadInformation WHERE downloadLocation = 'Wellington Shop' AND appDownloaded = 'My Orange App For Android'
UNION ALL
SELECT 'Orange Money Africa Iphone' as total_downloads,  COUNT(downloadLocation) as total FROM downloadInformation WHERE downloadLocation = 'Wellington Shop' AND appDownloaded = 'Orange Money Africa Iphone'
UNION ALL
SELECT 'Orange Money Africa Android' as total_downloads,  COUNT(downloadLocation) as total FROM downloadInformation WHERE downloadLocation = 'Wellington Shop' AND appDownloaded = 'Orange Money Africa Android'
UNION ALL


SELECT 'my_orange_app_download_for_iphone_at_waterlooshop' as total_downloads, count(downloadLocation) as total from downloadInformation where downloadLocation = 'Waterloo Shop' and appDownloaded = 'My Orange App For Iphone'
UNION ALL
SELECT 'my_orange_app_download_for_android_at_waterlooshop' as total_downloads, count(downloadLocation) as total from downloadInformation where downloadLocation = 'Waterloo Shop' and appDownloaded = 'My Orange App For Android'
UNION ALL
SELECT 'orange_money_africa_app_download_for_iphone_at_waterlooshop' as total_downloads, count(downloadLocation) as total from downloadInformation where downloadLocation = 'Waterloo Shop' and appDownloaded = 'Orange Money Africa Iphone'
UNION ALL
SELECT 'orange_money_africa_app_download_for_android_at_waterlooshop' as total_downloads, count(downloadLocation) as total from downloadInformation where downloadLocation = 'Waterloo Shop' and appDownloaded = 'Orange Money Africa Android'
UNION ALL

SELECT 'My Orange App For Iphone' as total_downloads,  COUNT(downloadLocation) as total FROM downloadInformation WHERE downloadLocation = 'Waterloo Shop' AND appDownloaded = 'My Orange App For Iphone'
UNION ALL
SELECT 'My Orange App For Android' as total_downloads,  COUNT(downloadLocation) as total FROM downloadInformation WHERE downloadLocation = 'Waterloo Shop' AND appDownloaded = 'My Orange App For Android'
UNION ALL
SELECT 'Orange Money Africa Iphone' as total_downloads,  COUNT(downloadLocation) as total FROM downloadInformation WHERE downloadLocation = 'Waterloo Shop' AND appDownloaded = 'Orange Money Africa Iphone'
UNION ALL
SELECT 'Orange Money Africa Android' as total_downloads,  COUNT(downloadLocation) as total FROM downloadInformation WHERE downloadLocation = 'Waterloo Shop' AND appDownloaded = 'Orange Money Africa Android'
UNION ALL

SELECT 'My Orange App For Iphone' as total_downloads,  COUNT(downloadLocation) as total FROM downloadInformation WHERE downloadLocation = 'Makeni Shop' AND appDownloaded = 'My Orange App For Iphone'
UNION ALL
SELECT 'My Orange App For Android' as total_downloads,  COUNT(downloadLocation) as total FROM downloadInformation WHERE downloadLocation = 'Makeni Shop' AND appDownloaded = 'My Orange App For Android'
UNION ALL
SELECT 'Orange Money Africa Iphone' as total_downloads,  COUNT(downloadLocation) as total FROM downloadInformation WHERE downloadLocation = 'Makeni Shop' AND appDownloaded = 'Orange Money Africa Iphone'
UNION ALL
SELECT 'Orange Money Africa Android' as total_downloads,  COUNT(downloadLocation) as total FROM downloadInformation WHERE downloadLocation = 'Makeni Shop' AND appDownloaded = 'Orange Money Africa Android'
UNION ALL

SELECT 'My Orange App For Iphone' as total_downloads,  COUNT(downloadLocation) as total FROM downloadInformation WHERE downloadLocation = 'Kono Shop' AND appDownloaded = 'My Orange App For Iphone'
UNION ALL
SELECT 'My Orange App For Android' as total_downloads,  COUNT(downloadLocation) as total FROM downloadInformation WHERE downloadLocation = 'Kono Shop' AND appDownloaded = 'My Orange App For Android'
UNION ALL
SELECT 'Orange Money Africa Iphone' as total_downloads,  COUNT(downloadLocation) as total FROM downloadInformation WHERE downloadLocation = 'Kono Shop' AND appDownloaded = 'Orange Money Africa Iphone'
UNION ALL
SELECT 'Orange Money Africa Android' as total_downloads,  COUNT(downloadLocation) as total FROM downloadInformation WHERE downloadLocation = 'Kono Shop' AND appDownloaded = 'Orange Money Africa Android'
UNION ALL

SELECT 'My Orange App For Iphone' as total_downloads,  COUNT(downloadLocation) as total FROM downloadInformation WHERE downloadLocation = 'Bo Shop' AND appDownloaded = 'My Orange App For Iphone'
UNION ALL
SELECT 'My Orange App For Android' as total_downloads,  COUNT(downloadLocation) as total FROM downloadInformation WHERE downloadLocation = 'Bo Shop' AND appDownloaded = 'My Orange App For Android'
UNION ALL
SELECT 'Orange Money Africa Iphone' as total_downloads,  COUNT(downloadLocation) as total FROM downloadInformation WHERE downloadLocation = 'Bo Shop' AND appDownloaded = 'Orange Money Africa Iphone'
UNION ALL
SELECT 'Orange Money Africa Android' as total_downloads,  COUNT(downloadLocation) as total FROM downloadInformation WHERE downloadLocation = 'Bo Shop' AND appDownloaded = 'Orange Money Africa Android'
UNION ALL

SELECT 'My Orange App For Iphone' as total_downloads,  COUNT(downloadLocation) as total FROM downloadInformation WHERE downloadLocation = 'Kenema Shop' AND appDownloaded = 'My Orange App For Iphone'
UNION ALL
SELECT 'My Orange App For Android' as total_downloads,  COUNT(downloadLocation) as total FROM downloadInformation WHERE downloadLocation = 'Kenema Shop' AND appDownloaded = 'My Orange App For Android'
UNION ALL
SELECT 'Orange Money Africa Iphone' as total_downloads,  COUNT(downloadLocation) as total FROM downloadInformation WHERE downloadLocation = 'Kenema Shop' AND appDownloaded = 'Orange Money Africa Iphone'
UNION ALL
SELECT 'Orange Money Africa Android' as total_downloads,  COUNT(downloadLocation) as total FROM downloadInformation WHERE downloadLocation = 'Kenema Shop' AND appDownloaded = 'Orange Money Africa Android'
UNION ALL

SELECT 'My Orange App For Iphone' as total_downloads,  COUNT(downloadLocation) as total FROM downloadInformation WHERE downloadLocation = 'Lungi Shop' AND appDownloaded = 'My Orange App For Iphone'
UNION ALL
SELECT 'My Orange App For Android' as total_downloads,  COUNT(downloadLocation) as total FROM downloadInformation WHERE downloadLocation = 'Lungi Shop' AND appDownloaded = 'My Orange App For Android'
UNION ALL
SELECT 'Orange Money Africa Iphone' as total_downloads,  COUNT(downloadLocation) as total FROM downloadInformation WHERE downloadLocation = 'Lungi Shop' AND appDownloaded = 'Orange Money Africa Iphone'
UNION ALL
SELECT 'Orange Money Africa Android' as total_downloads,  COUNT(downloadLocation) as total FROM downloadInformation WHERE downloadLocation = 'Lungi Shop' AND appDownloaded = 'Orange Money Africa Android'
 `;
    pool.query(sql, (error, queryResult) => {
      if (error) {
        console.error("SQL Error:", error);
        return res.status(500).json({ error: "Internal Server Error" });
      }

       
        const getTotal = (result) =>
          result && result.total !== undefined ? result.total : 0;



        const my_orange_app_download_for_iphone_at_hqshop = getTotal(queryResult.rows[0])
        const my_orange_app_download_for_android_at_hqshop = getTotal(queryResult.rows[1])
        const orange_money_africa_app_download_for_iphone_at_hqshop = getTotal(queryResult.rows[2])
        const orange_money_africa_app_download_for_android_at_hqshop = getTotal(queryResult.rows[3])

        const my_orange_app_download_for_iphone_at_flagshipshop = getTotal(queryResult.rows[4])
        const my_orange_app_download_for_android_at_flagshipshop = getTotal(queryResult.rows[5])
        const orange_money_africa_app_download_for_iphone_at_flagshipshop = getTotal(queryResult.rows[6])
        const orange_money_africa_app_download_for_android_at_flagshipshop = getTotal(queryResult.rows[7])

        const my_orange_app_download_for_iphone_at_wellingtonshop = getTotal(queryResult.rows[8])
        const my_orange_app_download_for_android_at_wellingtonshop = getTotal(queryResult.rows[9])
        const orange_money_africa_app_download_for_iphone_at_wellingtonshop = getTotal(queryResult.rows[10])
        const orange_money_africa_app_download_for_android_at_wellingtonshop = getTotal(queryResult.rows[11])


        const my_orange_app_download_for_iphone_at_waterlooshop = getTotal(queryResult.rows[12])
        const my_orange_app_download_for_android_at_waterlooshop = getTotal(queryResult.rows[13])
        const orange_money_africa_app_download_for_iphone_at_waterlooshop = getTotal(queryResult.rows[14])
        const orange_money_africa_app_download_for_android_at_waterlooshop = getTotal(queryResult.rows[15])



        const my_orange_app_download_for_iphone_at_makenishop = getTotal(queryResult.rows[16])
        const my_orange_app_download_for_android_at_makenishop = getTotal(queryResult.rows[17])
        const orange_money_africa_app_download_for_iphone_at_makenishop = getTotal(queryResult.rows[18])
        const orange_money_africa_app_download_for_android_at_makenishop = getTotal(queryResult.rows[19])

        // TODO


        const my_orange_app_download_for_iphone_at_konoshop = getTotal(queryResult.rows[20])
        const my_orange_app_download_for_android_at_konoshop = getTotal(queryResult.rows[21])
        const orange_money_africa_app_download_for_iphone_at_konoshop = getTotal(queryResult.rows[22])
        const orange_money_africa_app_download_for_android_at_konoshop = getTotal(queryResult.rows[23])

        const my_orange_app_download_for_iphone_at_boshop = getTotal(queryResult.rows[24])
        const my_orange_app_download_for_android_at_boshop = getTotal(queryResult.rows[25])
        const orange_money_africa_app_download_for_iphone_at_boshop = getTotal(queryResult.rows[26])
        const orange_money_africa_app_download_for_android_at_boshop = getTotal(queryResult.rows[27])

        const my_orange_app_download_for_iphone_at_kenemashop = getTotal(queryResult.rows[28])
        const my_orange_app_download_for_android_at_kenemashop = getTotal(queryResult.rows[29])
        const orange_money_africa_app_download_for_iphone_at_kenemashop = getTotal(queryResult.rows[30])
        const orange_money_africa_app_download_for_android_at_kenemashop = getTotal(queryResult.rows[31])


        const my_orange_app_download_for_iphone_at_lungishop = getTotal(queryResult.rows[32])
        const my_orange_app_download_for_android_at_lungishop = getTotal(queryResult.rows[33])
        const orange_money_africa_app_download_for_iphone_at_lungishop = getTotal(queryResult.rows[34])
        const orange_money_africa_app_download_for_android_at_lungishop = getTotal(queryResult.rows[35])

        res.json({

            my_orange_app_download_for_iphone_at_hqshop_sum: my_orange_app_download_for_iphone_at_hqshop,
            my_orange_app_download_for_android_at_hqshop_sum: my_orange_app_download_for_android_at_hqshop,
            orange_money_africa_app_download_for_iphone_at_hqshop_sum: orange_money_africa_app_download_for_iphone_at_hqshop,
            orange_money_africa_app_download_for_android_at_hqshop_sum: orange_money_africa_app_download_for_android_at_hqshop,

            my_orange_app_download_for_iphone_at_flagshipshop_sum: my_orange_app_download_for_iphone_at_flagshipshop,
            my_orange_app_download_for_android_at_flagshipshop_sum: my_orange_app_download_for_android_at_flagshipshop,
            orange_money_africa_app_download_for_iphone_at_flagshipshop_sum: orange_money_africa_app_download_for_iphone_at_flagshipshop,
            orange_money_africa_app_download_for_android_at_flagshipshop_sum: orange_money_africa_app_download_for_android_at_flagshipshop,


            my_orange_app_download_for_iphone_at_wellingtonshop_sum: my_orange_app_download_for_iphone_at_wellingtonshop,
            my_orange_app_download_for_android_at_wellingtonshop_sum: my_orange_app_download_for_android_at_wellingtonshop,
            orange_money_africa_app_download_for_iphone_at_wellingtonshop_sum: orange_money_africa_app_download_for_iphone_at_wellingtonshop,
            orange_money_africa_app_download_for_android_at_wellingtonshop_sum: orange_money_africa_app_download_for_android_at_wellingtonshop,


            my_orange_app_download_for_iphone_at_waterlooshop_sum: my_orange_app_download_for_iphone_at_waterlooshop,
            my_orange_app_download_for_android_at_waterlooshop_sum: my_orange_app_download_for_android_at_waterlooshop,
            orange_money_africa_app_download_for_iphone_at_waterlooshop_sum: orange_money_africa_app_download_for_iphone_at_waterlooshop,
            orange_money_africa_app_download_for_android_at_waterlooshop_sum: orange_money_africa_app_download_for_android_at_waterlooshop,

            my_orange_app_download_for_iphone_at_makenishop_sum: my_orange_app_download_for_iphone_at_makenishop,
            my_orange_app_download_for_android_at_makenishop_sum: my_orange_app_download_for_android_at_makenishop,
            orange_money_africa_app_download_for_iphone_at_makenishop_sum: orange_money_africa_app_download_for_iphone_at_makenishop,
            orange_money_africa_app_download_for_android_at_makenishop_sum: orange_money_africa_app_download_for_android_at_makenishop,

            my_orange_app_download_for_iphone_at_konoshop_sum: my_orange_app_download_for_iphone_at_konoshop,
            my_orange_app_download_for_android_at_konoshop_sum: my_orange_app_download_for_android_at_konoshop,
            orange_money_africa_app_download_for_iphone_at_konoshop_sum: orange_money_africa_app_download_for_iphone_at_konoshop,
            orange_money_africa_app_download_for_android_at_konoshop_sum: orange_money_africa_app_download_for_android_at_konoshop,

            my_orange_app_download_for_iphone_at_boshop_sum: my_orange_app_download_for_iphone_at_boshop,
            my_orange_app_download_for_android_at_boshop_sum: my_orange_app_download_for_android_at_boshop,
            orange_money_africa_app_download_for_iphone_at_boshop_sum: orange_money_africa_app_download_for_iphone_at_boshop,
            orange_money_africa_app_download_for_android_at_boshop_sum: orange_money_africa_app_download_for_android_at_boshop,


            my_orange_app_download_for_iphone_at_kenemashop_sum: my_orange_app_download_for_iphone_at_kenemashop,
            my_orange_app_download_for_android_at_kenemashop_sum: my_orange_app_download_for_android_at_kenemashop,
            orange_money_africa_app_download_for_iphone_at_kenemashop_sum: orange_money_africa_app_download_for_iphone_at_kenemashop,
            orange_money_africa_app_download_for_android_at_kenemashop_sum: orange_money_africa_app_download_for_android_at_kenemashop,

            //TODO

            my_orange_app_download_for_iphone_at_lungishop_sum: my_orange_app_download_for_iphone_at_lungishop,
            my_orange_app_download_for_android_at_lungishop_sum: my_orange_app_download_for_android_at_lungishop,
            orange_money_africa_app_download_for_iphone_at_lungishop_sum: orange_money_africa_app_download_for_iphone_at_lungishop,
            orange_money_africa_app_download_for_android_at_lungishop_sum: orange_money_africa_app_download_for_android_at_lungishop,

        });

    });
});


router.get('/oneWeek', (req, res) => {
    const sql = `
SELECT 'my_orange_app_download_for_iphone_at_hqshop' as total_downloads,  COUNT(downloadLocation) as total FROM downloadInformation WHERE downloadLocation = 'Headquarter Shop' AND appDownloaded = 'My Orange App For Iphone' AND createdAt >= CURRENT_DATE - INTERVAL '1 week'
UNION ALL
SELECT 'my_orange_app_download_for_android_at_hqshop' as total_downloads,  COUNT(downloadLocation) as total FROM downloadInformation WHERE downloadLocation = 'Headquarter Shop' AND appDownloaded = 'My Orange App For Android' AND createdAt >= CURRENT_DATE - INTERVAL '1 week'
UNION ALL
SELECT 'orange_money_africa_app_download_for_iphone_at_hqshop' as total_downloads,  COUNT(downloadLocation) as total FROM downloadInformation WHERE downloadLocation = 'Headquarter Shop' AND appDownloaded = 'Orange Money Africa Iphone' AND createdAt >= CURRENT_DATE - INTERVAL '1 week'
UNION ALL
SELECT 'orange_money_africa_app_download_for_android_at_hqshop' as total_downloads,  COUNT(downloadLocation) as total FROM downloadInformation WHERE downloadLocation = 'Headquarter Shop' AND appDownloaded = 'Orange Money Africa Android' AND createdAt >= CURRENT_DATE - INTERVAL '1 week'

UNION ALL

SELECT 'my_orange_app_download_for_iphone_at_flagshipshop' as total_downloads, COUNT(downloadLocation) as total FROM downloadInformation WHERE downloadLocation = 'Flagship Shop'AND appDownloaded = 'My Orange App For Iphone' AND createdAt >= CURRENT_DATE - INTERVAL '1 week'
UNION ALL
SELECT 'my_orange_app_download_for_android_at_flagshipshop' as total_downloads,  COUNT(downloadLocation) as total FROM downloadInformation WHERE downloadLocation = 'Flagship Shop' AND appDownloaded = 'My Orange App For Iphone' AND createdAt >= CURRENT_DATE - INTERVAL '1 week'
UNION ALL
SELECT 'my_orange_app_download_for_android_at_hqshop' as total_downloads,  COUNT(downloadLocation) as total FROM downloadInformation WHERE downloadLocation = 'Flagship Shop' AND appDownloaded = 'My Orange App For Android' AND createdAt >= CURRENT_DATE - INTERVAL '1 week'
UNION ALL
SELECT 'orange_money_africa_app_download_for_iphone_at_flagshipshop' as total_downloads,  COUNT(downloadLocation) as total FROM downloadInformation WHERE downloadLocation = 'Flagship Shop' AND appDownloaded = 'Orange Money Africa Iphone' AND createdAt >= CURRENT_DATE - INTERVAL '1 week'
UNION ALL
SELECT 'orange_money_africa_app_download_for_android_at_flagshipshop' as total_downloads,  COUNT(downloadLocation) as total FROM downloadInformation WHERE downloadLocation = 'Flagship Shop' AND appDownloaded = 'Orange Money Africa Android' AND createdAt >= CURRENT_DATE - INTERVAL '1 week'

UNION ALL

SELECT 'my_orange_app_download_for_android_at_wellingtonshop' as total_downloads,  COUNT(downloadLocation) as total FROM downloadInformation WHERE downloadLocation = 'Wellington Shop' AND appDownloaded = 'My Orange App For Iphone' AND createdAt >= CURRENT_DATE - INTERVAL '1 week'
UNION ALL
SELECT 'orange_money_africa_app_download_for_iphone_at_wellingtonshop' as total_downloads,  COUNT(downloadLocation) as total FROM downloadInformation WHERE downloadLocation = 'Wellington Shop' AND appDownloaded = 'My Orange App For Android' AND createdAt >= CURRENT_DATE - INTERVAL '1 week'
UNION ALL
SELECT 'orange_money_africa_app_download_for_iphone_at_flagshipshop' as total_downloads,  COUNT(downloadLocation) as total FROM downloadInformation WHERE downloadLocation = 'Wellington Shop' AND appDownloaded = 'Orange Money Africa Iphone' AND createdAt >= CURRENT_DATE - INTERVAL '1 week'
UNION ALL
SELECT 'orange_money_africa_app_download_for_android_at_wellingtonshop' as total_downloads,  COUNT(downloadLocation) as total FROM downloadInformation WHERE downloadLocation = 'Wellington Shop' AND appDownloaded = 'Orange Money Africa Android' AND createdAt >= CURRENT_DATE - INTERVAL '1 week'

UNION ALL


SELECT 'my_orange_app_download_for_iphone_at_waterlooshop' as total_downloads,  COUNT(downloadLocation) as total FROM downloadInformation WHERE downloadLocation = 'Waterloo Shop' AND appDownloaded = 'My Orange App For Iphone' AND createdAt >= CURRENT_DATE - INTERVAL '1 week'
UNION ALL
SELECT 'my_orange_app_download_for_android_at_waterlooshop' as total_downloads,  COUNT(downloadLocation) as total FROM downloadInformation WHERE downloadLocation = 'Waterloo Shop' AND appDownloaded = 'My Orange App For Android' AND createdAt >= CURRENT_DATE - INTERVAL '1 week'
UNION ALL
SELECT 'orange_money_africa_app_download_for_iphone_at_waterlooshop' as total_downloads,  COUNT(downloadLocation) as total FROM downloadInformation WHERE downloadLocation = 'Waterloo Shop' AND appDownloaded = 'Orange Money Africa Iphone' AND createdAt >= CURRENT_DATE - INTERVAL '1 week'
UNION ALL
SELECT 'orange_money_africa_app_download_for_android_at_waterlooshop' as total_downloads,  COUNT(downloadLocation) as total FROM downloadInformation WHERE downloadLocation = 'Waterloo Shop' AND appDownloaded = 'Orange Money Africa Android' AND createdAt >= CURRENT_DATE - INTERVAL '1 week'

UNION ALL

SELECT 'my_orange_app_download_for_iphone_at_makenishop' as total_downloads,  COUNT(downloadLocation) as total FROM downloadInformation WHERE downloadLocation = 'Makeni Shop' AND appDownloaded = 'My Orange App For Iphone' AND createdAt >= CURRENT_DATE - INTERVAL '1 week'
UNION ALL
SELECT 'my_orange_app_download_for_android_at_makenishop' as total_downloads,  COUNT(downloadLocation) as total FROM downloadInformation WHERE downloadLocation = 'Makeni Shop' AND appDownloaded = 'My Orange App For Android' AND createdAt >= CURRENT_DATE - INTERVAL '1 week'
UNION ALL
SELECT 'orange_money_africa_app_download_for_iphone_at_makenishop' as total_downloads,  COUNT(downloadLocation) as total FROM downloadInformation WHERE downloadLocation = 'Makeni Shop' AND appDownloaded = 'Orange Money Africa Iphone' AND createdAt >= CURRENT_DATE - INTERVAL '1 week'
UNION ALL
SELECT 'orange_money_africa_app_download_for_android_at_makenishop' as total_downloads,  COUNT(downloadLocation) as total FROM downloadInformation WHERE downloadLocation = 'Makeni Shop' AND appDownloaded = 'Orange Money Africa Android' AND createdAt >= CURRENT_DATE - INTERVAL '1 week'

UNION ALL

SELECT 'my_orange_app_download_for_iphone_at_konoshop' as total_downloads,  COUNT(downloadLocation) as total FROM downloadInformation WHERE downloadLocation = 'Kono Shop' AND appDownloaded = 'My Orange App For Iphone' AND createdAt >= CURRENT_DATE - INTERVAL '1 week'
UNION ALL
SELECT 'my_orange_app_download_for_android_at_konoshop' as total_downloads,  COUNT(downloadLocation) as total FROM downloadInformation WHERE downloadLocation = 'Kono Shop' AND appDownloaded = 'My Orange App For Android' AND createdAt >= CURRENT_DATE - INTERVAL '1 week'
UNION ALL
SELECT 'orange_money_africa_app_download_for_iphone_at_konoshop' as total_downloads,  COUNT(downloadLocation) as total FROM downloadInformation WHERE downloadLocation = 'Kono Shop' AND appDownloaded = 'Orange Money Africa Iphone' AND createdAt >= CURRENT_DATE - INTERVAL '1 week'
UNION ALL
SELECT 'orange_money_africa_app_download_for_android_at_konoshop' as total_downloads,  COUNT(downloadLocation) as total FROM downloadInformation WHERE downloadLocation = 'Kono Shop' AND appDownloaded = 'Orange Money Africa Android' AND createdAt >= CURRENT_DATE - INTERVAL '1 week'

UNION ALL

SELECT 'my_orange_app_download_for_iphone_at_boshop' as total_downloads,  COUNT(downloadLocation) as total FROM downloadInformation WHERE downloadLocation = 'Bo Shop' AND appDownloaded = 'My Orange App For Iphone' AND createdAt >= CURRENT_DATE - INTERVAL '1 week'
UNION ALL
SELECT 'my_orange_app_download_for_android_at_boshop' as total_downloads,  COUNT(downloadLocation) as total FROM downloadInformation WHERE downloadLocation = 'Bo Shop' AND appDownloaded = 'My Orange App For Android' AND createdAt >= CURRENT_DATE - INTERVAL '1 week'
UNION ALL
SELECT 'orange_money_africa_app_download_for_iphone_at_boshop' as total_downloads,  COUNT(downloadLocation) as total FROM downloadInformation WHERE downloadLocation = 'Bo Shop' AND appDownloaded = 'Orange Money Africa Iphone' AND createdAt >= CURRENT_DATE - INTERVAL '1 week'
UNION ALL
SELECT 'orange_money_africa_app_download_for_android_at_boshop' as total_downloads,  COUNT(downloadLocation) as total FROM downloadInformation WHERE downloadLocation = 'Bo Shop' AND appDownloaded = 'Orange Money Africa Android' AND createdAt >= CURRENT_DATE - INTERVAL '1 week'

UNION ALL

SELECT 'my_orange_app_download_for_iphone_at_kenemashop' as total_downloads,  COUNT(downloadLocation) as total FROM downloadInformation WHERE downloadLocation = 'Kenema Shop' AND appDownloaded = 'My Orange App For Iphone' AND createdAt >= CURRENT_DATE - INTERVAL '1 week'
UNION ALL
SELECT 'my_orange_app_download_for_android_at_kenemashop' as total_downloads,  COUNT(downloadLocation) as total FROM downloadInformation WHERE downloadLocation = 'Kenema Shop' AND appDownloaded = 'My Orange App For Android' AND createdAt >= CURRENT_DATE - INTERVAL '1 week'
UNION ALL
SELECT 'orange_money_africa_app_download_for_iphone_at_kenemashop' as total_downloads,  COUNT(downloadLocation) as total FROM downloadInformation WHERE downloadLocation = 'Kenema Shop' AND appDownloaded = 'Orange Money Africa Iphone' AND createdAt >= CURRENT_DATE - INTERVAL '1 week'
UNION ALL
SELECT 'orange_money_africa_app_download_for_android_at_kenemashop' as total_downloads,  COUNT(downloadLocation) as total FROM downloadInformation WHERE downloadLocation = 'Kenema Shop' AND appDownloaded = 'Orange Money Africa Android' AND createdAt >= CURRENT_DATE - INTERVAL '1 week'

UNION ALL

SELECT 'my_orange_app_download_for_iphone_at_lungishop' as total_downloads,  COUNT(downloadLocation) as total FROM downloadInformation WHERE downloadLocation = 'Lungi Shop' AND appDownloaded = 'My Orange App For Iphone' AND createdAt >= CURRENT_DATE - INTERVAL '1 week'
UNION ALL
SELECT 'my_orange_app_download_for_android_at_lungishop' as total_downloads,  COUNT(downloadLocation) as total FROM downloadInformation WHERE downloadLocation = 'Lungi Shop' AND appDownloaded = 'My Orange App For Android' AND createdAt >= CURRENT_DATE - INTERVAL '1 week'
UNION ALL
SELECT 'orange_money_africa_app_download_for_iphone_at_lungishop' as total_downloads,  COUNT(downloadLocation) as total FROM downloadInformation WHERE downloadLocation = 'Lungi Shop' AND appDownloaded = 'Orange Money Africa Iphone' AND createdAt >= CURRENT_DATE - INTERVAL '1 week'
UNION ALL
SELECT 'orange_money_africa_app_download_for_android_at_lungishop' as total_downloads,  COUNT(downloadLocation) as total FROM downloadInformation WHERE downloadLocation = 'Lungi Shop' AND appDownloaded = 'Orange Money Africa Android' AND createdAt >= CURRENT_DATE - INTERVAL '1 week'

    `;
    pool.query(sql, (error, queryResult) => {
        if (error) {
            console.error("Error executing the query:", error);
            throw error;
        }
        // const successfulTotalSum = getTotal(queryResult.rows[0]);
        // const unsuccessfulTotalSum = queryResult.rows[1].total;
  
        const getTotal = (result) => (result && result.total !== undefined) ? result.total : 0;

        console.log(queryResult.rows);

        const my_orange_app_download_for_iphone_at_hqshop = getTotal(queryResult.rows[0]);
        const my_orange_app_download_for_android_at_hqshop = getTotal(queryResult.rows[1]);
        const orange_money_africa_app_download_for_iphone_at_hqshop = getTotal(
            queryResult.rows[2]
        );
        const orange_money_africa_app_download_for_android_at_hqshop = getTotal(
            queryResult.rows[3]
        );

        const my_orange_app_download_for_iphone_at_flagshipshop = getTotal(
            queryResult.rows[0]
        );
        const my_orange_app_download_for_android_at_flagshipshop = getTotal(
            queryResult.rows[0]
        );
        const orange_money_africa_app_download_for_iphone_at_flagshipshop =
            getTotal(queryResult.rows[0]);
        const orange_money_africa_app_download_for_android_at_flagshipshop =
            getTotal(queryResult.rows[0]);

        const my_orange_app_download_for_iphone_at_wellingtonshop = getTotal(
            queryResult.rows[0]
        );
        const my_orange_app_download_for_android_at_wellingtonshop = getTotal(
            queryResult.rows[0]
        );
        const orange_money_africa_app_download_for_iphone_at_wellingtonshop =
            getTotal(queryResult.rows[0]);
        const orange_money_africa_app_download_for_android_at_wellingtonshop =
            getTotal(queryResult.rows[0]);

        const my_orange_app_download_for_iphone_at_waterlooshop = getTotal(
            queryResult.rows[0]
        );
        const my_orange_app_download_for_android_at_waterlooshop = getTotal(
            queryResult.rows[0]
        );
        const orange_money_africa_app_download_for_iphone_at_waterlooshop =
            getTotal(queryResult.rows[0]);
        const orange_money_africa_app_download_for_android_at_waterlooshop =
            getTotal(queryResult.rows[0]);

        const my_orange_app_download_for_iphone_at_makenishop = getTotal(
            queryResult.rows[0]
        );
        const my_orange_app_download_for_android_at_makenishop = getTotal(
            queryResult.rows[0]
        );
        const orange_money_africa_app_download_for_iphone_at_makenishop =
            getTotal(queryResult.rows[0]);
        const orange_money_africa_app_download_for_android_at_makenishop =
            getTotal(queryResult.rows[0]);

        // TODO

        const my_orange_app_download_for_iphone_at_konoshop = getTotal(
            queryResult.rows[0]
        );
        const my_orange_app_download_for_android_at_konoshop = getTotal(
            queryResult.rows[0]
        );
        const orange_money_africa_app_download_for_iphone_at_konoshop = getTotal(
            queryResult.rows[0]
        );
        const orange_money_africa_app_download_for_android_at_konoshop = getTotal(
            queryResult.rows[0]
        );

        const my_orange_app_download_for_iphone_at_boshop = getTotal(queryResult.rows[0]);
        const my_orange_app_download_for_android_at_boshop = getTotal(queryResult.rows[0]);
        const orange_money_africa_app_download_for_iphone_at_boshop = getTotal(
            queryResult.rows[0]
        );
        const orange_money_africa_app_download_for_android_at_boshop = getTotal(
            queryResult.rows[0]
        );

        const my_orange_app_download_for_iphone_at_kenemashop = getTotal(
            queryResult.rows[0]
        );
        const my_orange_app_download_for_android_at_kenemashop = getTotal(
            queryResult.rows[0]
        );
        const orange_money_africa_app_download_for_iphone_at_kenemashop =
            getTotal(queryResult.rows[0]);
        const orange_money_africa_app_download_for_android_at_kenemashop =
            getTotal(queryResult.rows[0]);

        const my_orange_app_download_for_iphone_at_lungishop = getTotal(
            queryResult.rows[0]
        );
        const my_orange_app_download_for_android_at_lungishop = getTotal(
            queryResult.rows[0]
        );
        const orange_money_africa_app_download_for_iphone_at_lungishop = getTotal(
            queryResult.rows[0]
        );
        const orange_money_africa_app_download_for_android_at_lungishop =
            getTotal(queryResult.rows[0]);

        res.json({
            my_orange_app_download_for_iphone_at_hqshop_sum:
                my_orange_app_download_for_iphone_at_hqshop,
            my_orange_app_download_for_android_at_hqshop_sum:
                my_orange_app_download_for_android_at_hqshop,
            orange_money_africa_app_download_for_iphone_at_hqshop_sum:
                orange_money_africa_app_download_for_iphone_at_hqshop,
            orange_money_africa_app_download_for_android_at_hqshop_sum:
                orange_money_africa_app_download_for_android_at_hqshop,

            my_orange_app_download_for_iphone_at_flagshipshop_sum:
                my_orange_app_download_for_iphone_at_flagshipshop,
            my_orange_app_download_for_android_at_flagshipshop_sum:
                my_orange_app_download_for_android_at_flagshipshop,
            orange_money_africa_app_download_for_iphone_at_flagshipshop_sum:
                orange_money_africa_app_download_for_iphone_at_flagshipshop,
            orange_money_africa_app_download_for_android_at_flagshipshop_sum:
                orange_money_africa_app_download_for_android_at_flagshipshop,

            my_orange_app_download_for_iphone_at_wellingtonshop_sum:
                my_orange_app_download_for_iphone_at_wellingtonshop,
            my_orange_app_download_for_android_at_wellingtonshop_sum:
                my_orange_app_download_for_android_at_wellingtonshop,
            orange_money_africa_app_download_for_iphone_at_wellingtonshop_sum:
                orange_money_africa_app_download_for_iphone_at_wellingtonshop,
            orange_money_africa_app_download_for_android_at_wellingtonshop_sum:
                orange_money_africa_app_download_for_android_at_wellingtonshop,

            my_orange_app_download_for_iphone_at_waterlooshop_sum:
                my_orange_app_download_for_iphone_at_waterlooshop,
            my_orange_app_download_for_android_at_waterlooshop_sum:
                my_orange_app_download_for_android_at_waterlooshop,
            orange_money_africa_app_download_for_iphone_at_waterlooshop_sum:
                orange_money_africa_app_download_for_iphone_at_waterlooshop,
            orange_money_africa_app_download_for_android_at_waterlooshop_sum:
                orange_money_africa_app_download_for_android_at_waterlooshop,

            my_orange_app_download_for_iphone_at_makenishop_sum:
                my_orange_app_download_for_iphone_at_makenishop,
            my_orange_app_download_for_android_at_makenishop_sum:
                my_orange_app_download_for_android_at_makenishop,
            orange_money_africa_app_download_for_iphone_at_makenishop_sum:
                orange_money_africa_app_download_for_iphone_at_makenishop,
            orange_money_africa_app_download_for_android_at_makenishop_sum:
                orange_money_africa_app_download_for_android_at_makenishop,

            my_orange_app_download_for_iphone_at_konoshop_sum:
                my_orange_app_download_for_iphone_at_konoshop,
            my_orange_app_download_for_android_at_konoshop_sum:
                my_orange_app_download_for_android_at_konoshop,
            orange_money_africa_app_download_for_iphone_at_konoshop_sum:
                orange_money_africa_app_download_for_iphone_at_konoshop,
            orange_money_africa_app_download_for_android_at_konoshop_sum:
                orange_money_africa_app_download_for_android_at_konoshop,

            my_orange_app_download_for_iphone_at_boshop_sum:
                my_orange_app_download_for_iphone_at_boshop,
            my_orange_app_download_for_android_at_boshop_sum:
                my_orange_app_download_for_android_at_boshop,
            orange_money_africa_app_download_for_iphone_at_boshop_sum:
                orange_money_africa_app_download_for_iphone_at_boshop,
            orange_money_africa_app_download_for_android_at_boshop_sum:
                orange_money_africa_app_download_for_android_at_boshop,

            my_orange_app_download_for_iphone_at_kenemashop_sum:
                my_orange_app_download_for_iphone_at_kenemashop,
            my_orange_app_download_for_android_at_kenemashop_sum:
                my_orange_app_download_for_android_at_kenemashop,
            orange_money_africa_app_download_for_iphone_at_kenemashop_sum:
                orange_money_africa_app_download_for_iphone_at_kenemashop,
            orange_money_africa_app_download_for_android_at_kenemashop_sum:
                orange_money_africa_app_download_for_android_at_kenemashop,

            //TODO

            my_orange_app_download_for_iphone_at_lungishop_sum:
                my_orange_app_download_for_iphone_at_lungishop,
            my_orange_app_download_for_android_at_lungishop_sum:
                my_orange_app_download_for_android_at_lungishop,
            orange_money_africa_app_download_for_iphone_at_lungishop_sum:
                orange_money_africa_app_download_for_iphone_at_lungishop,
            orange_money_africa_app_download_for_android_at_lungishop_sum:
                orange_money_africa_app_download_for_android_at_lungishop
        });
    });
})
   


router.get('/oneMonth', (req, res) => {
    const sql = `
SELECT 'my_orange_app_download_for_iphone_at_hqshop' as total_downloads, count(downloadLocation) as total from downloadInformation where downloadLocation = 'Headquarter Shop' and appDownloaded = 'My Orange App For Iphone' AND createdAt >= CURRENT_DATE - INTERVAL '1 MONTH'
UNION ALL
SELECT 'my_orange_app_download_for_android_at_hqshop' as total_downloads, count(downloadLocation) as total from downloadInformation where downloadLocation = 'Headquarter Shop' and appDownloaded = 'My Orange App For Android' AND createdAt >= CURRENT_DATE - INTERVAL '1 MONTH'
UNION ALL
SELECT 'orange_money_africa_app_download_for_iphone_at_hqshop' as total_downloads, count(downloadLocation) as total from downloadInformation where downloadLocation = 'Headquarter Shop' and appDownloaded = 'Orange Money Africa Iphone' AND createdAt >= CURRENT_DATE - INTERVAL '1 MONTH'
UNION ALL
SELECT 'orange_money_africa_app_download_for_android_at_hqshop' as total_downloads, count(downloadLocation) as total from downloadInformation where downloadLocation = 'Headquarter Shop' and appDownloaded = 'Orange Money Africa Android' AND createdAt >= CURRENT_DATE - INTERVAL '1 MONTH'

UNION ALL

SELECT 'my_orange_app_download_for_iphone_at_flagshipshop' as total_downloads, count(downloadLocation) as total from downloadInformation where downloadLocation = 'Flagship Shop' and appDownloaded = 'My Orange App For Iphone' AND createdAt >= CURRENT_DATE - INTERVAL '1 MONTH'
UNION ALL
SELECT 'my_orange_app_download_for_android_at_flagshipshop' as total_downloads, count(downloadLocation) as total from downloadInformation where downloadLocation = 'Flagship Shop' and appDownloaded = 'My Orange App For Android' AND createdAt >= CURRENT_DATE - INTERVAL '1 MONTH'
UNION ALL
SELECT 'orange_money_africa_app_download_for_iphone_at_flagshipshop' as total_downloads, count(downloadLocation) as total from downloadInformation where downloadLocation = 'Flagship Shop' and appDownloaded = 'Orange Money Africa Iphone' AND createdAt >= CURRENT_DATE - INTERVAL '1 MONTH'
UNION ALL
SELECT 'orange_money_africa_app_download_for_android_at_flagshipshop' as total_downloads, count(downloadLocation) as total from downloadInformation where downloadLocation = 'Flagship Shop' and appDownloaded = 'Orange Money Africa Android' AND createdAt >= CURRENT_DATE - INTERVAL '1 MONTH'

UNION ALL

SELECT 'my_orange_app_download_for_iphone_at_wellingtonshop' as total_downloads, count(downloadLocation) as total from downloadInformation where downloadLocation = 'Wellington Shop' and appDownloaded = 'My Orange App For Iphone' AND createdAt >= CURRENT_DATE - INTERVAL '1 MONTH'
UNION ALL
SELECT 'my_orange_app_download_for_android_at_wellingtonshop' as total_downloads, count(downloadLocation) as total from downloadInformation where downloadLocation = 'Wellington Shop' and appDownloaded = 'My Orange App For Android' AND createdAt >= CURRENT_DATE - INTERVAL '1 MONTH'
UNION ALL
SELECT 'orange_money_africa_app_download_for_iphone_at_wellingtonshop' as total_downloads, count(downloadLocation) as total from downloadInformation where downloadLocation = 'Wellington Shop' and appDownloaded = 'Orange Money Africa Iphone' AND createdAt >= CURRENT_DATE - INTERVAL '1 MONTH'
UNION ALL
SELECT 'orange_money_africa_app_download_for_android_at_wellingtonshop' as total_downloads, count(downloadLocation) as total from downloadInformation where downloadLocation = 'Wellington Shop' and appDownloaded = 'Orange Money Africa Android' AND createdAt >= CURRENT_DATE - INTERVAL '1 MONTH'

UNION ALL

SELECT 'my_orange_app_download_for_iphone_at_waterlooshop' as total_downloads, count(downloadLocation) as total from downloadInformation where downloadLocation = 'Waterloo Shop' and appDownloaded = 'My Orange App For Iphone' AND createdAt >= CURRENT_DATE - INTERVAL '1 MONTH'
UNION ALL
SELECT 'my_orange_app_download_for_android_at_waterlooshop' as total_downloads, count(downloadLocation) as total from downloadInformation where downloadLocation = 'Waterloo Shop' and appDownloaded = 'My Orange App For Android' AND createdAt >= CURRENT_DATE - INTERVAL '1 MONTH'
UNION ALL
SELECT 'orange_money_africa_app_download_for_iphone_at_waterlooshop' as total_downloads, count(downloadLocation) as total from downloadInformation where downloadLocation = 'Waterloo Shop' and appDownloaded = 'Orange Money Africa Iphone' AND createdAt >= CURRENT_DATE - INTERVAL '1 MONTH'
UNION ALL
SELECT 'orange_money_africa_app_download_for_android_at_waterlooshop' as total_downloads, count(downloadLocation) as total from downloadInformation where downloadLocation = 'Waterloo Shop' and appDownloaded = 'Orange Money Africa Android' AND createdAt >= CURRENT_DATE - INTERVAL '1 MONTH'

UNION ALL

SELECT 'my_orange_app_download_for_iphone_at_makenishop' as total_downloads, count(downloadLocation) as total from downloadInformation where downloadLocation = 'Makeni Shop' and appDownloaded = 'My Orange App For Iphone' AND createdAt >= CURRENT_DATE - INTERVAL '1 MONTH'
UNION ALL
SELECT 'my_orange_app_download_for_android_at_makenishop' as total_downloads, count(downloadLocation) as total from downloadInformation where downloadLocation = 'Makeni Shop' and appDownloaded = 'My Orange App For Android' AND createdAt >= CURRENT_DATE - INTERVAL '1 MONTH'
UNION ALL
SELECT 'orange_money_africa_app_download_for_iphone_at_makenishop' as total_downloads, count(downloadLocation) as total from downloadInformation where downloadLocation = 'Makeni Shop' and appDownloaded = 'Orange Money Africa Iphone' AND createdAt >= CURRENT_DATE - INTERVAL '1 MONTH'
UNION ALL
SELECT 'orange_money_africa_app_download_for_android_at_makenishop' as total_downloads, count(downloadLocation) as total from downloadInformation where downloadLocation = 'Makeni Shop' and appDownloaded = 'Orange Money Africa Android' AND createdAt >= CURRENT_DATE - INTERVAL '1 MONTH'

UNION ALL

SELECT 'my_orange_app_download_for_iphone_at_konoshop' as total_downloads, count(downloadLocation) as total from downloadInformation where downloadLocation = 'Kono Shop' and appDownloaded = 'My Orange App For Iphone' AND createdAt >= CURRENT_DATE - INTERVAL '1 MONTH'
UNION ALL
SELECT 'my_orange_app_download_for_android_at_konoshop' as total_downloads, count(downloadLocation) as total from downloadInformation where downloadLocation = 'Kono Shop' and appDownloaded = 'My Orange App For Android' AND createdAt >= CURRENT_DATE - INTERVAL '1 MONTH'
UNION ALL
SELECT 'orange_money_africa_app_download_for_iphone_at_konoshop' as total_downloads, count(downloadLocation) as total from downloadInformation where downloadLocation = 'Kono Shop' and appDownloaded = 'Orange Money Africa Iphone' AND createdAt >= CURRENT_DATE - INTERVAL '1 MONTH'
UNION ALL
SELECT 'orange_money_africa_app_download_for_android_at_konoshop' as total_downloads, count(downloadLocation) as total from downloadInformation where downloadLocation = 'Kono Shop' and appDownloaded = 'Orange Money Africa Android' AND createdAt >= CURRENT_DATE - INTERVAL '1 MONTH'

UNION ALL

SELECT 'my_orange_app_download_for_iphone_at_boshop' as total_downloads, count(downloadLocation) as total from downloadInformation where downloadLocation = 'Bo Shop' and appDownloaded = 'My Orange App For Iphone' AND createdAt >= CURRENT_DATE - INTERVAL '1 MONTH'
UNION ALL
SELECT 'my_orange_app_download_for_android_at_boshop' as total_downloads, count(downloadLocation) as total from downloadInformation where downloadLocation = 'Bo Shop' and appDownloaded = 'My Orange App For Android' AND createdAt >= CURRENT_DATE - INTERVAL '1 MONTH'
UNION ALL
SELECT 'orange_money_africa_app_download_for_iphone_at_boshop' as total_downloads, count(downloadLocation) as total from downloadInformation where downloadLocation = 'Bo Shop' and appDownloaded = 'Orange Money Africa Iphone' AND createdAt >= CURRENT_DATE - INTERVAL '1 MONTH'
UNION ALL
SELECT 'orange_money_africa_app_download_for_android_at_boshop' as total_downloads, count(downloadLocation) as total from downloadInformation where downloadLocation = 'Bo Shop' and appDownloaded = 'Orange Money Africa Android' AND createdAt >= CURRENT_DATE - INTERVAL '1 MONTH'

UNION ALL

SELECT 'my_orange_app_download_for_iphone_at_kenemashop' as total_downloads, count(downloadLocation) as total from downloadInformation where downloadLocation = 'Kenema Shop' and appDownloaded = 'My Orange App For Iphone' AND createdAt >= CURRENT_DATE - INTERVAL '1 MONTH'
UNION ALL
SELECT 'my_orange_app_download_for_android_at_kenemashop' as total_downloads, count(downloadLocation) as total from downloadInformation where downloadLocation = 'Kenema Shop' and appDownloaded = 'My Orange App For Android' AND createdAt >= CURRENT_DATE - INTERVAL '1 MONTH'
UNION ALL 
SELECT 'orange_money_africa_app_download_for_iphone_at_kenemashop' as total_downloads, count(downloadLocation) as total from downloadInformation where downloadLocation = 'Kenema Shop' and appDownloaded = 'Orange Money Africa Iphone' AND createdAt >= CURRENT_DATE - INTERVAL '1 MONTH'
UNION ALL
SELECT 'orange_money_africa_app_download_for_android_at_kenemashop' as total_downloads, count(downloadLocation) as total from downloadInformation where downloadLocation = 'Kenema Shop' and appDownloaded = 'Orange Money Africa Android' AND createdAt >= CURRENT_DATE - INTERVAL '1 MONTH'

UNION ALL

SELECT 'my_orange_app_download_for_iphone_at_lungishop' as total_downloads, count(downloadLocation) as total from downloadInformation where downloadLocation = 'Lungi Shop' and appDownloaded = 'My Orange App For Iphone' AND createdAt >= CURRENT_DATE - INTERVAL '1 MONTH'
UNION ALL
SELECT 'my_orange_app_download_for_android_at_lungishop' as total_downloads, count(downloadLocation) as total from downloadInformation where downloadLocation = 'Lungi Shop' and appDownloaded = 'My Orange App For Android' AND createdAt >= CURRENT_DATE - INTERVAL '1 MONTH'
UNION ALL
SELECT 'orange_money_africa_app_download_for_iphone_at_lungishop' as total_downloads, count(downloadLocation) as total from downloadInformation where downloadLocation = 'Lungi Shop' and appDownloaded = 'Orange Money Africa Iphone' AND createdAt >= CURRENT_DATE - INTERVAL '1 MONTH'
UNION ALL
SELECT 'orange_money_africa_app_download_for_android_at_lungishop' as total_downloads, count(downloadLocation) as total from downloadInformation where downloadLocation = 'Lungi Shop' and appDownloaded = 'Orange Money Africa Android' AND createdAt >= CURRENT_DATE - INTERVAL '1 MONTH';

    `;
    pool.query(sql, (error, queryResult) => {
        if (error) {
            throw error;
        }
        // const successfulTotalSum = getTotal(queryResult.rows[0]);
        // const unsuccessfulTotalSum = queryResult.rows[1].total;

        const getTotal = (result) => (result && result.total !== undefined) ? result.total : 0;
        console.log(getTotal)

        const my_orange_app_download_for_iphone_at_hqshop = getTotal(queryResult.rows[0])
        const my_orange_app_download_for_android_at_hqshop = getTotal(queryResult.rows[1])
        const orange_money_africa_app_download_for_iphone_at_hqshop = getTotal(queryResult.rows[2])
        const orange_money_africa_app_download_for_android_at_hqshop = getTotal(queryResult.rows[3])

        const my_orange_app_download_for_iphone_at_flagshipshop = getTotal(queryResult.rows[4])
        const my_orange_app_download_for_android_at_flagshipshop = getTotal(queryResult.rows[5])
        const orange_money_africa_app_download_for_iphone_at_flagshipshop = getTotal(queryResult.rows[6])
        const orange_money_africa_app_download_for_android_at_flagshipshop = getTotal(queryResult.rows[7])

        const my_orange_app_download_for_iphone_at_wellingtonshop = getTotal(queryResult.rows[8])
        const my_orange_app_download_for_android_at_wellingtonshop = getTotal(queryResult.rows[9])
        const orange_money_africa_app_download_for_iphone_at_wellingtonshop = getTotal(queryResult.rows[10])
        const orange_money_africa_app_download_for_android_at_wellingtonshop = getTotal(queryResult.rows[11])


        const my_orange_app_download_for_iphone_at_waterlooshop = getTotal(queryResult.rows[12])
        const my_orange_app_download_for_android_at_waterlooshop = getTotal(queryResult.rows[13])
        const orange_money_africa_app_download_for_iphone_at_waterlooshop = getTotal(queryResult.rows[14])
        const orange_money_africa_app_download_for_android_at_waterlooshop = getTotal(queryResult.rows[15])



        const my_orange_app_download_for_iphone_at_makenishop = getTotal(queryResult.rows[16])
        const my_orange_app_download_for_android_at_makenishop = getTotal(queryResult.rows[17])
        const orange_money_africa_app_download_for_iphone_at_makenishop = getTotal(queryResult.rows[18])
        const orange_money_africa_app_download_for_android_at_makenishop = getTotal(queryResult.rows[19])

        // TODO


        const my_orange_app_download_for_iphone_at_konoshop = getTotal(queryResult.rows[20])
        const my_orange_app_download_for_android_at_konoshop = getTotal(queryResult.rows[21])
        const orange_money_africa_app_download_for_iphone_at_konoshop = getTotal(queryResult.rows[22])
        const orange_money_africa_app_download_for_android_at_konoshop = getTotal(queryResult.rows[23])

        const my_orange_app_download_for_iphone_at_boshop = getTotal(queryResult.rows[24])
        const my_orange_app_download_for_android_at_boshop = getTotal(queryResult.rows[25])
        const orange_money_africa_app_download_for_iphone_at_boshop = getTotal(queryResult.rows[26])
        const orange_money_africa_app_download_for_android_at_boshop = getTotal(queryResult.rows[27])

        const my_orange_app_download_for_iphone_at_kenemashop = getTotal(queryResult.rows[28])
        const my_orange_app_download_for_android_at_kenemashop = getTotal(queryResult.rows[29])
        const orange_money_africa_app_download_for_iphone_at_kenemashop = getTotal(queryResult.rows[30])
        const orange_money_africa_app_download_for_android_at_kenemashop = getTotal(queryResult.rows[31])


        const my_orange_app_download_for_iphone_at_lungishop = getTotal(queryResult.rows[32])
        const my_orange_app_download_for_android_at_lungishop = getTotal(queryResult.rows[33])
        const orange_money_africa_app_download_for_iphone_at_lungishop = getTotal(queryResult.rows[34])
        const orange_money_africa_app_download_for_android_at_lungishop = getTotal(queryResult.rows[35])

        res.json({

            my_orange_app_download_for_iphone_at_hqshop_sum: my_orange_app_download_for_iphone_at_hqshop,
            my_orange_app_download_for_android_at_hqshop_sum: my_orange_app_download_for_android_at_hqshop,
            orange_money_africa_app_download_for_iphone_at_hqshop_sum: orange_money_africa_app_download_for_iphone_at_hqshop,
            orange_money_africa_app_download_for_android_at_hqshop_sum: orange_money_africa_app_download_for_android_at_hqshop,

            my_orange_app_download_for_iphone_at_flagshipshop_sum: my_orange_app_download_for_iphone_at_flagshipshop,
            my_orange_app_download_for_android_at_flagshipshop_sum: my_orange_app_download_for_android_at_flagshipshop,
            orange_money_africa_app_download_for_iphone_at_flagshipshop_sum: orange_money_africa_app_download_for_iphone_at_flagshipshop,
            orange_money_africa_app_download_for_android_at_flagshipshop_sum: orange_money_africa_app_download_for_android_at_flagshipshop,


            my_orange_app_download_for_iphone_at_wellingtonshop_sum: my_orange_app_download_for_iphone_at_wellingtonshop,
            my_orange_app_download_for_android_at_wellingtonshop_sum: my_orange_app_download_for_android_at_wellingtonshop,
            orange_money_africa_app_download_for_iphone_at_wellingtonshop_sum: orange_money_africa_app_download_for_iphone_at_wellingtonshop,
            orange_money_africa_app_download_for_android_at_wellingtonshop_sum: orange_money_africa_app_download_for_android_at_wellingtonshop,


            my_orange_app_download_for_iphone_at_waterlooshop_sum: my_orange_app_download_for_iphone_at_waterlooshop,
            my_orange_app_download_for_android_at_waterlooshop_sum: my_orange_app_download_for_android_at_waterlooshop,
            orange_money_africa_app_download_for_iphone_at_waterlooshop_sum: orange_money_africa_app_download_for_iphone_at_waterlooshop,
            orange_money_africa_app_download_for_android_at_waterlooshop_sum: orange_money_africa_app_download_for_android_at_waterlooshop,

            my_orange_app_download_for_iphone_at_makenishop_sum: my_orange_app_download_for_iphone_at_makenishop,
            my_orange_app_download_for_android_at_makenishop_sum: my_orange_app_download_for_android_at_makenishop,
            orange_money_africa_app_download_for_iphone_at_makenishop_sum: orange_money_africa_app_download_for_iphone_at_makenishop,
            orange_money_africa_app_download_for_android_at_makenishop_sum: orange_money_africa_app_download_for_android_at_makenishop,

            my_orange_app_download_for_iphone_at_konoshop_sum: my_orange_app_download_for_iphone_at_konoshop,
            my_orange_app_download_for_android_at_konoshop_sum: my_orange_app_download_for_android_at_konoshop,
            orange_money_africa_app_download_for_iphone_at_konoshop_sum: orange_money_africa_app_download_for_iphone_at_konoshop,
            orange_money_africa_app_download_for_android_at_konoshop_sum: orange_money_africa_app_download_for_android_at_konoshop,

            my_orange_app_download_for_iphone_at_boshop_sum: my_orange_app_download_for_iphone_at_boshop,
            my_orange_app_download_for_android_at_boshop_sum: my_orange_app_download_for_android_at_boshop,
            orange_money_africa_app_download_for_iphone_at_boshop_sum: orange_money_africa_app_download_for_iphone_at_boshop,
            orange_money_africa_app_download_for_android_at_boshop_sum: orange_money_africa_app_download_for_android_at_boshop,


            my_orange_app_download_for_iphone_at_kenemashop_sum: my_orange_app_download_for_iphone_at_kenemashop,
            my_orange_app_download_for_android_at_kenemashop_sum: my_orange_app_download_for_android_at_kenemashop,
            orange_money_africa_app_download_for_iphone_at_kenemashop_sum: orange_money_africa_app_download_for_iphone_at_kenemashop,
            orange_money_africa_app_download_for_android_at_kenemashop_sum: orange_money_africa_app_download_for_android_at_kenemashop,

            //TODO

            my_orange_app_download_for_iphone_at_lungishop_sum: my_orange_app_download_for_iphone_at_lungishop,
            my_orange_app_download_for_android_at_lungishop_sum: my_orange_app_download_for_android_at_lungishop,
            orange_money_africa_app_download_for_iphone_at_lungishop_sum: orange_money_africa_app_download_for_iphone_at_lungishop,
            orange_money_africa_app_download_for_android_at_lungishop_sum: orange_money_africa_app_download_for_android_at_lungishop,

        });

    });
});

export default router
