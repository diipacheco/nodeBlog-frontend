import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import PostBlog from "../src/pages/PostBlog";
import Main from "../src/pages/Main";

const Routes = () => (
	<BrowserRouter>
		<Switch>
			<Route path="/" exact component={Main} />
			<Route path="/:id" component={PostBlog} />
		</Switch>
	</BrowserRouter>
);

export default Routes;
