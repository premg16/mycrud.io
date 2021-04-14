import React from "react"
import { Navbar, Nav} from "react-bootstrap"
import { useAuth } from "../../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"
import { FcMenu } from "react-icons/fc"

export default function NavbarComponent() {
  const { logout } = useAuth()
  const history = useHistory()
  async function handleLogout() {
    await logout()
    history.push("/")
  }
  return (
    <>
      <Navbar expand="sm"className="shadow-sm bg-navbar m-0" sticky="top">
        <Navbar.Brand as={Link} to="/dashboard"><h2 className="text-white">CRUD</h2></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <FcMenu />
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link  as={Link} to="/user" className="text-white m-1 pl-1 bg-button">Profile</Nav.Link>
            <Nav.Link onClick={handleLogout}  className="text-white m-1 pl-1 bg-button">Logout</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  )
}