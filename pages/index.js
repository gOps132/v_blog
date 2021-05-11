import dynamic from 'next/dynamic';

import home_styles from '../styles/Home.module.css';
import common_styles from '../styles/Common.module.css';
import image_styles from "../styles/Image.module.css";
import Loader from "../components/loader";

const Profile = dynamic(() => import(`../components/home/dyn_images`),
	{ loading: () => <Loader/>}
);

const Home = () => {
	return (
		<div className={common_styles.main_div}>
			<div className={home_styles.main_profile}>
				<div className={image_styles.image_border_circle}>
					<Profile />
				</div>
				<div>
					<h3>Name: Epilan Gian Cedrick G.</h3>
					<h3>Age: 15</h3>
					<h3>Born: March 26, 2006</h3>
				</div>
			</div>
		</div>
	);
};

export default Home;