import querystring from 'querystring';

const {
	SPOTIFY_CLIENT_ID: client_id,
	SPOTIFY_CLIENT_SECRET: client_secret,
	SPOTIFY_REFRESH_TOKEN: refresh_token,
	SPOTIFY_G_USER_ID: user_id,
} = process.env;

const playlist_id = `1DtfpSVi5DFKi4S7ovXkta`;
const basic = Buffer.from(`${client_id}:${client_secret}`).toString('base64');

const NOW_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`;
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;
const PLAYLIST_ENDPOINT = `https://api.spotify.com/v1/users/${user_id}/playlists`;
const GET_PLAYLIST_ENDPOINT = `https://api.spotify.com/v1/playlists/${playlist_id}`;

const getAccessToken = async () => {
	const response = await fetch(TOKEN_ENDPOINT, {
		method: 'POST',
		headers: {
			Authorization: `Basic ${basic}`,
			'Content-Type': 'application/x-www-form-urlencoded',
		},
		body: querystring.stringify({
			grant_type: 'refresh_token',
			refresh_token,
		}),
	});

	return response.json();
};

export const getNowPlaying = async () => {
	const { access_token } = await getAccessToken();

	return fetch(NOW_PLAYING_ENDPOINT, {
		headers: {
			Authorization: `Bearer ${access_token}`,
		},
	});
};

export const getListUserPlaylist = async () => {
	const { access_token } = await getAccessToken();

	return fetch(PLAYLIST_ENDPOINT, {
		method: "GET",
		headers: {
			Authorization: `Bearer ${access_token}`,
		},
	});
};

export const getUserPlaylist = async () => {
	const { access_token } = await getAccessToken();

	return fetch(GET_PLAYLIST_ENDPOINT, {
		method: "GET",
		headers: {
			Authorization: `Bearer ${access_token}`,
		},
	});
};

export const getUserPlaylistItems = async () => {
	const { access_token } = await getAccessToken();

	return fetch(`${GET_PLAYLIST_ENDPOINT}/tracks`, {
		method: "GET",
		headers: {
			Authorization: `Bearer ${access_token}`,
		},
	});
};

export default async (req, res) => {
	const response = await getUserPlaylist();

	if (response.status === 204 || response.status > 400) {
		return res.status(200).json({});
	}

	const res_json = await response.json()

	return res.status(200).json(res_json);
};