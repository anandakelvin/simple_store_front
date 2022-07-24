import "./App.css";
import { Route, Switch } from "react-router-dom";
import CategoryRoute from "./components/routes/CategoryRoute";
import * as CategoryStories from "./components/simple/Category.stories";

function App() {
	return (
		<Switch>
			<Route path="/">
				<CategoryRoute category={CategoryStories.Default.args.category} />
			</Route>
		</Switch>
	);
}

export default App;
