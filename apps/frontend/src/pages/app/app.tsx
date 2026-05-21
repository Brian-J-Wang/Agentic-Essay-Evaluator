import SideBar from "./components/sidebar/sidebar";
import ViewPort from "./components/viewport/viewport";

const App: React.FC = () => {
	return (
		<main>
			<SideBar />
			<ViewPort />
		</main>
	);
};

export default App;
