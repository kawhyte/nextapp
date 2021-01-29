import Head from "next/head";
import Link from "next/Link";


import styles from "../styles/Home.module.css";

export default function Home() {
	return (
		<div>
		
			<h1> Home Page</h1>
			<p>
				The time you've been taking to ship some of your items is different than
				your listed processing times. Accurate processing times can drive sales
				and prevent cases by helping meet buyer expectations.
      </p> 
      <Link href="/mario"> See more Listings </Link>
      
		</div>
	);
}
