import React, { useState, useEffect } from "react";
import api from "../../services/api";
import HeaderBlog from "../../components/HeaderBlog";
import { Link } from "react-router-dom";

function Main() {
	const [posts, setPost] = useState([]);
	useEffect(() => {
		async function getPosts() {
			try {
				const response = await api.get("/?");
				const data = response.data;
				console.log(response.data);
				setPost(data);
			} catch (error) {
				if (error) alert("Deu ruim na request");
			}
		}
		getPosts();
	}, []);
	return (
		<>
			<HeaderBlog />
			<div className="post-container">
				{posts.map(post => (
					<article className="post-text" key={post._id}>
						<header className="post-header">
							<h1 className="post-title">
								<Link to={`/${post._id}`}>
									<a>{post.title}</a>
								</Link>
							</h1>
						</header>

						<div className="post-content">
							<figure className="post-img" />
							<p>{post.content}</p>
						</div>
					</article>
				))}
			</div>
		</>
	);
}

export default Main;
