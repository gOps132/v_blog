import React from "react";
const fs = require("fs");
const sizeOf = require("image-size");

const Memes = (props) => {
	return (
		<div>
			<h1>This is the memes page</h1>
			<div>
				{
					props.main_obj.files.map(i => {
						console.log(`filename: /img/memes/${i.filename}, width: ${i.width}, height: ${i.height}`);

						return <img key={i.filename} src={`/img/memes/${i.filename}`} />
					})
				}
				{/* {console.log(props.main_obj)} */}
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
			width: 0,
			height: 0,
		});
	}
	for (let i = 0; i < image_names.length; i++) {
		try {
			sizeOf(`public/img/memes/${img_obj.files[i].filename}`, (err, dimensions) => {
				console.log(`dimensions of ${img_obj.files[i].filename}: ` + `width: ${dimensions.width}`, `height: ${dimensions.height}`);
				img_obj.files[i].width = (dimensions.width);
				img_obj.files[i].height = (dimensions.height);
			});
			console.log(i);
		} catch (e) { throw e; }
	}
	// img_obj.files.map(i => console.log(i.filename))
	return {
		props: {
			main_obj: img_obj
		}
	}
}

export default Memes;