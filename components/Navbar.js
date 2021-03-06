import React from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
	return (
		<nav>
			<div className='logo'>
				<Image src='/link.png' width={60} height={70} />
				<h1>Zelda Games</h1>
			</div>
			<Link href='/'>Home </Link>
			<Link href='/about'>About </Link>
			<Link href='/zelda'>Zelda Games </Link>
		</nav>
	);
};

export default Navbar;
