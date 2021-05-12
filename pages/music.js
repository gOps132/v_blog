import common_styles from "../styles/Common.module.css";
import list_styles from "../styles/List.module.css";
import image_styles from "../styles/Image.module.css";

import Link from "next/link";
import Image from "next/image";

import { useRouter } from 'next/router'
import { useState } from "react";

import Loader from "../components/loader";

import PlayCircle from "../public/svg/play-circle-solid.svg";

// TODO: add a server error guard
// TODO: add a loader for SSG load times

const Music = (props) => {
	const router = useRouter();
	let [isPlaying, useIsPlaying] = useState(false);
	if (router.isFallback) {
		return <Loader />
	}
	return (
		<>
			<div className={`${common_styles.main_div}`}>
				{/* <> */}
				{console.log(props.spotify_data)}
				{
					(!props.err ?
						<>
							<div className={list_styles.play_list_header}>
								{<Image
									className={image_styles.image_border_circle}
									src={props.spotify_data.images[0].url}
									width={150}
									height={150}
								/>}
								<h1 className={list_styles.play_list_name}>{props.spotify_data.name}</h1>
							</div>
							<div className={list_styles.list}>
								<ul>
									{props.spotify_data.tracks.items.map((i, t) => {
										return (
											<li id={t} className={list_styles.list_element}>
												<div>
													{
														<>
															{
																(i.track.preview_url) ?
																	<div className={list_styles.preview_button}>
																		{/* on play change to pause button */}
																		<PlayCircle
																			className={list_styles.play_button}
																			onClick={() => {
																				let pid = document.getElementById(`preview-${t}`);
																				(isPlaying ? pid.pause() : pid.play());
																				useIsPlaying(!isPlaying);
																			}}
																		/>
																	</div>
																	: <>NONE</>
															}
														</>
													}
												</div>

												<audio id={`preview-${t}`} >
													<source src={i.track.preview_url} type="audio/mp3" />
												</audio>

												<Link href={i.track.external_urls.spotify} key={t}>
													<div className={list_styles.container}>
														<u>{i.track.name}</u>
													</div>
												</Link>

												<p className={list_styles.index}>{t + 1}</p>
											</li>
										)
									})}
								</ul>
							</div>
						</>
						: <h1>Fetch or Server Error, reload for more info</h1>
					)
				}
				{/* </> */}
			</div>
		</>
	);
}

export async function getStaticProps() {
	let res = await fetch(`${process.env.SERVER_URL}/api/spotify`, { method: "GET" })

	if (res.status === 204 || res.status > 400) {
		return {
			props: {
				err: true
			}
		}
	}

	let data = await res.json();

	return {
		props: {
			spotify_data: data,
			err: false
		},
		revalidate: 60
	};
};

export default Music;