import common_styles from "../styles/Common.module.css"

const Music = (props) => {
    return (
        <div className={common_styles.main_div}>
            <h1>favored music</h1>
            <p>Some data: {props.samp_string}</p>
            {console.log(props.dynamic_data)}

            <h1>Currently Playing: </h1>
            
        </div>
    );
}

export async function getServerSideProps() {
    // let res = await fetch('http://localhost:3000/api/spotify', {
    //     // method: 'GET',
    //     // headers: { 'Content-Type': 'application/json' },
    //     // body: JSON.stringify({
    //     //     /* Form data */
    //     // })
    // });
    let res = await fetch('http://localhost:3000/api/spotify');
    let data = await res.json();

    console.log("MUSIC RES:" + res);
    return {
        props: {
            samp_string: "thing",
            dynamic_data: data
        }
    };
};
export default Music;