import Head from 'next/head';

import Link from "next/link";
import Nav from "../components/nav";

import home_styles from '../styles/Home.module.css';

const Home = () => {
	return (
		<div className={home_styles}>
			<Nav />
			<h1>Welcome to next.js</h1>
			<Link href="/hello">This is the hello page</Link>
		</div>
	);
};

export default Home;