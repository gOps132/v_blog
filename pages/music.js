import common_styles from "../styles/Common.module.css"
import Image from "next/image";

const Music = (props) => {
    return (
        <div className={common_styles.main_div}>
            {
                <div>
                    {console.log(props.spotify_data)}
                    {/* check if playing anything */}
                    {
                        (props.spotify_data.isPlaying ? 
                            <MusicTemplate 
                                album={props.spotify_data.title} 
                                album_image_url={props.spotify_data.albumImageUrl}
                                artist={props.spotify_data.artist}
                                song_url={props.spotify_data.songUrl}
                                title={props.spotify_data.title}
                            /> 
                        : <h1>Not playing anything</h1>)
                    }
                </div>
            }
        </div>
    );
}

const MusicTemplate = ({ album, album_image_url, artist, song_url, title }) => {
    return (
        <div>
            <h2>{title}</h2>
            <img src={album_image_url} />
            <h3>{album}</h3>
            <h4>{artist}</h4>
            <h4>{song_url}</h4>
        </div>
    )
}

// const MusicTemplateList = ({album, album_image_url, artist, song_url, title}) => {
//     return (
//         <li>
//             <div>
//                 <h2>{title}</h2>
//                 <img src={album_image_url} />
//                 <h3>{album}</h3>
//                 <h4>{artist}</h4>
//                 <h4>{song_url}</h4>
//             </div>
//         </li>
//     );
// }

export async function getServerSideProps() {
    let res = await fetch('http://localhost:3000/api/spotify');
    let data = await res.json();

    console.log("MUSIC RES:" + res);
    return {
        props: {
            spotify_data: data
        }
    };
};

export default Music;