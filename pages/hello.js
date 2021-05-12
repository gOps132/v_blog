import common_style from "../styles/Common.module.css"

export default function Home() {
	return (
		<div className={common_style.main_div}>
			<h1>Hello World!</h1>
			<div>
				<p>This is a website that I remade the next.js framework, took some time to learn but it's worth it 
					The memes page is statically served. The music page gets contents from the spotify web API. 
					The movie page gets contents from the imdb API. See the git respository for more info
				</p>
				<p>NOTE: This is my first production implementation of an API</p>
			</div>
		</div>
	);
}