import React, { useState } from 'react'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
  Container,
  Input,
} from 'reactstrap'

function NavbarTop() {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => setIsOpen(!isOpen)

  return (
    <Container>
      <Navbar expand="md">
        <NavbarBrand href="/">Brand</NavbarBrand>
        <div
          onClick={() => {
            setIsOpen(!isOpen)
          }}
          className="d-block d-md-none"
        >
          <img src="https://img.icons8.com/ios-glyphs/30/null/menu-rounded.png" />
        </div>
        <Collapse isOpen={isOpen} navbar>
          <Nav navbar className="ms-auto">
            <NavItem>
              <NavLink href="/">Wishlist</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/">Cart</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/">Profile</NavLink>
            </NavItem>
            {/* <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Profile
              </DropdownToggle>
              <DropdownMenu end>
                <DropdownItem>Option 1</DropdownItem>
                <DropdownItem>Option 2</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Reset</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown> */}
          </Nav>
        </Collapse>
      </Navbar>
    </Container>
  )
}

export default NavbarTop
