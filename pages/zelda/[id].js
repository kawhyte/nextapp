export const getStaticPath = async () => {
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

const Details = () => {
	return (
		<div>
			<h1>Details Page</h1>
		</div>
	);
};

export default Details;
