import React from "react";
import Link from "next/Link";
import Image from "next/image";

const Navbar = () => {
	return (
		<nav>
			<div className='logo'>
				<h1>Mario List</h1>
				<Image src='/link.png' width={60} height={70} />
			</div>
			<Link href='/'>Home </Link>
			<Link href='/about'>About </Link>
			<Link href='/mario'>Mario Listings </Link>
		</nav>
	);
};

export default Navbar;
