export const getStaticPaths = async () => {
	const response = await fetch("https://zelda-api.apius.cc/api/games");
	const data = await response.json();


	const paths = data.data.map((zelda) => {
		
		return {
			params: { id: zelda._id.toString() },
		};
	});

	return {
		paths: paths,
		fallback: false,
	};
};

export const getStaticProps = async (context) => {
	const id = context.params.id;
	
	const response = await fetch(
		"https://zelda-api.apius.cc/api/games/" + id
	);
	const data = await response.json();

	return {
		props: { zelda: data },
	};
};

const Details = ({ zelda }) => {
	return (
		<div>
			<h1>{zelda.data.name}</h1>
			<p>{zelda.data.description}</p>
			<p>{zelda.data.developer}</p>
			<p>{zelda.data.released_date}</p>
		</div>
	);
};
export default Details;
