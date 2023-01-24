import React from "react";

import {
	FaReact,
	FaNodeJs,
	FaGitAlt,
	FaWordpress,
	FaJava,
} from "react-icons/fa";
import { DiMongodb, DiHtml5, DiCss3 } from "react-icons/di";
import {
	SiNextdotjs,
	SiTypescript,
	SiJavascript,
	SiGraphql,
	SiPowershell,
} from "react-icons/si";
import { BiLinkAlt } from "react-icons/bi";
import AstroLogo from "../components/AstroLogo";

import "../styles/About.css";
import "../styles/Color.css";

const About = () => {
	const handleAboutScroll = () => {
		const about_elements = ["few_line", "current_tech", "previous_tech"].map(
			(el) => document.getElementById(el)
		);
		const about_element_tops = about_elements.map(
			(el) => el.getBoundingClientRect().top + window.pageYOffset
		);
		const nav_height = document
			.getElementById("nav_list")
			.getBoundingClientRect().height;

		for (let i = 0; i < about_element_tops.length; i++) {
			if (
				window.pageYOffset >=
				about_element_tops[i] - nav_height - (window.innerHeight * 4) / 5
			) {
				about_elements[i].classList.add("about_animation");
				if (
					i === 2 &&
					about_elements[i].classList.contains("about_animation")
				) {
					document.removeEventListener("scroll", handleAboutScroll);
				}
			}
		}
	};

	document.addEventListener("scroll", handleAboutScroll);

	const currentTech = [
		{
			name: "React.js",
			icon: <FaReact />,
			color: "reactBlue",
		},
		{
			name: "Next.js",
			icon: <SiNextdotjs />,
			color: "",
		},
		{
			name: "Astro.js",
			icon: <AstroLogo />,
			color: "",
		},
		{
			name: "JavaScript",
			icon: <SiJavascript />,
			color: "jsYellow",
		},
		{
			name: "TypeScript",
			icon: <SiTypescript />,
			color: "tsBlue",
		},
		{
			name: "Node.js",
			icon: <FaNodeJs />,
			color: "nodeGreen",
		},
		{
			name: "Git",
			icon: <FaGitAlt />,
			color: "gitRed",
		},
		{
			name: "HTML",
			icon: <DiHtml5 />,
			color: "htmlOrange",
		},
		{
			name: "CSS",
			icon: <DiCss3 />,
			color: "cssBlue",
		},
		{
			name: "REST api",
			icon: <BiLinkAlt />,
			color: "",
		},
        {
            name: "PowerShell",
            icon: <SiPowershell />,
            color: "psBlue",
        },
	];

	const otherTech = [
		{
			name: "MongoDB",
			icon: <DiMongodb />,
			color: "mongoGreen",
		},
		{
			name: "Java",
			icon: <FaJava />,
			color: "javaOrange",
		},
		{
			name: "GraphQL",
			icon: <SiGraphql />,
			color: "gqlPurple",
		},
		{
			name: "WordPress CMS",
			icon: <FaWordpress />,
			color: "wpBlue",
		},
	];

	function renderCurrentTech() {
		const elements = [];
		currentTech.forEach((e, i) => {
			elements.push(
				<li key={i}>
					<span className={e.color}>{e.icon}</span>
					<span>{e.name}</span>
				</li>
			);
		});
		return elements;
	}

	function renderOtherTech() {
		const elements = [];
		otherTech.forEach((e, i) => {
			elements.push(
				<li key={i}>
					<span className={e.color}>{e.icon}</span>
					<span>{e.name}</span>
				</li>
			);
		});
		return elements;
	}

	return (
		<div className="about" id="about">
			{/* few line about me */}
			<div className="about_paragraph few_line" id="few_line">
				<h3>Nice to meet you!</h3>
				<p id="this">
					I'm a self-taught coder, currently working as a frontend developer.
					My strength is React, but I like to experiment with new technologies.
					I mainly work on business applications, and I also like to create smaller websites.
					I also have experience with Windows system administration.
				</p>
			</div>

			{/* current technologies */}
			<div className="about_paragraph current_tech" id="current_tech">
				<p>Technologies I am using:</p>
				<ul>{renderCurrentTech()}</ul>
			</div>

			{/* previous technilogies */}
			<div className="about_paragraph prevoius_tech" id="previous_tech">
				<p>I have worked with / currently learning:</p>
				<ul>{renderOtherTech()}</ul>
			</div>
		</div>
	);
};

export default About;
