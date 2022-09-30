import React from 'react';
import { CDBFooter, CDBFooterLink, CDBBox, CDBBtn, CDBIcon } from 'cdbreact';
import { Container, Footer } from 'react-bootstrap';
import "../styles/style.css";
import LearnCode from '../assets/images/LearnCode.png'

export default function foot() {
    return (
        <Container>
            <div className="">
                <CDBBox display="flex" flex="column" className="mx-auto py-5" style={{ width: '90%' }}>
                    <CDBBox display="flex" justifyContent="between" className="flex-wrap">
                        <CDBBox>
                            <a href="/" className="d-flex align-items-center p-0 text-dark">
                                <img className='mb-1' alt="logo" src={LearnCode} height={30} />
                            </a>
                            <p className="my-3" style={{ width: '250px' }}>
                                We are a PlatForm that provides free learning through materials and video references that we recommend.
                            </p>
                            <CDBBox display="flex" className="mt-4">
                                <CDBBtn flat color="dark">
                                    <CDBIcon fab icon="facebook-f" />
                                </CDBBtn>
                                <CDBBtn flat color="dark" className="mx-3">
                                    <CDBIcon fab icon="twitter" />
                                </CDBBtn>
                                <CDBBtn flat color="dark" className="py-2">
                                    <CDBIcon fab icon="instagram" />
                                </CDBBtn>
                            </CDBBox>
                        </CDBBox>
                        <CDBBox>
                            <p className="h5 mb-4" style={{ fontWeight: '600', color: '#4154F1' }}>
                                Explore
                            </p>
                            <div className="d-flex flex-column" style={{ cursor: 'pointer', padding: '0' }}>
                                <a className="td text-dark mb-1" href="/">Home</a>
                                <a className="td text-dark mb-1" href="/">Courses</a>
                                <a className="td text-dark mb-1" href="/">About Us</a>
                                <a className="td text-dark" href="/">Contact</a>
                            </div>
                        </CDBBox>
                        <CDBBox>
                            <p className="h5 mb-4" style={{ fontWeight: '600', color: '#4154F1' }}>
                                Help
                            </p>
                            <div className="d-flex flex-column" style={{ cursor: 'pointer', padding: '0' }}>
                                <a className="td text-dark mb-1" href="/">Support</a>
                                <a className="td text-dark mb-1" href="/">Sign Up</a>
                                <a className="td text-dark" href="/">Sign In</a>
                            </div>
                        </CDBBox>
                        <CDBBox>
                            <p className="h5 mb-4" style={{ fontWeight: '600', color: '#4154F1' }}>
                                Products
                            </p>
                            <div className="d-flex flex-column" style={{ cursor: 'pointer', padding: '0' }}>
                                <a className="td text-dark mb-1" href="/">Bootstrap</a>
                                <a className="td text-dark mb-1" href="/">JavaScript</a>
                                <a className="td text-dark" href="/">React JS</a>
                            </div>
                        </CDBBox>
                    </CDBBox>
                    <div className="text-center mt-5">
                        <p>Copyright &copy; 2022 by <strong>Team LearnCode</strong></p>
                    </div>
                </CDBBox>
            </div>
        </Container>
    );
};