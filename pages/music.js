import common_styles from "../styles/Common.module.css";
import list_styles from "../styles/List.module.css";
import image_styles from "../styles/Image.module.css";

import Link from "next/link";
import Image from "next/image";

import { useRouter } from 'next/router'

import Loader from "../components/loader";

// TODO: add a server error guard
// TODO: add a loader for SSG load times

const Music = (props) => {
    const router = useRouter();
    let src_set_str = "";
    if (router.isFallback) {
        return <Loader />
    } else {
        props.spotify_data.images.map(i => {
            src_set_str += `${i.url} ${i.width}w, `;
        })
    }
    return (
        <div className={common_styles.main_div}>
            {
                <>
                    {/* TODO: use the preview url to preview the song */}
                    {console.log(props.spotify_data)}
                    {
                        (!props.err ?
                            <div className={list_styles.list}>
                                <div className={list_styles.play_list_header}>
                                    {<Image
                                        className={image_styles.image_border_circle}
                                        src={props.spotify_data.images[0].url}
                                        srcSet={src_set_str}
                                        width={150}
                                        height={150}
                                    />}
                                    <h1 className={list_styles.play_list_name}>{props.spotify_data.name}</h1>
                                </div>
                                <ul>
                                    {props.spotify_data.tracks.items.map((i, t) => {
                                        return (
                                            <Link href={i.track.external_urls.spotify} key={t}><a>
                                                <li className={list_styles.list_element}>
                                                    <p className={list_styles.index}>{t + 1}</p>
                                                    <div className={list_styles.container}>
                                                        <p>{i.track.name}</p>
                                                    </div>
                                                    <></>
                                                </li>
                                            </a></Link>
                                        )
                                    })}
                                </ul>
                            </div>
                            : <h1>Fetch or Server Error, reload for more info</h1>)
                    }
                </>
            }
        </div>
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