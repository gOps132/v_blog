import dynamic from 'next/dynamic';
import Image from "next/image";

import home_styles from '../styles/Home.module.css';

import Loader from "../components/loader";

const Profile = dynamic(() => import(`../components/home/dyn_images`),
	{ loading: () => <Loader/>}
);

const Home = () => {
	return (
		<div className={home_styles.main_div}>
			<div className={home_styles.main_profile}>
				<div className={home_styles.profile_holder}>
					<Profile />
					{/* <Loader/> */}
				</div>
				{/* hardcoded this because why not */}
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