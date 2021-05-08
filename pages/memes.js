import React from "react";
const fs = require("fs");

// TODO: delete
// const sizeOf = require("image-size");
// const gm = require('gm').subClass({imageMagick: true});;
// var im = require('imagemagick');

const Memes = (props) => {
	return (
		<div>
			<h1>This is the memes page</h1>
			<div>
				{props.main_obj.files.map(i => {
					return <img key={i.filename} src={`/img/memes/${i.filename}`} />
				})}
				{console.log(props.main_obj)}
			</div>
		</div>
	);
}

export function getStaticProps() {
	let img_obj = {
		files: [],
	}
	let image_names = fs.readdirSync("public/img/memes");
	for (let i = 0; i < image_names.length; i++) {
		img_obj.files.push({
			filename: image_names[i],
			width: 0,
			height: 0
		});
	}

	{
		// let width = sizeOf(`../public/img/memes/${image_names[1]}`, (e, d) => { return parseInt(d.width)});
		// let height = sizeOf(`../public/img/memes/${image_names[1]}`, (e, d) => { return parseInt(d.height)});
		// console.log(width, height);

		// FIXME: This does not change the object value
		// for (let i = 0; i < img_obj.files.length; i++) {
		// 	let width, height;
		// 	sizeOf(`public/img/memes/${img_obj.files[i].filename}`, (err, dimensions) => {
		// 		try {
		// 			if (!err) {
		// 				let image_dimensions = dimensions || "";
		// 				width = image_dimensions.width;
		// 				height = image_dimensions.height;

		// 				// console.log(`dimensions of ${img_obj.files[i].filename}: ` + `width: ${width}`, `height: ${height}`);
		// 				// img_obj.files[i].width = width;
		// 				// img_obj.files[i].height = height;
		// 			}
		// 		} catch (e) {
		// 			throw (e)
		// 		}
		// 	});
		// 	console.log(width, height);
		// }

		// img_obj.files[0].width = 584;
		// img_obj.files[0].height = 427;

		// img_obj.files.map(i => console.log(i.filename))
	}

	for (let i = 0; i < img_obj.files.length; i++) {
		// gm(`img/memes/${img_obj.files[i].filename}`).size( (err, size) => {
		// 	if (!err) {
		// 		console.log('width: ' + size.width);
		// 		console.log('height: ' + size.height);
		// 	}
		// });
		
		// im.identify(['-format', '%wx%h',`/public/img/memes/${img_obj.files[i].filename}`], function(err, features){
		// 	if (err) throw err;
		// 	console.log("dimensions: " + features);
		// 	// { format: 'JPEG', width: 3904, height: 2622, depth: 8 }
		// })
	}

	return {
		props: {
			main_obj: img_obj
		}
	}
}

export default Memes;