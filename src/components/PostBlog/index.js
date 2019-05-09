import React, { Component } from "react";
import "./style.css";
import HeaderBlog from "../HeaderBlog";
import api from "../../services/api";

export default class PostBlog extends Component {
	state = {
		post: {}
	};

	async componentDidMount() {
		try {
			const post = this.props.match.params.id;
			const response = await api.get(`/${post}`);
			this.setState({ post: response.data });
		} catch (error) {
			if (error) console.log(error);
			alert("DEU RUIM NA REQUEST");
		}
	}
	render() {
		return (
			<>
				<HeaderBlog />
				<div className="post-container">
					<article className="post-text">
						<header className="post-header">
							<h1 className="post-title">
								<a href="teste">{this.state.post.title}</a>
							</h1>
						</header>

						<div className="post-content">
							<figure className="post-img" />
							<p>{this.state.post.content}</p>
						</div>
					</article>
				</div>
			</>
		);
	}
}
