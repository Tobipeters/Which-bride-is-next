import React from 'react'
import { Nav, Navbar, InputGroup, FormControl, Button, Image, Container } from 'react-bootstrap'
import Logo from '../../assests/logo.png'
import Facebook from '../../assests/facebook.png'
import Instagram from '../../assests/instagram.png'
import Twitter from '../../assests/twitter.png'
import User from '../../assests/user.png'
import Star from '../../assests/star.png'
import Search from '../../assests/search.png'
import NavBackground from '../../assests/nav-background.png'
import './NavHeader.css'
import { FaSearch } from 'react-icons/fa'
import SearchFlower from '../../assests/search-bg.png'


class NavHeader extends React.Component {
    constructor() {
        super()

        this.state = {

        }

        this.openSearchView = this.openSearchView.bind(this)
    }

    openSearchView() {

    }


    render() {
        return (
            <div>
                <div className="search-dropdown">
                    <div className="img-container">
                        <img src={SearchFlower} alt="search which bride is next" />
                    </div>
                    <Container className="mb-5">
                    <h3 className="sub-title">Search</h3>   
                    <InputGroup className="mb-3">
                        <FormControl
                            placeholder="Search Freebies, Directory, Exihibitors, Blogs..."
                            text="text"
                            required
                        />
                        <InputGroup.Append>
                            <Button variant="outline-secondary">
                                <FaSearch />
                            </Button>
                        </InputGroup.Append>
                    </InputGroup>
                    </Container>
                </div>
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
                <Nav className="navbar justify-content-between main-nav" style={{ backgroundImage: `url(${NavBackground})` }}>
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#link">Watch Show</Nav.Link>
                    <Nav.Link href="#link">Directory</Nav.Link>
                    <Nav.Link href="#link">Discount</Nav.Link>
                    <Nav.Link href="#link">Freebies</Nav.Link>
                    <Nav.Link href="#link">Blog</Nav.Link>
                    <Nav.Link href="#link">Contact</Nav.Link>
                </Nav>

                {/* Mobile view navbar */}
                <Navbar expand="lg" className="mobile-nav">
                    <div className="logo-and-toggle">
                        <Navbar.Brand>
                            <img
                                src={Logo}
                                width="130"
                                height="60"
                                className="d-inline-block"
                                alt="wbn-logo"
                            />
                        </Navbar.Brand>
                        <Navbar.Toggle className="toggler" aria-controls="basic-navbar-nav" />
                    </div>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mob-nav-items">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#link">Watch Show</Nav.Link>
                            <Nav.Link href="#link">Directory</Nav.Link>
                            <Nav.Link href="#link">Discount</Nav.Link>
                            <Nav.Link href="#link">Freebies</Nav.Link>
                            <Nav.Link href="#link">Blog</Nav.Link>
                            <Nav.Link href="#link">Contact</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>


            </div>
        )
    }
}

export default NavHeader