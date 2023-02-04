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
              <NavLink href="/" className='d-flex align-items-center'>
                <img
                  className="hover-animation shadoww"
                  src="https://img.icons8.com/emoji/25/null/heart-suit.png"
                />{' '}
                <small className='d-flex d-md-none'>Wishlist</small>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/" className='d-flex align-items-center'>
                <img
                  className="hover-animation shadoww"
                  src="https://img.icons8.com/fluency/25/null/red-purse.png"
                />{' '}
                <small className='d-flex d-md-none'>Cart</small>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/" className='d-flex align-items-center'>
                <img
                  className="hover-animation shadoww"
                  src="https://img.icons8.com/fluency/25/null/administrator-male.png"
                />{' '}
                <small className='d-flex d-md-none'>Profile</small>
              </NavLink>
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
