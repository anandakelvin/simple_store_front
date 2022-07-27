import { Redirect, Route, Switch } from "react-router-dom";
import CategoriesContainer from "./components/container/CategoriesContainer";
import Navbar from "./components/layout/Navbar";
import CategoryRoute from "./components/routes/CategoryRoute";

function App() {
	return (
		<>
			<header>
				<Navbar />
			</header>
			<CategoriesContainer>
				{({ value, status }) => {
					if (status === "succeeded") {
						return (
							<Switch>
								<Route
									path={"/categories/:categoryName"}
									render={(routeProps) => <CategoryRoute {...routeProps} />}
								/>
								<Redirect to={"/categories/" + value[0].name} />
							</Switch>
						);
					}
					return <></>;
				}}
			</CategoriesContainer>
		</>
	);
}

export default App;
