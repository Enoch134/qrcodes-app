import React, { useState, useEffect } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import axios from 'axios';
import { Link } from 'react-router-dom';
import {
    CCard,
    CCardBody,
    CCardHeader,
    CCol,
    CRow,
} from '@coreui/react'
import {
    CChartBar,
} from '@coreui/react-chartjs'



const Dashboard = () => {

    const [my_orange_app_download_for_iphone_at_hqshop_sum, setMy_orange_app_download_for_iphone_at_hqshop_sum] = useState(null);
    const [my_orange_app_download_for_iphone_at_kenemashop_sum, setMy_orange_app_download_for_iphone_at_kenemashop_sum] = useState(null);
    const [my_orange_app_download_for_iphone_at_boshop_sum, setMy_orange_app_download_for_iphone_at_boshop_sum] = useState(null);
    const [my_orange_app_download_for_iphone_at_makenishop_sum, setMy_orange_app_download_for_iphone_at_makenishop_sum] = useState(null);
    const [my_orange_app_download_for_iphone_at_konoshop_sum, setMy_orange_app_download_for_iphone_at_konoshop_sum] = useState(null);
    const [my_orange_app_download_for_iphone_at_flagshipshop_sum, setMy_orange_app_download_for_iphone_at_flagshipshop_sum] = useState(null);
    const [my_orange_app_download_for_iphone_at_lungishop_sum, setMy_orange_app_download_for_iphone_at_lungishop_sum] = useState(null);
    const [my_orange_app_download_for_iphone_at_waterlooshop_sum, setMy_orange_app_download_for_iphone_at_waterlooshop_sum] = useState(null);
    const [my_orange_app_download_for_iphone_at_wellingtonshop_sum, setMy_orange_app_download_for_iphone_at_wellingtonshop_sum] = useState(null);


    const [my_orange_app_download_for_android_at_hqshop_sum, setMy_orange_app_download_for_android_at_hqshop_sum] = useState(null);
    const [my_orange_app_download_for_android_at_kenemashop_sum, setMy_orange_app_download_for_android_at_kenemashop_sum] = useState(null);
    const [my_orange_app_download_for_android_at_boshop_sum, setMy_orange_app_download_for_android_at_boshop_sum] = useState(null);
    const [my_orange_app_download_for_android_at_makenishop_sum, setMy_orange_app_download_for_android_at_makenishop_sum] = useState(null);
    const [my_orange_app_download_for_android_at_konoshop_sum, setMy_orange_app_download_for_android_at_konoshop_sum] = useState(null);
    const [my_orange_app_download_for_android_at_flagshipshop_sum, setMy_orange_app_download_for_android_at_flagshipshop_sum] = useState(null);
    const [my_orange_app_download_for_android_at_lungishop_sum, setMy_orange_app_download_for_android_at_lungishop_sum] = useState(null);
    const [my_orange_app_download_for_android_at_waterlooshop_sum, setMy_orange_app_download_for_android_at_waterlooshop_sum] = useState(null);
    const [my_orange_app_download_for_android_at_wellingtonshop_sum, setMy_orange_app_download_for_android_at_wellingtonshop_sum] = useState(null);



    // const [orange_money_africa_app_download_for_iphone_at_hqshop_sum, setOrange_money_africa_app_download_for_iphone_at_hqshop_sum] = useState(null);
    // const [orange_money_africa_app_download_for_iphone_at_kenemashop_sum, setOrange_money_africa_app_download_for_iphone_at_kenemashop_sum] = useState(null);
    // const [orange_money_africa_app_download_for_iphone_at_boshop_sum, setOrange_money_africa_app_download_for_iphone_at_boshop_sum] = useState(null);
    // const [orange_money_africa_app_download_for_iphone_at_makenishop_sum, setOrange_money_africa_app_download_for_iphone_at_makenishop_sum] = useState(null);
    // const [orange_money_africa_app_download_for_iphone_at_konoshop_sum, setOrange_money_africa_app_download_for_iphone_at_konoshop_sum] = useState(null);
    // const [orange_money_africa_app_download_for_iphone_at_flagshipshop_sum, setOrange_money_africa_app_download_for_iphone_at_flagshipshop_sum] = useState(null);
    // const [orange_money_africa_app_download_for_iphone_at_lungishop_sum, setOrange_money_africa_app_download_for_iphone_at_lungishop_sum] = useState(null);
    // const [orange_money_africa_app_download_for_iphone_at_waterlooshop_sum, setOrange_money_africa_app_download_for_iphone_at_waterlooshop_sum] = useState(null);
    // const [orange_money_africa_app_download_for_iphone_at_wellingtonshop_sum, setOrange_money_africa_app_download_for_iphone_at_wellingtonshop_sum] = useState(null);



    // const [orange_money_africa_app_download_for_android_at_hqshop_sum, setOrange_money_africa_app_download_for_android_at_hqshop_sum] = useState(null);
    // const [orange_money_africa_app_download_for_android_at_kenemashop_sum, setOrange_money_africa_app_download_for_android_at_kenemashop_sum] = useState(null);
    // const [orange_money_africa_app_download_for_android_at_boshop_sum, setOrange_money_africa_app_download_for_android_at_boshop_sum] = useState(null);
    // const [orange_money_africa_app_download_for_android_at_makenishop_sum, setOrange_money_africa_app_download_for_android_at_makenishop_sum] = useState(null);
    // const [orange_money_africa_app_download_for_android_at_konoshop_sum, setOrange_money_africa_app_download_for_android_at_konoshop_sum] = useState(null);
    // const [orange_money_africa_app_download_for_android_at_flagshipshop_sum, setOrange_money_africa_app_download_for_android_at_flagshipshop_sum] = useState(null);
    // const [orange_money_africa_app_download_for_android_at_lungishop_sum, setOrange_money_africa_app_download_for_android_at_lungishop_sum] = useState(null);
    // const [orange_money_africa_app_download_for_android_at_waterlooshop_sum, setOrange_money_africa_app_download_for_android_at_waterlooshop_sum] = useState(null);
    // const [orange_money_africa_app_download_for_android_at_wellingtonshop_sum, setOrange_money_africa_app_download_for_android_at_wellingtonshop_sum] = useState(null);



    useEffect(() => {
        axios.get(`https://qrcodes-app-runt.vercel.app`)
            .then(response => {

                setMy_orange_app_download_for_iphone_at_hqshop_sum(response.data.my_orange_app_download_for_iphone_at_hqshop_sum);
                setMy_orange_app_download_for_iphone_at_flagshipshop_sum(response.data.my_orange_app_download_for_iphone_at_flagshipshop_sum);
                setMy_orange_app_download_for_iphone_at_makenishop_sum(response.data.my_orange_app_download_for_iphone_at_makenishop_sum);
                setMy_orange_app_download_for_iphone_at_boshop_sum(response.data.my_orange_app_download_for_iphone_at_boshop_sum);
                setMy_orange_app_download_for_iphone_at_kenemashop_sum(response.data.my_orange_app_download_for_iphone_at_kenemashop_sum);
                setMy_orange_app_download_for_iphone_at_konoshop_sum(response.data.my_orange_app_download_for_iphone_at_konoshop_sum);
                setMy_orange_app_download_for_iphone_at_lungishop_sum(response.data.my_orange_app_download_for_iphone_at_lungishop_sum);
                setMy_orange_app_download_for_iphone_at_wellingtonshop_sum(response.data.my_orange_app_download_for_iphone_at_wellingtonshop_sum);
                setMy_orange_app_download_for_iphone_at_waterlooshop_sum(response.data.my_orange_app_download_for_iphone_at_waterlooshop_sum);


                setMy_orange_app_download_for_android_at_hqshop_sum(response.data.my_orange_app_download_for_android_at_hqshop_sum);
                setMy_orange_app_download_for_android_at_flagshipshop_sum(response.data.my_orange_app_download_for_android_at_flagshipshop_sum);
                setMy_orange_app_download_for_android_at_makenishop_sum(response.data.my_orange_app_download_for_android_at_makenishop_sum);
                setMy_orange_app_download_for_android_at_boshop_sum(response.data.my_orange_app_download_for_android_at_boshop_sum);
                setMy_orange_app_download_for_android_at_kenemashop_sum(response.data.my_orange_app_download_for_android_at_kenemashop_sum);
                setMy_orange_app_download_for_android_at_konoshop_sum(response.data.my_orange_app_download_for_android_at_konoshop_sum);
                setMy_orange_app_download_for_android_at_lungishop_sum(response.data.my_orange_app_download_for_android_at_lungishop_sum);
                setMy_orange_app_download_for_android_at_wellingtonshop_sum(response.data.my_orange_app_download_for_android_at_wellingtonshop_sum);
                setMy_orange_app_download_for_android_at_waterlooshop_sum(response.data.my_orange_app_download_for_android_at_waterlooshop_sum);



                // setOrange_money_africa_app_download_for_iphone_at_hqshop_sum(response.data.orange_money_africa_app_download_for_iphone_at_hqshop_sum);
                // setOrange_money_africa_app_download_for_iphone_at_flagshipshop_sum(response.data.orange_money_africa_app_download_for_iphone_at_flagshipshop_sum);
                // setOrange_money_africa_app_download_for_iphone_at_makenishop_sum(response.data.orange_money_africa_app_download_for_iphone_at_makenishop_sum);
                // setOrange_money_africa_app_download_for_iphone_at_boshop_sum(response.data.orange_money_africa_app_download_for_iphone_at_boshop_sum);
                // setOrange_money_africa_app_download_for_iphone_at_kenemashop_sum(response.data.orange_money_africa_app_download_for_iphone_at_kenemashop_sum);
                // setOrange_money_africa_app_download_for_iphone_at_konoshop_sum(response.data.orange_money_africa_app_download_for_iphone_at_konoshop_sum);
                // setOrange_money_africa_app_download_for_iphone_at_lungishop_sum(response.data.orange_money_africa_app_download_for_iphone_at_lungishop_sum);
                // setOrange_money_africa_app_download_for_iphone_at_wellingtonshop_sum(response.data.orange_money_africa_app_download_for_iphone_at_wellingtonshop_sum);
                // setOrange_money_africa_app_download_for_iphone_at_waterlooshop_sum(response.data.orange_money_africa_app_download_for_iphone_at_waterlooshop_sum);


                // setOrange_money_africa_app_download_for_android_at_hqshop_sum(response.data.orange_money_africa_app_download_for_android_at_hqshop_sum);
                // setOrange_money_africa_app_download_for_android_at_flagshipshop_sum(response.data.orange_money_africa_app_download_for_android_at_flagshipshop_sum);
                // setOrange_money_africa_app_download_for_android_at_makenishop_sum(response.data.orange_money_africa_app_download_for_android_at_makenishop_sum);
                // setOrange_money_africa_app_download_for_android_at_boshop_sum(response.data.orange_money_africa_app_download_for_android_at_boshop_sum);
                // setOrange_money_africa_app_download_for_android_at_kenemashop_sum(response.data.orange_money_africa_app_download_for_android_at_kenemashop_sum);
                // setOrange_money_africa_app_download_for_android_at_konoshop_sum(response.data.orange_money_africa_app_download_for_android_at_konoshop_sum);
                // setOrange_money_africa_app_download_for_android_at_lungishop_sum(response.data.orange_money_africa_app_download_for_android_at_lungishop_sum);
                // setOrange_money_africa_app_download_for_android_at_wellingtonshop_sum(response.data.orange_money_africa_app_download_for_android_at_wellingtonshop_sum);
                // setOrange_money_africa_app_download_for_android_at_waterlooshop_sum(response.data.orange_money_africa_app_download_for_android_at_waterlooshop_sum);

            })
            .catch(error => console.log(error));
    }, []);

    setTimeout(function () {
        window.location.reload(1);
    }, 25000);

    return (

        <>
            <Navbar bg="dark" data-bs-theme="dark"  >
                <Container>
                    <Navbar.Brand href="#home">ORANGE SIERRA LEONE MAXIT DASHBOARD</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">DOWNLOAD PER SHOP CHART</Nav.Link>
                        <Nav.Link href="#features"></Nav.Link>
                        <Nav.Link href="weeklyReport"><Link to="weeklyReport" style={{ color: "white", textDecoration: "none", fontWeight: 700 }}>Weekly Report</Link></Nav.Link>
                        <Nav.Link href="weeklyReport"><Link to="monthlyReport" style={{ color: "white", textDecoration: "none", fontWeight: 700 }}>One Month Report</Link></Nav.Link>

                    </Nav>
                </Container>
            </Navbar>
            <CCard className="mb-4">
            </CCard>
            <CRow className="row justify-content-md-center">
                <CCol xs={10}>
                </CCol>
                <CCol xs={5}>
                    <CCard className="mb-4">
                        <CCardHeader>MAXIT App Download (Iphone)</CCardHeader>
                        <CCardBody>
                            <CChartBar
                                data={{
                                    labels: [
                                        'HeadQ',
                                        'Flagship',
                                        'Wellington',
                                        'Waterloo',
                                        'Makeni',
                                        'Bo',
                                        'Kenema',
                                        'Kono',
                                        'Lungi'
                                    ],
                                    datasets: [
                                        {
                                            label: ['Details'],
                                            backgroundColor: ['#E14D2A', '#FD841F', '#3E6D9C', '#001253', '#FF7B54', '#FFB26B', '#FFD56F', '#939B62', '#B08BBB'],
                                            data: [

                                                `${my_orange_app_download_for_iphone_at_hqshop_sum}`,
                                                `${my_orange_app_download_for_iphone_at_flagshipshop_sum}`,
                                                `${my_orange_app_download_for_iphone_at_wellingtonshop_sum}`,
                                                `${my_orange_app_download_for_iphone_at_waterlooshop_sum}`,
                                                `${my_orange_app_download_for_iphone_at_makenishop_sum}`,
                                                `${my_orange_app_download_for_iphone_at_boshop_sum}`,
                                                `${my_orange_app_download_for_iphone_at_kenemashop_sum}`,
                                                `${my_orange_app_download_for_iphone_at_konoshop_sum}`,
                                                `${my_orange_app_download_for_iphone_at_lungishop_sum}`,
                                            ]
                                        },
                                    ],
                                }}
                                labels="Details"
                            />
                        </CCardBody>
                    </CCard>
                </CCol>
                <CCol xs={5}>
                    <CCard className="mb-4">
                        <CCardHeader>MAXIT App Download (Android)</CCardHeader>
                        <CCardBody>
                            <CChartBar
                                data={{
                                    labels: [
                                        'HeadQ',
                                        'Flagship',
                                        'Wellington',
                                        'Waterloo',
                                        'Makeni',
                                        'Bo',
                                        'Kenema',
                                        'Kono',
                                        'Lungi'
                                    ],
                                    datasets: [
                                        {
                                            label: ['Details'],
                                            backgroundColor: ['#E14D2A', '#FD841F', '#3E6D9C', '#001253', '#FF7B54', '#FFB26B', '#FFD56F', '#939B62', '#B08BBB'],
                                            data: [

                                                `${my_orange_app_download_for_android_at_hqshop_sum}`,
                                                `${my_orange_app_download_for_android_at_flagshipshop_sum}`,
                                                `${my_orange_app_download_for_android_at_wellingtonshop_sum}`,
                                                `${my_orange_app_download_for_android_at_waterlooshop_sum}`,
                                                `${my_orange_app_download_for_android_at_makenishop_sum}`,
                                                `${my_orange_app_download_for_android_at_boshop_sum}`,
                                                `${my_orange_app_download_for_android_at_kenemashop_sum}`,
                                                `${my_orange_app_download_for_android_at_konoshop_sum}`,
                                                `${my_orange_app_download_for_android_at_lungishop_sum}`,
                                            ]
                                        },
                                    ],
                                }}
                                labels="Details"
                            />
                        </CCardBody>
                    </CCard>
                </CCol>

                <br />


                {/* <CCol xs={5}>
                    <CCard className="mb-4">
                        <CCardHeader> MAXIT App Download  (Iphone)</CCardHeader>
                        <CCardBody>
                            <CChartBar
                                data={{
                                    labels: [
                                        'HeadQ',
                                        'Flagship',
                                        'Wellington',
                                        'Waterloo',
                                        'Makeni',
                                        'Bo',
                                        'Kenema',
                                        'Kono',
                                        'Lungi'
                                    ],
                                    datasets: [
                                        {
                                            label: ['Details'],
                                            backgroundColor: ['#E14D2A', '#FD841F', '#3E6D9C', '#001253', '#FF7B54', '#FFB26B', '#FFD56F', '#939B62', '#B08BBB'],
                                            data: [

                                                `${orange_money_africa_app_download_for_iphone_at_hqshop_sum}`,
                                                `${orange_money_africa_app_download_for_iphone_at_flagshipshop_sum}`,
                                                `${orange_money_africa_app_download_for_iphone_at_wellingtonshop_sum}`,
                                                `${orange_money_africa_app_download_for_iphone_at_waterlooshop_sum}`,
                                                `${orange_money_africa_app_download_for_iphone_at_makenishop_sum}`,
                                                `${orange_money_africa_app_download_for_iphone_at_boshop_sum}`,
                                                `${orange_money_africa_app_download_for_iphone_at_kenemashop_sum}`,
                                                `${orange_money_africa_app_download_for_iphone_at_konoshop_sum}`,
                                                `${orange_money_africa_app_download_for_iphone_at_lungishop_sum}`,

                                            ],
                                        },
                                    ],
                                }}
                                labels="Details"
                            />
                        </CCardBody>
                    </CCard>
                </CCol> */}

                {/* <CCol xs={5}>
                    <CCard className="mb-4">
                        <CCardHeader>
                        MAXIT App Download  (Android)</CCardHeader>
                        <CCardBody>
                            <CChartBar
                                data={{
                                    labels: [
                                        'HeadQ',
                                        'Flagship',
                                        'Wellington',
                                        'Waterloo',
                                        'Makeni',
                                        'Bo',
                                        'Kenema',
                                        'Kono',
                                        'Lungi'
                                    ],
                                    datasets: [
                                        {
                                            label: ['Details'],
                                            backgroundColor: ['#E14D2A', '#FD841F', '#3E6D9C', '#001253', '#FF7B54', '#FFB26B', '#FFD56F', '#939B62', '#B08BBB'],
                                            data: [

                                                `${orange_money_africa_app_download_for_android_at_hqshop_sum}`,
                                                `${orange_money_africa_app_download_for_android_at_flagshipshop_sum}`,
                                                `${orange_money_africa_app_download_for_android_at_wellingtonshop_sum}`,
                                                `${orange_money_africa_app_download_for_android_at_waterlooshop_sum}`,
                                                `${orange_money_africa_app_download_for_android_at_makenishop_sum}`,
                                                `${orange_money_africa_app_download_for_android_at_boshop_sum}`,
                                                `${orange_money_africa_app_download_for_android_at_kenemashop_sum}`,
                                                `${orange_money_africa_app_download_for_android_at_konoshop_sum}`,
                                                `${orange_money_africa_app_download_for_android_at_lungishop_sum}`,

                                            ],
                                        },
                                    ],
                                }}
                                labels="Details"
                            />
                        </CCardBody>
                    </CCard>
                </CCol> */}

            </CRow>
        </>

    )
}

export default Dashboard


//     < div >
// <Navbar bg="dark" variant="dark">
//     <Container>
//         <Navbar.Brand href="#home">Navbar</Navbar.Brand>
//         <Nav className="me-auto">
//             <Nav.Link href="#home">Home</Nav.Link>
//             <Nav.Link href="#features">Features</Nav.Link>
//             <Nav.Link href="#pricing">Pricing</Nav.Link>
//         </Nav>
//     </Container>
// </Navbar>
// <br />
// <CContainer fluid>
//     <CChart
//         type="bar"
//         data={{
//             labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'July', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'July'],
//             datasets: [
//                 {
//                     label: 'GitHub Commits',
//                     backgroundColor: '#f87979',
//                     data: [
//                         my_orange_app_download_for_iphone_at_hqshop_sum,
//                         my_orange_app_download_for_android_at_hqshop_sum,
//                         orange_money_africa_app_download_for_iphone_at_hqshop_sum,
//                         orange_money_africa_app_download_for_android_at_hqshop_sum,

//                         my_orange_app_download_for_iphone_at_kenema_sum,
//                         my_orange_app_download_for_android_at_kenema_sum,
//                         orange_money_africa_app_download_for_iphone_at_kenema_sum,
//                         orange_money_africa_app_download_for_android_at_kenema_sum,


//                         my_orange_app_download_for_iphone_at_kailahun_sum,
//                         my_orange_app_download_for_android_at_kailahun_sum,
//                         orange_money_africa_app_download_for_iphone_at_kailahun_sum,
//                         orange_money_africa_app_download_for_android_at_kailahun_sum,


//                         my_orange_app_download_for_iphone_at_wilkenson_rd_sum,
//                         my_orange_app_download_for_android_at_wilkenson_rd_sum,
//                         orange_money_africa_app_download_for_iphone_at_wilkenson_rd_sum,
//                         orange_money_africa_app_download_for_android_at_wilkenson_rd_sum,

//                     ],
//                 },
//             ],
//         }}
//         labels="months"
//     />
// </CContainer>