import React from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import Logo from '../../assests/logo.png'
import Facebook from '../../assests/facebook.png'
import Instagram from '../../assests/instagram.png'
import Twitter from '../../assests/twitter.png'
import User from '../../assests/user.png'
import Star from '../../assests/star.png'
import Search from '../../assests/search.png'
import NavBackground from '../../assests/nav-background.png'
import './NavHeader.css'


class NavHeader extends React.Component {

    render() {
        return (
            <div>
                <div className="top-nav">
                    <Nav className="d-flex justify-content-between">
                        <div className="d-flex top-nav-item">
                            <Nav.Item className="d-flex">
                                <ul className="social-list-container">
                                    <li>
                                        <img
                                            src={Facebook}
                                            className="d-inline-block icon-size"
                                            alt="wbn-logo"
                                        />
                                    </li>
                                    <li>
                                        <img
                                            src={Twitter}
                                            className="d-inline-block icon-size"
                                            alt="wbn-logo"
                                        />
                                    </li>
                                    <li>
                                        <img
                                            src={Instagram}
                                            className="d-inline-block icon-size"
                                            alt="wbn-logo"
                                        />
                                    </li>
                                </ul>
                            </Nav.Item>
                            <Nav.Item className="vendor-container">
                                <img
                                    src={Star}
                                    className="d-inline-block icon-size"
                                    alt="wbn-logo"
                                />
                                <span>Become a Vendor</span>
                            </Nav.Item>
                        </div>

                        <div className="justify-content-center">
                            <Nav.Item>
                                <img
                                    src={Logo}
                                    width="130"
                                    height="60"
                                    className="d-inline-block align-top"
                                    alt="wbn-logo"
                                />
                            </Nav.Item>
                        </div>

                        <div className="d-flex top-nav-item justify-content-end">
                            <Nav.Item className="d-flex">
                                <span className="bride">Become a Bride</span>
                            </Nav.Item>
                            <Nav.Item className="d-flex">
                                <div className="my-account">
                                    <span>My Account</span>
                                    <img
                                        src={User}
                                        className="d-inline-block icon-size"
                                        alt="wbn-logo"
                                    />
                                </div>
                            </Nav.Item>
                            <Nav.Item>
                                <img
                                    src={Search}
                                    className="d-inline-block icon-size"
                                    alt="wbn-logo"
                                />

                            </Nav.Item>
                        </div>

                    </Nav>
                </div>
                {/* <Navbar>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    </Navbar.Collapse> */}
                    <Nav className="navbar justify-content-between main-nav" style={{ backgroundImage: `url(${NavBackground})` }}>
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">Watch Show</Nav.Link>
                        <Nav.Link href="#link">Directory</Nav.Link>
                        <Nav.Link href="#link">Discount</Nav.Link>
                        <Nav.Link href="#link">Freebies</Nav.Link>
                        <Nav.Link href="#link">Blog</Nav.Link>
                        <Nav.Link href="#link">Contact</Nav.Link>
                       
                    </Nav>
                {/* </Navbar> */}
            </div>
        )
    }
}

export default NavHeader