import express from "express"
import pool from "../database-connection/DatabaseConnection.js"
const router = express.Router()


router.get('/', (req, res) => {
    const sql = `
SELECT 'my_orange_app_download_for_iphone_at_hqshop' as total_downloads, count(downloadLocation) as total from downloadInformation where downloadLocation = 'Headquarter Shop' and appDownloaded = 'My Orange App For Iphone'
UNION ALL
SELECT 'my_orange_app_download_for_android_at_hqshop' as total_downloads, count(downloadLocation) as total from downloadInformation where downloadLocation = 'Headquarter Shop' and appDownloaded = 'My Orange App For Android'
UNION ALL
SELECT 'orange_money_africa_app_download_for_iphone_at_hqshop' as total_downloads, count(downloadLocation) as total from downloadInformation where downloadLocation = 'Headquarter Shop' and appDownloaded = 'Orange Money Africa Iphone'
UNION ALL
SELECT 'orange_money_africa_app_download_for_android_at_hqshop' as total_downloads, count(downloadLocation) as total from downloadInformation where downloadLocation = 'Headquarter Shop' and appDownloaded = 'Orange Money Africa Android'

UNION ALL

SELECT 'my_orange_app_download_for_iphone_at_flagshipshop' as total_downloads, count(downloadLocation) as total from downloadInformation where downloadLocation = 'Flagship Shop' and appDownloaded = 'My Orange App For Iphone'
UNION ALL
SELECT 'my_orange_app_download_for_android_at_flagshipshop' as total_downloads, count(downloadLocation) as total from downloadInformation where downloadLocation = 'Flagship Shop' and appDownloaded = 'My Orange App For Android'
UNION ALL
SELECT 'orange_money_africa_app_download_for_iphone_at_flagshipshop' as total_downloads, count(downloadLocation) as total from downloadInformation where downloadLocation = 'Flagship Shop' and appDownloaded = 'Orange Money Africa Iphone'
UNION ALL
SELECT 'orange_money_africa_app_download_for_android_at_flagshipshop' as total_downloads, count(downloadLocation) as total from downloadInformation where downloadLocation = 'Flagship Shop' and appDownloaded = 'Orange Money Africa Android'

UNION ALL

SELECT 'my_orange_app_download_for_iphone_at_wellingtonshop' as total_downloads, count(downloadLocation) as total from downloadInformation where downloadLocation = 'Wellington Shop' and appDownloaded = 'My Orange App For Iphone'
UNION ALL
SELECT 'my_orange_app_download_for_android_at_wellingtonshop' as total_downloads, count(downloadLocation) as total from downloadInformation where downloadLocation = 'Wellington Shop' and appDownloaded = 'My Orange App For Android'
UNION ALL
SELECT 'orange_money_africa_app_download_for_iphone_at_wellingtonshop' as total_downloads, count(downloadLocation) as total from downloadInformation where downloadLocation = 'Wellington Shop' and appDownloaded = 'Orange Money Africa Iphone'
UNION ALL
SELECT 'orange_money_africa_app_download_for_android_at_wellingtonshop' as total_downloads, count(downloadLocation) as total from downloadInformation where downloadLocation = 'Wellington Shop' and appDownloaded = 'Orange Money Africa Android'

UNION ALL

SELECT 'my_orange_app_download_for_iphone_at_waterlooshop' as total_downloads, count(downloadLocation) as total from downloadInformation where downloadLocation = 'Waterloo Shop' and appDownloaded = 'My Orange App For Iphone'
UNION ALL
SELECT 'my_orange_app_download_for_android_at_waterlooshop' as total_downloads, count(downloadLocation) as total from downloadInformation where downloadLocation = 'Waterloo Shop' and appDownloaded = 'My Orange App For Android'
UNION ALL
SELECT 'orange_money_africa_app_download_for_iphone_at_waterlooshop' as total_downloads, count(downloadLocation) as total from downloadInformation where downloadLocation = 'Waterloo Shop' and appDownloaded = 'Orange Money Africa Iphone'
UNION ALL
SELECT 'orange_money_africa_app_download_for_android_at_waterlooshop' as total_downloads, count(downloadLocation) as total from downloadInformation where downloadLocation = 'Waterloo Shop' and appDownloaded = 'Orange Money Africa Android'

UNION ALL

SELECT 'my_orange_app_download_for_iphone_at_makenishop' as total_downloads, count(downloadLocation) as total from downloadInformation where downloadLocation = 'Makeni Shop' and appDownloaded = 'My Orange App For Iphone'
UNION ALL
SELECT 'my_orange_app_download_for_android_at_makenishop' as total_downloads, count(downloadLocation) as total from downloadInformation where downloadLocation = 'Makeni Shop' and appDownloaded = 'My Orange App For Android'
UNION ALL
SELECT 'orange_money_africa_app_download_for_iphone_at_makenishop' as total_downloads, count(downloadLocation) as total from downloadInformation where downloadLocation = 'Makeni Shop' and appDownloaded = 'Orange Money Africa Iphone'
UNION ALL
SELECT 'orange_money_africa_app_download_for_android_at_makenishop' as total_downloads, count(downloadLocation) as total from downloadInformation where downloadLocation = 'Makeni Shop' and appDownloaded = 'Orange Money Africa Android'

UNION ALL

SELECT 'my_orange_app_download_for_iphone_at_konoshop' as total_downloads, count(downloadLocation) as total from downloadInformation where downloadLocation = 'Kono Shop' and appDownloaded = 'My Orange App For Iphone'
UNION ALL
SELECT 'my_orange_app_download_for_android_at_konoshop' as total_downloads, count(downloadLocation) as total from downloadInformation where downloadLocation = 'Kono Shop' and appDownloaded = 'My Orange App For Android'
UNION ALL
SELECT 'orange_money_africa_app_download_for_iphone_at_konoshop' as total_downloads, count(downloadLocation) as total from downloadInformation where downloadLocation = 'Kono Shop' and appDownloaded = 'Orange Money Africa Iphone'
UNION ALL
SELECT 'orange_money_africa_app_download_for_android_at_konoshop' as total_downloads, count(downloadLocation) as total from downloadInformation where downloadLocation = 'Kono Shop' and appDownloaded = 'Orange Money Africa Android'

UNION ALL

SELECT 'my_orange_app_download_for_iphone_at_boshop' as total_downloads, count(downloadLocation) as total from downloadInformation where downloadLocation = 'Bo Shop' and appDownloaded = 'My Orange App For Iphone'
UNION ALL
SELECT 'my_orange_app_download_for_android_at_boshop' as total_downloads, count(downloadLocation) as total from downloadInformation where downloadLocation = 'Bo Shop' and appDownloaded = 'My Orange App For Android'
UNION ALL
SELECT 'orange_money_africa_app_download_for_iphone_at_boshop' as total_downloads, count(downloadLocation) as total from downloadInformation where downloadLocation = 'Bo Shop' and appDownloaded = 'Orange Money Africa Iphone'
UNION ALL
SELECT 'orange_money_africa_app_download_for_android_at_boshop' as total_downloads, count(downloadLocation) as total from downloadInformation where downloadLocation = 'Bo Shop' and appDownloaded = 'Orange Money Africa Android'

UNION ALL

SELECT 'my_orange_app_download_for_iphone_at_kenemashop' as total_downloads, count(downloadLocation) as total from downloadInformation where downloadLocation = 'Kenema Shop' and appDownloaded = 'My Orange App For Iphone'
UNION ALL
SELECT 'my_orange_app_download_for_android_at_kenemashop' as total_downloads, count(downloadLocation) as total from downloadInformation where downloadLocation = 'Kenema Shop' and appDownloaded = 'My Orange App For Android'
UNION ALL
SELECT 'orange_money_africa_app_download_for_iphone_at_kenemashop' as total_downloads, count(downloadLocation) as total from downloadInformation where downloadLocation = 'Kenema Shop' and appDownloaded = 'Orange Money Africa Iphone'
UNION ALL
SELECT 'orange_money_africa_app_download_for_android_at_kenemashop' as total_downloads, count(downloadLocation) as total from downloadInformation where downloadLocation = 'Kenema Shop' and appDownloaded = 'Orange Money Africa Android'

UNION ALL

SELECT 'my_orange_app_download_for_iphone_at_lungishop' as total_downloads, count(downloadLocation) as total from downloadInformation where downloadLocation = 'Lungi Shop' and appDownloaded = 'My Orange App For Iphone'
UNION ALL
SELECT 'my_orange_app_download_for_android_at_lungishop' as total_downloads, count(downloadLocation) as total from downloadInformation where downloadLocation = 'Lungi Shop' and appDownloaded = 'My Orange App For Android'
UNION ALL
SELECT 'orange_money_africa_app_download_for_iphone_at_lungishop' as total_downloads, count(downloadLocation) as total from downloadInformation where downloadLocation = 'Lungi Shop' and appDownloaded = 'Orange Money Africa Iphone'
UNION ALL
SELECT 'orange_money_africa_app_download_for_android_at_lungishop' as total_downloads, count(downloadLocation) as total from downloadInformation where downloadLocation = 'Lungi Shop' and appDownloaded = 'Orange Money Africa Android';

 `;
    pool.query(sql, (error, results) => {
        if (error) {
            throw error;
        }
        // const successfulTotalSum = getTotal(results[0]);
        // const unsuccessfulTotalSum = results[1].total;

        const getTotal = (result) => (result && result.total !== undefined) ? result.total : 0;

        const getValueSafely = (index) => {
            const result = results[index];
            return result ? getTotal(result) : 0;
        };
    

        const my_orange_app_download_for_iphone_at_hqshop = getValueSafely(0)
        const my_orange_app_download_for_android_at_hqshop = getValueSafely(1)
        const orange_money_africa_app_download_for_iphone_at_hqshop = getValueSafely(2)
        const orange_money_africa_app_download_for_android_at_hqshop = getValueSafely(3)

        const my_orange_app_download_for_iphone_at_flagshipshop = getValueSafely(4)
        const my_orange_app_download_for_android_at_flagshipshop = getValueSafely(5)
        const orange_money_africa_app_download_for_iphone_at_flagshipshop = getValueSafely(6)
        const orange_money_africa_app_download_for_android_at_flagshipshop = getValueSafely(7)

        const my_orange_app_download_for_iphone_at_wellingtonshop = getValueSafely(8)
        const my_orange_app_download_for_android_at_wellingtonshop = getValueSafely(9)
        const orange_money_africa_app_download_for_iphone_at_wellingtonshop = getValueSafely(10)
        const orange_money_africa_app_download_for_android_at_wellingtonshop = getValueSafely(11)


        const my_orange_app_download_for_iphone_at_waterlooshop = getValueSafely(12)
        const my_orange_app_download_for_android_at_waterlooshop = getValueSafely(13)
        const orange_money_africa_app_download_for_iphone_at_waterlooshop = getValueSafely(14)
        const orange_money_africa_app_download_for_android_at_waterlooshop = getValueSafely(15)



        const my_orange_app_download_for_iphone_at_makenishop = getValueSafely(16)
        const my_orange_app_download_for_android_at_makenishop = getValueSafely(17)
        const orange_money_africa_app_download_for_iphone_at_makenishop = getValueSafely(18)
        const orange_money_africa_app_download_for_android_at_makenishop = getValueSafely(19)

        // TODO


        const my_orange_app_download_for_iphone_at_konoshop = getValueSafely(20)
        const my_orange_app_download_for_android_at_konoshop = getValueSafely(21)
        const orange_money_africa_app_download_for_iphone_at_konoshop = getValueSafely(22)
        const orange_money_africa_app_download_for_android_at_konoshop =getValueSafely(23)

        const my_orange_app_download_for_iphone_at_boshop = getValueSafely(24)
        const my_orange_app_download_for_android_at_boshop = getValueSafely(25)
        const orange_money_africa_app_download_for_iphone_at_boshop = getValueSafely(26)
        const orange_money_africa_app_download_for_android_at_boshop = getValueSafely(27)

        const my_orange_app_download_for_iphone_at_kenemashop = getValueSafely(28)
        const my_orange_app_download_for_android_at_kenemashop = getValueSafely(29)
        const orange_money_africa_app_download_for_iphone_at_kenemashop = getValueSafely(30)
        const orange_money_africa_app_download_for_android_at_kenemashop = getValueSafely(31)


        const my_orange_app_download_for_iphone_at_lungishop = getValueSafely(32)
        const my_orange_app_download_for_android_at_lungishop = getValueSafely(33)
        const orange_money_africa_app_download_for_iphone_at_lungishop = getValueSafely(34)
        const orange_money_africa_app_download_for_android_at_lungishop = getValueSafely(35)

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
SELECT 'my_orange_app_download_for_iphone_at_hqshop' as total_downloads, COUNT(downloadLocation) as total FROM downloadInformation WHERE downloadLocation = 'Headquarter Shop'AND appDownloaded = 'My Orange App For Iphone' AND createdAt >= CURRENT_DATE - INTERVAL '1 week'
UNION ALL
SELECT 'my_orange_app_download_for_android_at_hqshop' as total_downloads, count(downloadLocation) as total from downloadInformation where downloadLocation = 'Headquarter Shop' and appDownloaded = 'My Orange App For Android' AND createdAt >= CURRENT_DATE - INTERVAL '1 week'
UNION ALL
SELECT 'orange_money_africa_app_download_for_iphone_at_hqshop' as total_downloads, count(downloadLocation) as total from downloadInformation where downloadLocation = 'Headquarter Shop' and appDownloaded = 'Orange Money Africa Iphone' AND createdAt >= CURRENT_DATE - INTERVAL '1 week'
UNION ALL
SELECT 'orange_money_africa_app_download_for_android_at_hqshop' as total_downloads, count(downloadLocation) as total from downloadInformation where downloadLocation = 'Headquarter Shop' and appDownloaded = 'Orange Money Africa Android' AND createdAt >= CURRENT_DATE - INTERVAL '1 week'

UNION ALL

SELECT 'my_orange_app_download_for_iphone_at_flagshipshop' as total_downloads, count(downloadLocation) as total from downloadInformation where downloadLocation = 'Flagship Shop' and appDownloaded = 'My Orange App For Iphone' AND createdAt >= CURRENT_DATE - INTERVAL '1 week'
UNION ALL
SELECT 'my_orange_app_download_for_android_at_flagshipshop' as total_downloads, count(downloadLocation) as total from downloadInformation where downloadLocation = 'Flagship Shop' and appDownloaded = 'My Orange App For Android' AND createdAt >= CURRENT_DATE - INTERVAL '1 week'
UNION ALL
SELECT 'orange_money_africa_app_download_for_iphone_at_flagshipshop' as total_downloads, count(downloadLocation) as total from downloadInformation where downloadLocation = 'Flagship Shop' and appDownloaded = 'Orange Money Africa Iphone' AND createdAt >= CURRENT_DATE - INTERVAL '1 week'
UNION ALL
SELECT 'orange_money_africa_app_download_for_android_at_flagshipshop' as total_downloads, count(downloadLocation) as total from downloadInformation where downloadLocation = 'Flagship Shop' and appDownloaded = 'Orange Money Africa Android' AND createdAt >= CURRENT_DATE - INTERVAL '1 week'

UNION ALL

SELECT 'my_orange_app_download_for_iphone_at_wellingtonshop' as total_downloads, count(downloadLocation) as total from downloadInformation where downloadLocation = 'Wellington Shop' and appDownloaded = 'My Orange App For Iphone' AND createdAt >= CURRENT_DATE - INTERVAL '1 week'
UNION ALL
SELECT 'my_orange_app_download_for_android_at_wellingtonshop' as total_downloads, count(downloadLocation) as total from downloadInformation where downloadLocation = 'Wellington Shop' and appDownloaded = 'My Orange App For Android' AND createdAt >= CURRENT_DATE - INTERVAL '1 week'
UNION ALL
SELECT 'orange_money_africa_app_download_for_iphone_at_wellingtonshop' as total_downloads, count(downloadLocation) as total from downloadInformation where downloadLocation = 'Wellington Shop' and appDownloaded = 'Orange Money Africa Iphone' AND createdAt >= CURRENT_DATE - INTERVAL '1 week'
UNION ALL
SELECT 'orange_money_africa_app_download_for_android_at_wellingtonshop' as total_downloads, count(downloadLocation) as total from downloadInformation where downloadLocation = 'Wellington Shop' and appDownloaded = 'Orange Money Africa Android' AND createdAt >= CURRENT_DATE - INTERVAL '1 week'

UNION ALL

SELECT 'my_orange_app_download_for_iphone_at_waterlooshop' as total_downloads, count(downloadLocation) as total from downloadInformation where downloadLocation = 'Waterloo Shop' and appDownloaded = 'My Orange App For Iphone' AND createdAt >= CURRENT_DATE - INTERVAL '1 week'
UNION ALL
SELECT 'my_orange_app_download_for_android_at_waterlooshop' as total_downloads, count(downloadLocation) as total from downloadInformation where downloadLocation = 'Waterloo Shop' and appDownloaded = 'My Orange App For Android' AND createdAt >= CURRENT_DATE - INTERVAL '1 week'
UNION ALL
SELECT 'orange_money_africa_app_download_for_iphone_at_waterlooshop' as total_downloads, count(downloadLocation) as total from downloadInformation where downloadLocation = 'Waterloo Shop' and appDownloaded = 'Orange Money Africa Iphone' AND createdAt >= CURRENT_DATE - INTERVAL '1 week'
UNION ALL
SELECT 'orange_money_africa_app_download_for_android_at_waterlooshop' as total_downloads, count(downloadLocation) as total from downloadInformation where downloadLocation = 'Waterloo Shop' and appDownloaded = 'Orange Money Africa Android' AND createdAt >= CURRENT_DATE - INTERVAL '1 week'

UNION ALL

SELECT 'my_orange_app_download_for_iphone_at_makenishop' as total_downloads, count(downloadLocation) as total from downloadInformation where downloadLocation = 'Makeni Shop' and appDownloaded = 'My Orange App For Iphone' AND createdAt >= CURRENT_DATE - INTERVAL '1 week'
UNION ALL
SELECT 'my_orange_app_download_for_android_at_makenishop' as total_downloads, count(downloadLocation) as total from downloadInformation where downloadLocation = 'Makeni Shop' and appDownloaded = 'My Orange App For Android' AND createdAt >= CURRENT_DATE - INTERVAL '1 week'
UNION ALL
SELECT 'orange_money_africa_app_download_for_iphone_at_makenishop' as total_downloads, count(downloadLocation) as total from downloadInformation where downloadLocation = 'Makeni Shop' and appDownloaded = 'Orange Money Africa Iphone' AND createdAt >= CURRENT_DATE - INTERVAL '1 week'
UNION ALL
SELECT 'orange_money_africa_app_download_for_android_at_makenishop' as total_downloads, count(downloadLocation) as total from downloadInformation where downloadLocation = 'Makeni Shop' and appDownloaded = 'Orange Money Africa Android' AND createdAt >= CURRENT_DATE - INTERVAL '1 week'

UNION ALL

SELECT 'my_orange_app_download_for_iphone_at_konoshop' as total_downloads, count(downloadLocation) as total from downloadInformation where downloadLocation = 'Kono Shop' and appDownloaded = 'My Orange App For Iphone' AND createdAt >= CURRENT_DATE - INTERVAL '1 week'
UNION ALL
SELECT 'my_orange_app_download_for_android_at_konoshop' as total_downloads, count(downloadLocation) as total from downloadInformation where downloadLocation = 'Kono Shop' and appDownloaded = 'My Orange App For Android' AND createdAt >= CURRENT_DATE - INTERVAL '1 week'
UNION ALL
SELECT 'orange_money_africa_app_download_for_iphone_at_konoshop' as total_downloads, count(downloadLocation) as total from downloadInformation where downloadLocation = 'Kono Shop' and appDownloaded = 'Orange Money Africa Iphone' AND createdAt >= CURRENT_DATE - INTERVAL '1 week'
UNION ALL
SELECT 'orange_money_africa_app_download_for_android_at_konoshop' as total_downloads, count(downloadLocation) as total from downloadInformation where downloadLocation = 'Kono Shop' and appDownloaded = 'Orange Money Africa Android' AND createdAt >= CURRENT_DATE - INTERVAL '1 week'

UNION ALL

SELECT 'my_orange_app_download_for_iphone_at_boshop' as total_downloads, count(downloadLocation) as total from downloadInformation where downloadLocation = 'Bo Shop' and appDownloaded = 'My Orange App For Iphone' AND createdAt >= CURRENT_DATE - INTERVAL '1 week'
UNION ALL
SELECT 'my_orange_app_download_for_android_at_boshop' as total_downloads, count(downloadLocation) as total from downloadInformation where downloadLocation = 'Bo Shop' and appDownloaded = 'My Orange App For Android' AND createdAt >= CURRENT_DATE - INTERVAL '1 week'
UNION ALL
SELECT 'orange_money_africa_app_download_for_iphone_at_boshop' as total_downloads, count(downloadLocation) as total from downloadInformation where downloadLocation = 'Bo Shop' and appDownloaded = 'Orange Money Africa Iphone' AND createdAt >= CURRENT_DATE - INTERVAL '1 week'
UNION ALL
SELECT 'orange_money_africa_app_download_for_android_at_boshop' as total_downloads, count(downloadLocation) as total from downloadInformation where downloadLocation = 'Bo Shop' and appDownloaded = 'Orange Money Africa Android' AND createdAt >= CURRENT_DATE - INTERVAL '1 week'

UNION ALL

SELECT 'my_orange_app_download_for_iphone_at_kenemashop' as total_downloads, count(downloadLocation) as total from downloadInformation where downloadLocation = 'Kenema Shop' and appDownloaded = 'My Orange App For Iphone' AND createdAt >= CURRENT_DATE - INTERVAL '1 week'
UNION ALL
SELECT 'my_orange_app_download_for_android_at_kenemashop' as total_downloads, count(downloadLocation) as total from downloadInformation where downloadLocation = 'Kenema Shop' and appDownloaded = 'My Orange App For Android' AND createdAt >= CURRENT_DATE - INTERVAL '1 week'
UNION ALL 
SELECT 'orange_money_africa_app_download_for_iphone_at_kenemashop' as total_downloads, count(downloadLocation) as total from downloadInformation where downloadLocation = 'Kenema Shop' and appDownloaded = 'Orange Money Africa Iphone' AND createdAt >= CURRENT_DATE - INTERVAL '1 week'
UNION ALL
SELECT 'orange_money_africa_app_download_for_android_at_kenemashop' as total_downloads, count(downloadLocation) as total from downloadInformation where downloadLocation = 'Kenema Shop' and appDownloaded = 'Orange Money Africa Android' AND createdAt >= CURRENT_DATE - INTERVAL '1 week'

UNION ALL

SELECT 'my_orange_app_download_for_iphone_at_lungishop' as total_downloads, count(downloadLocation) as total from downloadInformation where downloadLocation = 'Lungi Shop' and appDownloaded = 'My Orange App For Iphone' AND createdAt >= CURRENT_DATE - INTERVAL '1 week'
UNION ALL
SELECT 'my_orange_app_download_for_android_at_lungishop' as total_downloads, count(downloadLocation) as total from downloadInformation where downloadLocation = 'Lungi Shop' and appDownloaded = 'My Orange App For Android' AND createdAt >= CURRENT_DATE - INTERVAL '1 week'
UNION ALL
SELECT 'orange_money_africa_app_download_for_iphone_at_lungishop' as total_downloads, count(downloadLocation) as total from downloadInformation where downloadLocation = 'Lungi Shop' and appDownloaded = 'Orange Money Africa Iphone' AND createdAt >= CURRENT_DATE - INTERVAL '1 week'
UNION ALL
SELECT 'orange_money_africa_app_download_for_android_at_lungishop' as total_downloads, count(downloadLocation) as total from downloadInformation where downloadLocation = 'Lungi Shop' and appDownloaded = 'Orange Money Africa Android' AND createdAt >= CURRENT_DATE - INTERVAL '1 week'

    `;
    pool.query(sql, (error, results) => {
        if (error) {
            throw error;
        }
        // const successfulTotalSum = getTotal(results[0]);
        // const unsuccessfulTotalSum = results[1].total;
        const getTotal = (result) => (result && result.total !== undefined) ? result.total : 0;

        const my_orange_app_download_for_iphone_at_hqshop = getTotal(results[0])
        const my_orange_app_download_for_android_at_hqshop = getTotal(results[1])
        const orange_money_africa_app_download_for_iphone_at_hqshop = getTotal(results[2])
        const orange_money_africa_app_download_for_android_at_hqshop = getTotal(results[3])

        const my_orange_app_download_for_iphone_at_flagshipshop = getTotal(results[0])
        const my_orange_app_download_for_android_at_flagshipshop = getTotal(results[0])
        const orange_money_africa_app_download_for_iphone_at_flagshipshop = getTotal(results[0])
        const orange_money_africa_app_download_for_android_at_flagshipshop = getTotal(results[0])

        const my_orange_app_download_for_iphone_at_wellingtonshop = getTotal(results[0])
        const my_orange_app_download_for_android_at_wellingtonshop = getTotal(results[0])
        const orange_money_africa_app_download_for_iphone_at_wellingtonshop = getTotal(results[0])
        const orange_money_africa_app_download_for_android_at_wellingtonshop = getTotal(results[0])


        const my_orange_app_download_for_iphone_at_waterlooshop = getTotal(results[0])
        const my_orange_app_download_for_android_at_waterlooshop = getTotal(results[0])
        const orange_money_africa_app_download_for_iphone_at_waterlooshop = getTotal(results[0])
        const orange_money_africa_app_download_for_android_at_waterlooshop = getTotal(results[0])



        const my_orange_app_download_for_iphone_at_makenishop = getTotal(results[0])
        const my_orange_app_download_for_android_at_makenishop = getTotal(results[0])
        const orange_money_africa_app_download_for_iphone_at_makenishop = getTotal(results[0])
        const orange_money_africa_app_download_for_android_at_makenishop = getTotal(results[0])

        // TODO


        const my_orange_app_download_for_iphone_at_konoshop = getTotal(results[0])
        const my_orange_app_download_for_android_at_konoshop = getTotal(results[0])
        const orange_money_africa_app_download_for_iphone_at_konoshop = getTotal(results[0])
        const orange_money_africa_app_download_for_android_at_konoshop = getTotal(results[0])

        const my_orange_app_download_for_iphone_at_boshop = getTotal(results[0])
        const my_orange_app_download_for_android_at_boshop = getTotal(results[0])
        const orange_money_africa_app_download_for_iphone_at_boshop = getTotal(results[0])
        const orange_money_africa_app_download_for_android_at_boshop = getTotal(results[0])

        const my_orange_app_download_for_iphone_at_kenemashop = getTotal(results[0])
        const my_orange_app_download_for_android_at_kenemashop = getTotal(results[0])
        const orange_money_africa_app_download_for_iphone_at_kenemashop = getTotal(results[0])
        const orange_money_africa_app_download_for_android_at_kenemashop = getTotal(results[0])


        const my_orange_app_download_for_iphone_at_lungishop = getTotal(results[0])
        const my_orange_app_download_for_android_at_lungishop = getTotal(results[0])
        const orange_money_africa_app_download_for_iphone_at_lungishop = getTotal(results[0])
        const orange_money_africa_app_download_for_android_at_lungishop = getTotal(results[0])

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
    pool.query(sql, (error, results) => {
        if (error) {
            throw error;
        }
        // const successfulTotalSum = getTotal(results[0]);
        // const unsuccessfulTotalSum = results[1].total;

        const getTotal = (result) => (result && result.total !== undefined) ? result.total : 0;

        const my_orange_app_download_for_iphone_at_hqshop = getTotal(results[0])
        const my_orange_app_download_for_android_at_hqshop = getTotal(results[1])
        const orange_money_africa_app_download_for_iphone_at_hqshop = getTotal(results[2])
        const orange_money_africa_app_download_for_android_at_hqshop = getTotal(results[3])

        const my_orange_app_download_for_iphone_at_flagshipshop = getTotal(results[4])
        const my_orange_app_download_for_android_at_flagshipshop = getTotal(results[5])
        const orange_money_africa_app_download_for_iphone_at_flagshipshop = getTotal(results[6])
        const orange_money_africa_app_download_for_android_at_flagshipshop = getTotal(results[7])

        const my_orange_app_download_for_iphone_at_wellingtonshop = getTotal(results[8])
        const my_orange_app_download_for_android_at_wellingtonshop = getTotal(results[9])
        const orange_money_africa_app_download_for_iphone_at_wellingtonshop = getTotal(results[10])
        const orange_money_africa_app_download_for_android_at_wellingtonshop = getTotal(results[11])


        const my_orange_app_download_for_iphone_at_waterlooshop = getTotal(results[12])
        const my_orange_app_download_for_android_at_waterlooshop = getTotal(results[13])
        const orange_money_africa_app_download_for_iphone_at_waterlooshop = getTotal(results[14])
        const orange_money_africa_app_download_for_android_at_waterlooshop = getTotal(results[15])



        const my_orange_app_download_for_iphone_at_makenishop = getTotal(results[16])
        const my_orange_app_download_for_android_at_makenishop = getTotal(results[17])
        const orange_money_africa_app_download_for_iphone_at_makenishop = getTotal(results[18])
        const orange_money_africa_app_download_for_android_at_makenishop = getTotal(results[19])

        // TODO


        const my_orange_app_download_for_iphone_at_konoshop = getTotal(results[20])
        const my_orange_app_download_for_android_at_konoshop = getTotal(results[21])
        const orange_money_africa_app_download_for_iphone_at_konoshop = getTotal(results[22])
        const orange_money_africa_app_download_for_android_at_konoshop = getTotal(results[23])

        const my_orange_app_download_for_iphone_at_boshop = getTotal(results[24])
        const my_orange_app_download_for_android_at_boshop = getTotal(results[25])
        const orange_money_africa_app_download_for_iphone_at_boshop = getTotal(results[26])
        const orange_money_africa_app_download_for_android_at_boshop = getTotal(results[27])

        const my_orange_app_download_for_iphone_at_kenemashop = getTotal(results[28])
        const my_orange_app_download_for_android_at_kenemashop = getTotal(results[29])
        const orange_money_africa_app_download_for_iphone_at_kenemashop = getTotal(results[30])
        const orange_money_africa_app_download_for_android_at_kenemashop = getTotal(results[31])


        const my_orange_app_download_for_iphone_at_lungishop = getTotal(results[32])
        const my_orange_app_download_for_android_at_lungishop = getTotal(results[33])
        const orange_money_africa_app_download_for_iphone_at_lungishop = getTotal(results[34])
        const orange_money_africa_app_download_for_android_at_lungishop = getTotal(results[35])

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


