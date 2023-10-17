/* This example requires Tailwind CSS v2.0+ */

import ForumLogo from "../assets/Forum-logo-horizental.png";

const navigation = [
	{ name: "About", href: "#" },
	{ name: "Pricing", href: "#" },
	{ name: "Docs", href: "#" },
];

export default function Example() {
	return (
		<header className="">
			<nav
				className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8"
				aria-label="Top"
			>
				<div className="w-full py-6 items-center justify-between border-b lg:border-none hidden lg:flex">
					<div className="lg:w-40">
						<img src={ForumLogo} alt="Forum Logo" />
					</div>
					{navigation.map((link) => (
						<a
							key={link.name}
							href={link.href}
							className="text-base font-medium hover:text-indigo-50"
						>
							{link.name}
						</a>
					))}
				</div>
				<div className="py-4 flex flex-wrap justify-center items-center space-x-6 lg:hidden">
        <div className="w-28">
						<img src={ForumLogo} alt="Forum Logo" />
					</div>
					{navigation.map((link) => (
						<a
							key={link.name}
							href={link.href}
							className="text-base font-medium hover:text-indigo-50"
						>
							{link.name}
						</a>
					))}
				</div>
			</nav>
		</header>
	);
}
