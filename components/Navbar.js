import React from "react";
import Link from 'next/Link'
const Navbar = () => {
	return (
		<nav>
			<div className='logo'>
				<h1>Mario List</h1>
			</div>
            	<Link href="/">Home </Link>
            	<Link href="/about">About </Link>
            	<Link href="/mario">Mario Listings </Link>

		</nav>
	);
}

export default Navbar;
