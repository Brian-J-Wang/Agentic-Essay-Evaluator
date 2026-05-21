import "../../styles/global.css";
import styles from "./app.module.css";
import SideBar from "./sidebar/sidebar";
import UseViewport from "./views/useViewport";

const App: React.FC = () => {
	const { ViewportComponent, setViewport } = UseViewport();

	return (
		<main className={styles.app}>
			<SideBar />
			<ViewportComponent />
		</main>
	);
};

export default App;
