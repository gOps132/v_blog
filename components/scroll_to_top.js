import React, { useEffect, useState } from "react";
import scbtn_style from "../styles/Sctbtn.module.css";
import nav_styles from "../styles/Nav.module.css";

import ArrowCircleUp from "../public/svg/arrow-circle-up-solid.svg";

const Scbtn = () => {
	const [isVisible, setIsVisible] = useState(false);

	const toggleVisibility = () => {
		if (window.pageYOffset > 300) {
			setIsVisible(true);
		} else {
			setIsVisible(false);
		}
	};

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth"
		});
	};

	useEffect(() => {
		window.addEventListener("scroll", toggleVisibility);
	}, []);

	return (
		<div>
			{isVisible &&
				<div onClick={scrollToTop} className={scbtn_style.scroll_to_top_btn}>
					<ArrowCircleUp alt={`Go To Top`}/>
				</div>}
		</div>
	);
}

export default Scbtn;