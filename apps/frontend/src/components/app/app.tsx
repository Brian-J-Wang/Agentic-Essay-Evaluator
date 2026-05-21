import { useState, type ReactNode } from "react";
import "../../styles/global.css";
import styles from "./app.module.css";
import Modal from "./modal/modal";
import SideBar from "./sidebar/sidebar";
import ViewportContext from "./viewportContext";
import UseViewport from "./views/useViewport";
import ModalContext from "./modal/modal.context";

const App: React.FC = () => {
	const { ViewportComponent, setViewport } = UseViewport();
	const [modal, setModal] = useState<ReactNode | null>(null);

	const openModal = (view: ReactNode) => {
		setModal(view);
	};

	const closeModal = () => {
		setModal(null);
	};

	return (
		<ModalContext.Provider value={{ openModal, closeModal }}>
			<ViewportContext.Provider value={{ viewportComponent: ViewportComponent, setViewport }}>
				<main className={styles.app}>
					<SideBar />
					<div className="flex-1 relative">
						<ViewportComponent />
						<Modal modal={modal} />
					</div>
				</main>
			</ViewportContext.Provider>
		</ModalContext.Provider>
	);
};

export default App;
