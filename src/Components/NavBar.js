import React from 'react';
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
  DropdownItem } from 'reactstrap';

export default class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
    };
  }

  
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  
  render() {

      let userName = ''
      if (this.props.userName !== null && this.props.userName !==undefined){
        userName = this.props.userName;
      }

    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">Stats: {userName}</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              {/* <NavItem>
                <NavLink href="/components/">Components</NavLink>
              </NavItem> */}
              <NavItem>
                <NavLink href="https://developer.riotgames.com/">Riot API</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Links
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    <NavLink href="http://www.kyledurigan.com/">Portfolio</NavLink>
                  </DropdownItem>
                  <DropdownItem>
                    <NavLink href="https://github.com/kDurg/LoLstats">GitHub</NavLink>
                  </DropdownItem>
                  {/* <DropdownItem>
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    Reset
                  </DropdownItem> */}
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}