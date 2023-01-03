import React from 'react';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';
import {
  // Collapse,
  Navbar,
  // NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  // Button,
} from 'reactstrap';
// import { signInUser, signOutUser } from '../helpers/auth';

const NavBar = ({ user, setToggle }) => {
  console.warn('delete me from NavBar', user, setToggle);

  // const [isOpen, setIsOpen] = useState(false);
  // const toggle = () => setIsOpen(!isOpen);

  // this authenticated bit only works when auth verified
  // const authenticated = () => (
  //   <>
  //     <NavItem>
  //       <Link className="nav-link" to="/add-drivers/">
  //         Add Driver
  //       </Link>
  //     </NavItem>
  //     <NavItem>
  //       <Link className="nav-link" to="/drivers">
  //         Drivers
  //       </Link>
  //     </NavItem>
  //   </>
  // );

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">LoGit</NavbarBrand>
        {/* <NavbarToggler onClick={toggle} /> */}
        <Nav className="mr-auto" navbar>
          <NavItem>
            <NavLink>
              <button id="musicButton" onClick={setToggle('Music')}>
                Music
              </button>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink>
              <button id="releasesButton" onClick={setToggle('Releases')}>
                Releases
              </button>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink>
              <button id="contactButton" onClick={setToggle('Contact')}>
                Contact
              </button>
            </NavLink>
          </NavItem>
          {/* <Collapse isOpen={isOpen} navbar>
            {user && authenticated()}
            {user !== null && (
              <NavItem>
                {user ? (
                  <Button color="danger" onClick={signOutUser}>
                    Sign Out
                  </Button>
                ) : (
                  <Button color="info" onClick={signInUser}>
                    Sign In
                  </Button>
                )}
              </NavItem>
            )}
          </Collapse> */}
        </Nav>
      </Navbar>
    </div>
  );
};

NavBar.propTypes = {
  user: PropTypes.any,
  setToggle: PropTypes.any,
};

export default NavBar;
