import ModalContext from "./modal.context";
import styles from "./modal.module.css";
import { useContext, type ReactNode } from "react";

type ModalProps = {
	modal: ReactNode | null;
};

const Modal: React.FC<ModalProps> = ({ modal }) => {
	const modalContext = useContext(ModalContext);

	const handleModalClick = (e: React.MouseEvent) => {
		e.stopPropagation();

		if (e.currentTarget == e.target) {
			modalContext.closeModal();
		}
	};

	return (
		<div className={`${styles.modal} ${modal == null && styles.modal_hidden}`} onMouseDown={handleModalClick}>
			<div className={styles.modal__container}>{modal}</div>
		</div>
	);
};

export default Modal;
