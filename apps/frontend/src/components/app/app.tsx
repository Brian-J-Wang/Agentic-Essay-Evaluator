import { useEffect, useState, type ReactNode } from "react";
import "../../styles/global.css";
import styles from "./app.module.css";
import Modal from "./features/modal/modal";
import SideBar from "./sidebar/sidebar";
import ViewportContext from "./viewport/viewportContext";
import UseViewport from "./viewport/useViewport";
import ModalContext from "./features/modal/modal.context";

const App: React.FC = () => {
  const { Viewport, setViewport } = UseViewport();
  const [modal, setModal] = useState<ReactNode | null>(null);

  const openModal = (modal: ReactNode) => {
    setModal(modal);
  };

  const closeModal = () => {
    setModal(null);
  };

  useEffect(() => {
    fetch("http://127.0.0.1:3000/ping")
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          return Promise.reject();
        }
      })
      .then((res) => {
        console.log(res);
      });
  }, []);

  return (
    <ModalContext.Provider value={{ openModal, closeModal }}>
      <ViewportContext.Provider value={{ setViewport }}>
        <main className={styles.app}>
          <SideBar />
          <div className="flex-1 relative">
            {Viewport}
            <Modal modal={modal} />
          </div>
        </main>
      </ViewportContext.Provider>
    </ModalContext.Provider>
  );
};

export default App;
