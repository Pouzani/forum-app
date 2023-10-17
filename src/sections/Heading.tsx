import React from "react";
import ForumLogo from "../assets/images/ForumLogoVertical.png";
import ForumLaptop from "../assets/images/ForumLaptop.png";

const Heading = () => {
	return (
		<section className="container mx-auto sm:px-6 lg:px-8 flex lg:flex-row flex-col items-center lg:gap-3 gap-6">
			<img src={ForumLogo} alt="Forum Laptop" className="w-72" />
			<img src={ForumLaptop} alt="Forum Laptop" width={700} />
			<div className="text-start px-5">
				<h1 className="text-5xl font-extrabold">CV TECH</h1>
				<br></br>
				<h2 className="text-2xl">
					Forum<span className="font-bold">GENI</span>Entreprises.
				</h2>
				<p className="font-light mt-1 text-sm text-justify">
					Un événement de grande envergure organisé à l'échelle
					nationale et destine a <span className="font-semibold">mettre en relation les eleves
					ingénieurs en quete de leurs futurs emplois avec des
					entreprises</span> a la rechercne de calents prometceurs dans
					diverses specialles d'ingenieurs.
				</p>
                <h2 className="text-xl font-bold mt-3">18 et 19 Octobre 2023</h2>
			</div>
		</section>
	);
};

export default Heading;
