import MainSlide from "./MainSlide";
import MainTag from "./MainTag";
import MainList from "./MainList";
import styles from "./Main.module.css";

const Main = () => {
	return <div className={styles.container}>
		<MainSlide />
		<MainTag />
		<MainList />
	</div>
};

export default Main