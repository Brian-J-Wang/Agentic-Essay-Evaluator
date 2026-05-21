import styles from "./sidebar.module.css";

const SideBar: React.FC = () => {
	return (
		<div className={styles.sidebar}>
			<div className={styles.sidebar__settings}>
				<button className={styles.settings__button}>Settings</button>
				<button className={styles.settings__button}>Logout</button>
			</div>
		</div>
	);
};

export default SideBar;
