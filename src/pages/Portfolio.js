import React from "react";

import Project from "../components/Project";
import "../styles/Portfolio.css";
import Sorting from "../images/sorting.png";
import Dividends from "../images/dividends.png";
import Pantlika from "../images/pantlika.png";
import Hangos from "../images/hangos.png";
import Szeremle from "../images/szeremletanc.png";

const Portfolio = () => {
	//animate project loading
	const handlePortfolioScroll = () => {
		const portfolio_top =
			document.getElementById("portfolio").getBoundingClientRect().top +
			window.pageYOffset;
		const nav_height = document
			.getElementById("nav_list")
			.getBoundingClientRect().height;

		const projectElements =
			document.getElementsByClassName("project_container");

		const addAminationClass = (i) => {
			projectElements[i].classList.add("project_animation");
			i++;
			if (i < projectElements.length) {
				setTimeout(() => {
					addAminationClass(i);
				}, 100);
			} else {
				document.removeEventListener("scroll", handlePortfolioScroll);
			}
		};

		if (
			window.pageYOffset >=
			portfolio_top - nav_height - (window.innerHeight * 1) / 5
		) {
			addAminationClass(0);
		}
	};

	document.addEventListener("scroll", handlePortfolioScroll);

	const projects = [
		{
			title: "Dace Group webpage",
			img: Szeremle,
			url: "https://szeremletanc.hu",
			color: "white",
		},
		{
			title: "Music band webpage",
			img: Pantlika,
			url: "https://www.pantlikazenekar.hu/",
			color: "black",
		},
		{
			title: "Singing teacher webpage",
			img: Hangos,
			url: "https://hangosstudio.hu/",
			color: "white",
		},
		{
			title: "Sorting algorithms",
			img: Sorting,
			url: "https://tender-booth-f0f6bb.netlify.app/",
			color: "black",
		},

		{
			title: "Dividend checker",
			img: Dividends,
			url: "https://wonderful-yalow-9a6209.netlify.app/",
			color: "black",
		},
	];

	function renderProjects() {
		const elements = [];
		projects.forEach((e, i) => {
			elements.push(
				<Project
					id={i}
					key={i}
					title={e.title}
					img={e.img}
					url={e.url}
					color={e.color}
				/>
			);
		});
		return elements;
	}

	return (
		<>
			<div className="portfolio" id="portfolio">
				<h3 className="portfolio_title">Previous works</h3>
				<div className="portfolio_grid">{renderProjects()}</div>
			</div>
		</>
	);
};

export default Portfolio;
