import React from "react";
const fs = require("fs");

import Image from "next/image";

const sizeOf = require('image-size');

const Memes = (props) => {
	return (
		<div>
			<h1>This is the memes page</h1>
			<div>
				{props.main_obj.files.map(i => {
					return <Image
						key={i.filename}
						width={i.width}
						height={i.height}
						src={`/img/memes/${i.filename}}`} 
						layout="responsive"
					/>
				})}
				{console.log(props.main_obj)}
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

	console.log(`main_obj: ${img_obj.files[0].width}`);

	return {
		props: {
			main_obj: img_obj
		}
	}
}

export default Memes;