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
	<>
	<Nav>
		<Bars />

		<NavMenu>
		<NavLink to='/page1' activeStyle>
			Page1
		</NavLink>
		<NavLink to='/page2' activeStyle>
			Page2
		</NavLink>
        <NavLink to='/page3' activeStyle>
			Page3
		</NavLink>
        <NavLink to='/page4' activeStyle>
			Page4
		</NavLink>
        <NavLink to='/page5' activeStyle>
			Page5
		</NavLink>
        <NavLink to='/page6' activeStyle>
			Page6
		</NavLink>
		{/* Second Nav */}
		{/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
		</NavMenu>
		{/* <NavBtn>
		<NavBtnLink to='/signin'>Sign In</NavBtnLink>
		</NavBtn> */}
	</Nav>
	</>
);
};

export default Navbar;
