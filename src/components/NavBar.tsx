import React, { useEffect } from 'react';
import PropTypes, { InferProps } from 'prop-types';
import {
  Navbar, NavbarBrand, Nav, NavItem, NavLink
} from 'reactstrap';

const NavBar = ({ setToggle }: InferProps<typeof NavBar.propTypes>) => {
  useEffect(() => {
    console.warn('NavBar Component mounted');
  }, []);
  return (
    <>
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">LoGit</NavbarBrand>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink>
                <button id="musicButton" onClick={() => setToggle('Music')}>
                  Music
                </button>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                <button id="releasesButton" onClick={() => setToggle('Releases')}>
                  Releases
                </button>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                <button id="contactButton" onClick={() => setToggle('Contact')}>
                  Contact
                </button>
              </NavLink>
            </NavItem>
          </Nav>
        </Navbar>
      </div>
    </>
  );
};

export default NavBar;

NavBar.propTypes = {
  setToggle: PropTypes.func,
};
