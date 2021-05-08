const fs = require("fs");
const sizeOf = require('image-size');

import React from "react";
import Image from "next/image";
import Loader from "../components/loader";

import meme_style from "../styles/Meme.module.css";


const Memes = (props) => {
	return (
		<div className={meme_style.main_div}>
			<h1>Memes that I like</h1>
			<div className={meme_style.meme_container}>
				{/* <FadeInImage> */}
					{props.main_obj.files.map(i => {
						return (
							<div className={meme_style.meme}>
								<Image
									key={i.filename}
									width={i.width}
									height={i.height}
									src={`/img/memes/${i.filename}`}
									layout="intrinsic"
									loading="lazy"
									placeholder={<Loader/>}
								/>
							</div>
						)
					})}
					{/* DEBUG */}
					{console.log(props.main_obj)}
				{/* </FadeInImage> */}
			</div>
		</div>
	);
}

export async function getStaticProps() {
	let img_obj = {
		files: [],
	}

	let image_names = fs.readdirSync("public/img/memes");
	for (let i = 0; i < image_names.length; i++) {
		img_obj.files.push({
			filename: image_names[i],
			width: sizeOf(`public/img/memes/${image_names[i]}`).width,
			height: sizeOf(`public/img/memes/${image_names[i]}`).height,
		});
	}

	return {
		props: {
			main_obj: img_obj
		}
	}
}

export default Memes;