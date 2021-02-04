import React from "react";
import Link from "next/link"
import style from "../../styles/Zelda.module.css";

export const getStaticProps = async () => {
	const response = await fetch("https://jsonplaceholder.typicode.com/users");
	// const response = await fetch("http://zelda-api.apius.cc/api/games?limit=2");
	console.log("response ", response);
	const data = await response.json();

	return {
		props: { zelda: data },
	};
};

const Zelda = ({ zelda }) => {
	return (
		<div>
			<h1> All Zelda Characters</h1>

			{zelda.map((zelda) => (
				<Link href={`/zelda/${zelda.id}`} key={zelda.id}>
					<a className={style.single}>
						<p>{zelda.name}</p>
					</a>
				</Link>
			))}
		</div>
	);
};

export default Zelda;
