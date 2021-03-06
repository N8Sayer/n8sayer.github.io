import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
	return (
		<ul className="navbar list-group">
			<Link to="/">
				<li className="list-group-item">Home</li>
			</Link>
			<Link to="/resume">
				<li className="list-group-item">Resume</li>
			</Link>
			<Link to="/projects">
				<li className="list-group-item">Web Projects</li>
			</Link>
			<Link to="/gdrive">
				<li className="list-group-item">Apps Script Projects</li>
			</Link>
			<a href="https://www.upwork.com/freelancers/~0184df6f716ff64f05">
				<li className="list-group-item">Upwork</li>
			</a>
			<a href="https://github.com/N8Sayer">
				<li className="list-group-item">Github</li>
			</a>
		</ul>
	);
};

export default Nav;
