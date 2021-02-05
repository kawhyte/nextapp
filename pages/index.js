import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
	return (
		<>
			<Head>
			<title> Zelda List | Home</title>
			<meta name="keywords" content="ninjas" />
			</Head>
			<div>
				<h1 className={styles.title}> Home Page</h1>
				<p className={styles.text}>
					The time you've been taking to ship some of your items is different
					than your listed processing times. Accurate processing times can drive
					sales and prevent cases by helping meet buyer expectations.
				</p>
				<p className={styles.text}>
					The time you've been taking to ship some of your items is different
					than your listed processing times. Accurate processing times can drive
					sales and prevent cases by helping meet buyer expectations.
				</p>

				<Link href='/zelda'>
					<a className={styles.btn}>See more Listings </a>
				</Link>
			</div>
		</>
	);
}
