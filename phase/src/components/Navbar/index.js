import React from 'react';
import {
Nav,
NavLink,
Bars,
NavMenu,
NavBtn,
NavBtnLink,
} from './NavbarElements';

const Navbar = () => {
return (
	<Nav>
		<Bars />
		<NavMenu>
		<NavLink to='/page1' activeStyle>
        Text
		</NavLink>
		<NavLink to='/page2' activeStyle>
        Choices
		</NavLink>
        <NavLink to='/page3' activeStyle>
        To Do
		</NavLink>
        <NavLink to='/page4' activeStyle>
        Profile
		</NavLink>
        <NavLink to='/page5' activeStyle>
        Colors
		</NavLink>
        <NavLink to='/page6' activeStyle>
        Lower Right
		</NavLink>
		</NavMenu>
	</Nav>

);
};

export default Navbar;
