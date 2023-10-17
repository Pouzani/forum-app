
import Heading from "../sections/Heading";
import CommitteeWord from "../sections/CommitteeWord";
import Argumentaire from "../sections/Argumentaire";
import Invitations from "../sections/Invitations";
import Presentation from "../sections/Presentation";

const Home = () => {
	return (
		<div className="flex flex-col gap-20 text-gris">
			<Heading />
			<CommitteeWord />
			<Argumentaire />
			<Invitations />
			<Presentation />
		</div>
	);
};

export default Home;
