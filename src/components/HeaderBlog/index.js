import React from "react";
import Logo from "../../assets/logo.svg";
import "./style.css";

// import { Container } from './styles';

const HeaderBlog = props => {
	return (
		<div className="main-header">
			<div className="contaiener-logo">
				<a href="Home">
					<img src={Logo} alt="Logo da Science Comics" />
				</a>
			</div>
			<div className="container-category">
				<ul>
					<li>
						<a href="artigos">ARTIGOS</a>
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
