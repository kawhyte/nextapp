import React from "react";
import Link from "next/Link";
import Image from "next/image";

const Navbar = () => {
	return (
		<nav>
			<div className='logo'>
				<Image src='/link.png' width={60} height={70} />
				<h1>Zelda List</h1>
			</div>
			<Link href='/'>Home </Link>
			<Link href='/about'>About </Link>
			<Link href='/zelda'>Zelda Listings </Link>
		</nav>
	);
};

export default Navbar;
