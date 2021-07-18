import home_styles from '../styles/Home.module.css';
import common_styles from '../styles/Common.module.css';

const Home = () => {
    return ( 
        <div className= {common_styles.main_div}>
            <div className={home_styles.main_profile}>
                <h1> Index Page </h1>
            </div>
        </div>
    );
};

export default Home;