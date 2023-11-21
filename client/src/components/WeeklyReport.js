import React, { useState, useEffect } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import axios from 'axios';
import { Link } from 'react-router-dom';
import {
    CCol,
    CRow,
    CModalTitle,
    CModalHeader
} from '@coreui/react'
import { Table } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
//Datatable Modules
import "datatables.net-dt/js/dataTables.dataTables"
import "datatables.net-dt/css/jquery.dataTables.min.css"
import "datatables.net-buttons/js/dataTables.buttons.js"
import "datatables.net-buttons/js/buttons.colVis.js"
import "datatables.net-buttons/js/buttons.flash.js"
import "datatables.net-buttons/js/buttons.html5.js"
import "datatables.net-buttons/js/buttons.print.js"
import 'datatables.net-buttons/js/buttons.flash.min.js'
import * as jzip from 'jszip';
import 'pdfmake';
import "datatables.net-dt/css/jquery.dataTables.min.css"
import $ from 'jquery';
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
pdfMake.vfs = pdfFonts.pdfMake.vfs;
window.JSZip = jzip;







const WeeklyReport = () => {
    $(document).ready(function () {
        setTimeout(function () {
            $('#table1').DataTable(
                {
                    pagingType: 'full_numbers',
                    pageLength: 5,
                    processing: true,
                    dom: 'Bfrtip',
                    destroy: true,
                    buttons: [
                        'copy', 'print',
                        {
                            extend: 'excelHtml5',
                            title: 'My Orange App Download For Iphone'
                        },
                        {
                            extend: 'pdfHtml5',
                            title: 'My Orange App Download For Iphone'
                        },
                        {
                            extend: 'csvHtml5',
                            title: 'My Orange App Download For Iphone'
                        }
                    ]
                }
            );
        },
            1200
        );
    });

    $(document).ready(function () {
        setTimeout(function () {
            $('#table2').DataTable(
                {
                    pagingType: 'full_numbers',
                    pageLength: 5,
                    processing: true,
                    dom: 'Bfrtip',
                    destroy: true,
                    buttons: [
                        'copy', 'print',
                        {
                            extend: 'excelHtml5',
                            title: 'My Orange App Download For Android'
                        },
                        {
                            extend: 'pdfHtml5',
                            title: 'My Orange App Download For Android'
                        },
                        {
                            extend: 'csvHtml5',
                            title: 'My Orange App Download For Android'
                        }
                    ]
                }
            );
        },
            1200
        );
    });

    $(document).ready(function () {
        setTimeout(function () {
            $('#table3').DataTable(
                {
                    pagingType: 'full_numbers',
                    pageLength: 5,
                    processing: true,
                    dom: 'Bfrtip',
                    destroy: true,
                    buttons: [
                        'copy', 'print',
                        {
                            extend: 'excelHtml5',
                            title: 'Orange Money Africa App Download For Android'
                        },
                        {
                            extend: 'pdfHtml5',
                            title: 'Orange Money Africa App Download For Android'
                        },
                        {
                            extend: 'csvHtml5',
                            title: 'Orange Money Africa App Download For Android'
                        }
                    ]
                }
            );
        },
            1200
        );
    });
    $(document).ready(function () {
        setTimeout(function () {
            $('#table4').DataTable(
                {
                    pagingType: 'full_numbers',
                    pageLength: 5,
                    processing: true,
                    dom: 'Bfrtip',
                    destroy: true,
                    buttons: [
                        'copy', 'print',
                        {
                            extend: 'excelHtml5',
                            title: 'Orange Money Africa App Download For Iphone'
                        },
                        {
                            extend: 'pdfHtml5',
                            title: 'Orange Money Africa App Download For Iphone'
                        },
                        {
                            extend: 'csvHtml5',
                            title: 'Orange Money Africa App Download For Iphone'
                        }
                    ]
                }
            );

        },
            1200
        );
        $('div.text').html('<b>Custom tool bar! Text/images etc.</b>');
    });



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



    const [orange_money_africa_app_download_for_iphone_at_hqshop_sum, setOrange_money_africa_app_download_for_iphone_at_hqshop_sum] = useState(null);
    const [orange_money_africa_app_download_for_iphone_at_kenemashop_sum, setOrange_money_africa_app_download_for_iphone_at_kenemashop_sum] = useState(null);
    const [orange_money_africa_app_download_for_iphone_at_boshop_sum, setOrange_money_africa_app_download_for_iphone_at_boshop_sum] = useState(null);
    const [orange_money_africa_app_download_for_iphone_at_makenishop_sum, setOrange_money_africa_app_download_for_iphone_at_makenishop_sum] = useState(null);
    const [orange_money_africa_app_download_for_iphone_at_konoshop_sum, setOrange_money_africa_app_download_for_iphone_at_konoshop_sum] = useState(null);
    const [orange_money_africa_app_download_for_iphone_at_flagshipshop_sum, setOrange_money_africa_app_download_for_iphone_at_flagshipshop_sum] = useState(null);
    const [orange_money_africa_app_download_for_iphone_at_lungishop_sum, setOrange_money_africa_app_download_for_iphone_at_lungishop_sum] = useState(null);
    const [orange_money_africa_app_download_for_iphone_at_waterlooshop_sum, setOrange_money_africa_app_download_for_iphone_at_waterlooshop_sum] = useState(null);
    const [orange_money_africa_app_download_for_iphone_at_wellingtonshop_sum, setOrange_money_africa_app_download_for_iphone_at_wellingtonshop_sum] = useState(null);



    const [orange_money_africa_app_download_for_android_at_hqshop_sum, setOrange_money_africa_app_download_for_android_at_hqshop_sum] = useState(null);
    const [orange_money_africa_app_download_for_android_at_kenemashop_sum, setOrange_money_africa_app_download_for_android_at_kenemashop_sum] = useState(null);
    const [orange_money_africa_app_download_for_android_at_boshop_sum, setOrange_money_africa_app_download_for_android_at_boshop_sum] = useState(null);
    const [orange_money_africa_app_download_for_android_at_makenishop_sum, setOrange_money_africa_app_download_for_android_at_makenishop_sum] = useState(null);
    const [orange_money_africa_app_download_for_android_at_konoshop_sum, setOrange_money_africa_app_download_for_android_at_konoshop_sum] = useState(null);
    const [orange_money_africa_app_download_for_android_at_flagshipshop_sum, setOrange_money_africa_app_download_for_android_at_flagshipshop_sum] = useState(null);
    const [orange_money_africa_app_download_for_android_at_lungishop_sum, setOrange_money_africa_app_download_for_android_at_lungishop_sum] = useState(null);
    const [orange_money_africa_app_download_for_android_at_waterlooshop_sum, setOrange_money_africa_app_download_for_android_at_waterlooshop_sum] = useState(null);
    const [orange_money_africa_app_download_for_android_at_wellingtonshop_sum, setOrange_money_africa_app_download_for_android_at_wellingtonshop_sum] = useState(null);



    useEffect(() => {
        axios.get(`http://localhost:4500/oneWeek`)
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



                setOrange_money_africa_app_download_for_iphone_at_hqshop_sum(response.data.orange_money_africa_app_download_for_iphone_at_hqshop_sum);
                setOrange_money_africa_app_download_for_iphone_at_flagshipshop_sum(response.data.orange_money_africa_app_download_for_iphone_at_flagshipshop_sum);
                setOrange_money_africa_app_download_for_iphone_at_makenishop_sum(response.data.orange_money_africa_app_download_for_iphone_at_makenishop_sum);
                setOrange_money_africa_app_download_for_iphone_at_boshop_sum(response.data.orange_money_africa_app_download_for_iphone_at_boshop_sum);
                setOrange_money_africa_app_download_for_iphone_at_kenemashop_sum(response.data.orange_money_africa_app_download_for_iphone_at_kenemashop_sum);
                setOrange_money_africa_app_download_for_iphone_at_konoshop_sum(response.data.orange_money_africa_app_download_for_iphone_at_konoshop_sum);
                setOrange_money_africa_app_download_for_iphone_at_lungishop_sum(response.data.orange_money_africa_app_download_for_iphone_at_lungishop_sum);
                setOrange_money_africa_app_download_for_iphone_at_wellingtonshop_sum(response.data.orange_money_africa_app_download_for_iphone_at_wellingtonshop_sum);
                setOrange_money_africa_app_download_for_iphone_at_waterlooshop_sum(response.data.orange_money_africa_app_download_for_iphone_at_waterlooshop_sum);


                setOrange_money_africa_app_download_for_android_at_hqshop_sum(response.data.orange_money_africa_app_download_for_android_at_hqshop_sum);
                setOrange_money_africa_app_download_for_android_at_flagshipshop_sum(response.data.orange_money_africa_app_download_for_android_at_flagshipshop_sum);
                setOrange_money_africa_app_download_for_android_at_makenishop_sum(response.data.orange_money_africa_app_download_for_android_at_makenishop_sum);
                setOrange_money_africa_app_download_for_android_at_boshop_sum(response.data.orange_money_africa_app_download_for_android_at_boshop_sum);
                setOrange_money_africa_app_download_for_android_at_kenemashop_sum(response.data.orange_money_africa_app_download_for_android_at_kenemashop_sum);
                setOrange_money_africa_app_download_for_android_at_konoshop_sum(response.data.orange_money_africa_app_download_for_android_at_konoshop_sum);
                setOrange_money_africa_app_download_for_android_at_lungishop_sum(response.data.orange_money_africa_app_download_for_android_at_lungishop_sum);
                setOrange_money_africa_app_download_for_android_at_wellingtonshop_sum(response.data.orange_money_africa_app_download_for_android_at_wellingtonshop_sum);
                setOrange_money_africa_app_download_for_android_at_waterlooshop_sum(response.data.orange_money_africa_app_download_for_android_at_waterlooshop_sum);

            })
            .catch(error => console.log(error));
    }, []);

    // setTimeout(function () {
    //     window.location.reload(1);
    // }, 25000);

    return (

        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">ORANGE SIERRA LEONE</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home"></Nav.Link>
                        <Nav.Link href="#features"></Nav.Link>
                        <Nav.Link href="weeklyReport"><Link to="/" style={{ color: "white", textDecoration: "none", fontWeight: 700 }}>Dashboard</Link></Nav.Link>
                        <Nav.Link href="weeklyReport"><Link to="/monthlyReport" style={{ color: "white", textDecoration: "none", fontWeight: 700 }}>One Month</Link></Nav.Link>
                    </Nav>
                </Container>
            </Navbar>

            <div className="container text-center">
                <CRow>

                    <CCol xs={12}>
                        <CModalHeader>
                            <CModalTitle>My Orange App Download For Iphone</CModalTitle>
                        </CModalHeader>
                        <Table striped bordered hover size="sm" responsive id="table1">
                            <caption><h2>My Orange App Download For Iphone</h2></caption>
                            <thead>
                                <tr>
                                    <th>HQ</th>
                                    <th>Flagship</th>
                                    <th>Wellington</th>
                                    <th>Waterloo</th>
                                    <th>Makeni</th>
                                    <th>Bo</th>
                                    <th>Kenema</th>
                                    <th>Kono</th>
                                    <th>Lungi</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr >
                                    <td>{my_orange_app_download_for_iphone_at_hqshop_sum}</td>
                                    <td>{my_orange_app_download_for_iphone_at_flagshipshop_sum}</td>
                                    <td>{my_orange_app_download_for_iphone_at_wellingtonshop_sum}</td>
                                    <td>{my_orange_app_download_for_iphone_at_waterlooshop_sum}</td>
                                    <td>{my_orange_app_download_for_iphone_at_makenishop_sum}</td>
                                    <td>{my_orange_app_download_for_iphone_at_boshop_sum}</td>
                                    <td>{my_orange_app_download_for_iphone_at_kenemashop_sum}</td>
                                    <td>{my_orange_app_download_for_iphone_at_konoshop_sum}</td>
                                    <td>{my_orange_app_download_for_iphone_at_lungishop_sum}</td>
                                </tr>

                            </tbody>
                        </Table>

                    </CCol>

                    <br />
                    <br />

                    <CCol xs={12}>
                        <CModalHeader>
                            <CModalTitle>My Orange App Download For Android</CModalTitle>
                        </CModalHeader>
                        <Table striped bordered hover size="sm" responsive id="table2">
                            <caption><h2>My Orange App Download For Android</h2></caption>
                            <thead>
                                <tr>
                                    <th>HQ</th>
                                    <th>Flagship</th>
                                    <th>Wellington</th>
                                    <th>Waterloo</th>
                                    <th>Makeni</th>
                                    <th>Bo</th>
                                    <th>Kenema</th>
                                    <th>Kono</th>
                                    <th>Lungi</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr >
                                    <td>{my_orange_app_download_for_android_at_hqshop_sum}</td>
                                    <td>{my_orange_app_download_for_android_at_flagshipshop_sum}</td>
                                    <td>{my_orange_app_download_for_android_at_wellingtonshop_sum}</td>
                                    <td>{my_orange_app_download_for_android_at_waterlooshop_sum}</td>
                                    <td>{my_orange_app_download_for_android_at_makenishop_sum}</td>
                                    <td>{my_orange_app_download_for_android_at_boshop_sum}</td>
                                    <td>{my_orange_app_download_for_android_at_kenemashop_sum}</td>
                                    <td>{my_orange_app_download_for_android_at_konoshop_sum}</td>
                                    <td>{my_orange_app_download_for_android_at_lungishop_sum}</td>
                                </tr>

                            </tbody>
                        </Table>

                    </CCol>

                    <br />
                    <br />

                    <CCol xs={12}>
                        <CModalHeader>
                            <CModalTitle>Orange Money Africa App Download For Android</CModalTitle>
                        </CModalHeader>
                        <Table striped bordered hover size="sm" responsive id="table3">
                            <caption><h2>Orange Money Africa App Download For Android</h2></caption>
                            <thead>
                                <tr>
                                    <th>HQ</th>
                                    <th>Flagship</th>
                                    <th>Wellington</th>
                                    <th>Waterloo</th>
                                    <th>Makeni</th>
                                    <th>Bo</th>
                                    <th>Kenema</th>
                                    <th>Kono</th>
                                    <th>Lungi</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr >
                                    <td>{orange_money_africa_app_download_for_android_at_hqshop_sum}</td>
                                    <td>{orange_money_africa_app_download_for_android_at_flagshipshop_sum}</td>
                                    <td>{orange_money_africa_app_download_for_android_at_wellingtonshop_sum}</td>
                                    <td>{orange_money_africa_app_download_for_android_at_waterlooshop_sum}</td>
                                    <td>{orange_money_africa_app_download_for_android_at_makenishop_sum}</td>
                                    <td>{orange_money_africa_app_download_for_android_at_boshop_sum}</td>
                                    <td>{orange_money_africa_app_download_for_android_at_kenemashop_sum}</td>
                                    <td>{orange_money_africa_app_download_for_android_at_konoshop_sum}</td>
                                    <td>{orange_money_africa_app_download_for_android_at_lungishop_sum}</td>
                                </tr>

                            </tbody>
                        </Table>
                    </CCol>

                    <br />
                    <br />


                    <CCol xs={12}>
                        <CModalHeader>
                            <CModalTitle>Orange Money Africa App Download For Iphone</CModalTitle>
                        </CModalHeader>
                        <Table striped bordered hover size="sm" responsive id="table4">
                            <caption><h2>Orange Money Africa App Download For Android</h2></caption>
                            <thead>
                                <tr>
                                    <th>HQ</th>
                                    <th>Flagship</th>
                                    <th>Wellington</th>
                                    <th>Waterloo</th>
                                    <th>Makeni</th>
                                    <th>Bo</th>
                                    <th>Kenema</th>
                                    <th>Kono</th>
                                    <th>Lungi</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr >
                                    <td>{orange_money_africa_app_download_for_iphone_at_hqshop_sum}</td>
                                    <td>{orange_money_africa_app_download_for_iphone_at_flagshipshop_sum}</td>
                                    <td>{orange_money_africa_app_download_for_iphone_at_wellingtonshop_sum}</td>
                                    <td>{orange_money_africa_app_download_for_iphone_at_waterlooshop_sum}</td>
                                    <td>{orange_money_africa_app_download_for_iphone_at_makenishop_sum}</td>
                                    <td>{orange_money_africa_app_download_for_iphone_at_boshop_sum}</td>
                                    <td>{orange_money_africa_app_download_for_iphone_at_kenemashop_sum}</td>
                                    <td>{orange_money_africa_app_download_for_iphone_at_konoshop_sum}</td>
                                    <td>{orange_money_africa_app_download_for_iphone_at_lungishop_sum}</td>
                                </tr>

                            </tbody>
                        </Table>
                    </CCol>

                </CRow>

            </div>


        </>

    )
}

export default WeeklyReport

