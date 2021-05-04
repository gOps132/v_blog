import home_styles from '../styles/Home.module.css';
// import Image from "next/image";

const Home = () => {
	return (
		<div className={home_styles}>
			<h1>Welcome to next.js</h1>
			<img alt="thing" src={`/img/56tctu.jpg`} width={720} height={520}/>
		</div>
	);
};

export default Home;