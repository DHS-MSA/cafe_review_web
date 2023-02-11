import styles from "./MainList.module.css";
import MainItem from "./MainItem";

const MainList = (props) => {
	const storeInfos = props.storeInfos;

	return <div className={styles.container}>
			{storeInfos.map((storeInfo) => {
				return <MainItem storeInfo={storeInfo} key={storeInfo.id}></MainItem>
			})}
		</div>
};

export default MainList;