const {
    IMDB_PUBLIC_CLIENT_ID: client_id
} = process.env;

const IMDB_LIST_ENDPOINT = `https://imdb-api.com/en/API/IMDbList`;

export default async (req, res) => {
    const default_list = `ls500352523`;
	const response = await fetch(`${IMDB_LIST_ENDPOINT}/${client_id}/${default_list}`, { method: "GET" });

	if (response.status === 204 || response.status > 400) {
		return res.status(200).json({});
	}

	const res_json = await response.json()

	return res.status(200).json(res_json);
};