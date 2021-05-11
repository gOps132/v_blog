import common_styles from "../styles/Common.module.css";
import list_styles from "../styles/List.module.css";

import Link from "next/link";
import Image from "next/image";

// TODO: add a server error guard

const Music = (props) => {
    return (
        <div className={common_styles.main_div}>
            {
                <div>
                    {console.log(props.spotify_data)}
                    {
                        (!props.err ?
                            <>
                                <h1>{props.spotify_data.name}</h1>
                                <ul className={list_styles.list}>
                                    {props.spotify_data.tracks.items.map((i, t) => {
                                        return (
                                            <Link href={i.track.external_urls.spotify} key={t}><a>
                                                <li className={list_styles.list_element}>
                                                    <p>{i.track.name}</p>
                                                </li>
                                            </a></Link>
                                        )
                                    })}
                                </ul>
                            </>
                        : <h1>Fetch or Server Error, reload for more info</h1>)
                    }
                </div>
            }
        </div>
    );
}

// const MusicTemplate = ({ album, album_image_url, artist, song_url, title }) => {
//     return (
//         <div>
//             <h2>{title}</h2>
//             <img src={album_image_url} />
//             <h3>{album}</h3>
//             <h4>{artist}</h4>
//             <h4>{song_url}</h4>
//         </div>
//     )
// }

// TODO: fix random occuring internal server error
export async function getServerSideProps() {

    // TODO: add some url parameters for optimization
    let res = await fetch(`${process.env.SERVER_URL}/api/spotify`);

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
        }
    };
};

export default Music;