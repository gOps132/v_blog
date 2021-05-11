import common_style from "../styles/Common.module.css"

export default function Home() {
	return (
		<div className={common_style.main_div}>
			<h1>Hello World!</h1>
			<div>
				<p>This is a website that I remade the next.js framework, took some time to learn but it's worth it</p>
				<p>The memes page is statically served</p>
				<p>The music page gets dynamic content from the nodejs API and uses the Spotify API using the Authorization flow</p>
				<p>See the git respository for more info</p>
			</div>
		</div>
	);
}