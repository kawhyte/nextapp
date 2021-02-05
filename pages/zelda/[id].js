export const getStaticPaths = async () => {
	const response = await fetch("https://jsonplaceholder.typicode.com/users");
	const data = await response.json();

	const paths = data.map((zelda) => {
		return {
			params: { id: zelda.id.toString() },
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
		"https://jsonplaceholder.typicode.com/users/" + id
	);
	const data = await response.json();

	return {
		props: { zelda: data },
	};
};

const Details = ({ zelda }) => {
	return (
		<div>
			<h1>{zelda.name}</h1>
			<p>{zelda.email}</p>
			<p>{zelda.website}</p>
			<p>{zelda.address.city}</p>
		</div>
	);
};
export default Details;
