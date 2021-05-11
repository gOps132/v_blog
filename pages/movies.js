import { useRouter } from "next/router";

import Loader from "../components/loader";

const Movies = (props) => {
    const router = useRouter();
    if(router.isFallback){
        return (<Loader />)
    }
    return (
        <>
            <h1>This is the Movies page</h1>
            <p>{props.samp}</p>
        </>
    )
}

export const getStaticProps = async() => {
    return {
        props: {
            samp: "samp_string",
        }, revalidate: 60
    }
};

export default Movies;