import React from "react";
import {
  Container,
  Nav,
  Navbar,
  Button,
} from "react-bootstrap";

import { LinkContainer } from "react-router-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../actions/userActions";


function Header() {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const dispatch = useDispatch();
  const logoutHandler = () => {
    dispatch(logout());
  };
  return (
    <header>
      <Navbar bg="primary" expand="lg" variant="dark">
        <Container>
          <Navbar.Brand href="/" style={{ fontSize: "30px" }}>
          <i class="fas fa-store-alt"></i> SHOPZADA
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Nav className="ml-auto">
              <Button style={{ fontSize: "16px" }} href="/">
                <i class="fa fa-home" aria-hidden="true"></i> Home
              </Button>

              {userInfo ? (
                <>
                  <Button style={{ fontSize: "16px" }} href="/#/profile">
                    <i class="fa fa-user"></i> {userInfo.username}
                  </Button>

                  <Button style={{ fontSize: "16px" }} href="/#/Cart">
                  <i class="fas fa-shopping-cart"></i> Cart
                  </Button>

                  <Button
                    onClick={logoutHandler}
                    href="/"
                    style={{ fontSize: "16px" }}
                  >
                    <i class="fas fa-sign-out-alt"></i> Logout
                  </Button>

                  {/* <NavDropdown.Item onClick={logoutHandler} href="/" >Logout</NavDropdown.Item> */}
                </>
              ) : (
                <>
                  <LinkContainer to="/login" style={{ color: "#FFFFFF" }}>
                    <Nav.Link
                      class="btn btn-primary"
                      style={{ color: "#FFFFFF" }}
                    >
                      <i className="fas fa-user"></i>Login
                    </Nav.Link>
                  </LinkContainer>
                  {/* <LinkContainer>
                    </LinkContainer><Button style={{ fontSize: "16px" }} href="/register"><i class="fa-solid fa-address-card"></i> Register</Button></>
                    <Button style={{ fontSize: "16px" }} href="/register"><i class="fa-solid fa-user"></i> Login</Button></> */}
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
