import React, { useState, useEffect } from "react";
import "./style.css";
import HeaderBlog from "../../components/HeaderBlog";
import api from "../../services/api";

function PostBlog(props) {
	const [postContent, setPost] = useState([]);
	useEffect(() => {
		async function getPost() {
			try {
				const id = props.match.params.id;
				const response = await api.get(`/${id}`);
				console.log(response.data);
				setPost(response.data);
			} catch (error) {
				if (error) alert("Deu ruim na request");
			}
		}
		getPost();
	}, [props.match.params.id]);
	return (
		<>
			<HeaderBlog />
			<div className="post-container">
				<article className="post-text" key={postContent._id}>
					<header className="post-header">
						<h1 className="post-title">
							<a>{postContent.title}</a>
						</h1>
					</header>

					<div className="post-content">
						<figure className="post-img" />
						<p>{postContent.content}</p>
					</div>
				</article>
			</div>
		</>
	);
}

export default PostBlog;
