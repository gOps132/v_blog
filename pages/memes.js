import React from "react";
const fs = require("fs");
const sizeOf = require("image-size");

const Memes = (props) => {
	return (
		<div>
			<h1>This is the memes page</h1>
			<div>
				{props.main_obj.filename.map(i => {
					return (
						<img key={i} src={`/img/memes/${i}`} />
					);
				})}
				{console.log(props.main_obj)}
			</div>
		</div>
	);
}

export async function getStaticProps() {
	let img_obj  = {
		filename: [],
		width: [],
		height: [],
	}
	img_obj.filename = fs.readdirSync("public/img/memes");
	for(let i = 0; i < img_obj.filename.length; i++) {
		sizeOf(`public/img/memes/${img_obj.filename[i]}`, (err, dimensions) => {
			console.log(`dimensions of ${i}: ` + dimensions.width, dimensions.height);
			// img_obj.width.append(dimensions.width);
			// img_obj.height.append(dimensions.height);
		});
		console.log(i);
	}
	console.log("files: " + img_obj.filename);
	return {
		props: {
			main_obj: img_obj
		}
	}
}

export default Memes;