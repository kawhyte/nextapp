import React from "react";
import Link from "next/link"
import style from "../../styles/Zelda.module.css";

export const getStaticProps = async () => {
	// const response = await fetch("https://jsonplaceholder.typicode.com/users");
	const response = await fetch("http://zelda-api.apius.cc/api/games");
	// const response = await fetch("http://zelda-api.apius.cc/api/games?limit=2");
	
	const data = await response.json();
console.log("response ", data);
	return {
		props: { zelda: data },
	};
};

const Zelda = ({ zelda }) => {

	console.log(zelda)
	return (
		<div>
			<h1> All Zelda Games</h1>

			{zelda.data.map((zelda) => (
				<Link href={`/zelda/${zelda._id}`} key={zelda._id}>
					<a className={style.single}>
						<p>{zelda.name}</p>
					</a>
				</Link>
			))}
		</div>
	);
};

export default Zelda;
