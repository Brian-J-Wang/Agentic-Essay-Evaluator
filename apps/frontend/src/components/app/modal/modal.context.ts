import { createContext, type ReactNode } from "react";

type ModalContext = {
	openModal: (view: ReactNode) => void;
	closeModal: () => void;
};

const ModalContext = createContext<ModalContext>({
	openModal: () => {},
	closeModal: () => {},
});

export default ModalContext;
