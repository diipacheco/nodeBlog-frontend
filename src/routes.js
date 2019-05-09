import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import PostBlog from "../src/components/PostBlog/";

const Routes = () => (
	<BrowserRouter>
		<Switch>
			<Route path="/:id" component={PostBlog} />
		</Switch>
	</BrowserRouter>
);

export default Routes;
