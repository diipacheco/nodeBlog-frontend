import React from "react";
import Logo from "../../assets/logo.svg";
import "./style.css";
import { Link } from "react-router-dom";

const HeaderBlog = props => {
	return (
		<div className="main-header">
			<Link to={"/"}>
				<div className="contaiener-logo">
					<a>
						<img src={Logo} alt="Logo da Science Comics" />
					</a>
				</div>
			</Link>
			<div className="container-category">
				<ul>
					<li>
						<a>ARTIGOS</a>
					</li>
					<li>
						<a href="webcomics">WEBCOMICS</a>
					</li>
					<li>
						<a href="podcast">PODCAST</a>
					</li>
					<li>
						<a href="noticias">NOTÍCIAS</a>
					</li>
					<li>
						<a href="sobre nos">SOBRE NÓS</a>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default HeaderBlog;
