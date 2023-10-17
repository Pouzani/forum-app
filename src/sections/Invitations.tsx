import React from "react";
import Invitation1 from "../assets/images/Invitation1.png";
import Invitation2 from "../assets/images/Invitation2.png";

const Invitations = () => {
	return (
		<section>
			<div className="container mx-auto sm:px-6 lg:px-8 bg-zelijSignature bg-cover bg-center mt-2 columns-3 flex items-center justify-center lg:p-80 md:p-70 sm:p-36 xs:p-16">
				<div className="lg:w-1/2 md:w-full flex lg:flex-row flex-col lg:px-0 px-12">
					<div className="basis-1/2">
						<h1 className="text-sm font-bold mb-1">ForumGENIEntreprises</h1>
						<p className="text-justify font-light w-11/12 leading-5">
							Nous vous invitons cordialement à travers <span className="font-semibold">nos
							ateliers et conférences qui seront organisés,</span> à
							participer et à y apporter votre contribution.
						</p>
                        <img src={Invitation1} className="mt-3"></img>
					</div>
                    <div className="basis-1/2">
                        <h1 className="text-end font-bold">18 et 19 Octobre 2023</h1>
                        <img src={Invitation2} className="mt-3"></img>
                    </div>
				</div>
			</div>
		</section>
	);
};

export default Invitations;
