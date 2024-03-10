export const FetchApi = async (url) => {
	try {
		const response = await fetch(url);
		const data = response.json();
		return data;
	} catch (error) {
		console.log('api calling error...', error);
	}
};
