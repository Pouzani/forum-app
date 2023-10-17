import React from "react";
import Presentation1 from "../assets/images/Presentation1.png";
import Presentation2 from "../assets/images/Presentation2.png";

const Presentation = () => {
	return (
		<section>
			<div className="container text-kherwani mx-auto sm:px-6 lg:px-8 mt-2 columns-3 flex flex-col items-center justify-center lg:p-80 md:p-70 sm:p-36 xs:p-16">
				<h1 className="self-start text-4xl font-black mb-20 px-12">
					PRESENTATION DU FORUM
				</h1>
				<div className="w-full flex lg:flex-row flex-col px-12 gap-20">
					<div className="basis-1/2">
						<h1 className="text-4xl font-bold mb-5 w-3/5">
							Un espace professionnel de rencontre, de débat et
							d’échange.
						</h1>
						<p className="text-justify font-medium leading-5 mb-10">
							Le succès des éditions précédentes permet à nos
							équipes estudiantines de se surpasser chaque
							nouvelle Edition en donnant le meilleur d'elles-
							mêmes afin de faire de cet évènement Phare une
							réussite digne de la réputation et La renommée des
							trois prestigieuses écoles organisatrices. Cela dit,
							malgré́ notre motivation, cet évènement ne peut voir
							le jour sans votre collaboration.
						</p>
						<img src={Presentation1} />
					</div>
					<div className="basis-1/2">
						<img src={Presentation2} />
						<p className="text-justify font-medium leading-5 mt-10">
							Avec 18 éditions à son actif , <span className="font-bold">le Forum GENI
							Entreprises</span> s'impose comme un moment privilégié
							d’échanges professionnels entre entreprises,
							étudiants et lauréats ingénieurs afin de bâtir leurs
							collaborations futures. La diversité des secteurs
							présents lors de cet évènement annuel est l'image de
							la pluridisciplinarité́ de trois Grandes Ecoles
							Nationales d’Ingénieurs organisatrices : <span className="font-semibold">l'INSEA
							(Institut National Statistique et d'Economie
							Appliquée), L'ENSIAS (Ecole Nationale Supérieure
							d'Informatique et d'Analyse des Systèmes), et I'lNPT
							(Institut National des Postes Télécommunications); </span>
							d’où l'acronyme GENI.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Presentation;
