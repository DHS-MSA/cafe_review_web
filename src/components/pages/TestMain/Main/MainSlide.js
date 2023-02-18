import styles from "./MainSlide.module.css";
import MainItem from "./MainItem";

const MainSlide = (props) => {
	const storeInfos = props.storeInfos;

	return <div className={styles.container}>
		<div className={styles['sub-container']}>
			<p className={styles['slide-tag']}> Tag</p>
			<div className={styles['slide-container']}>
				<button className={styles.arrow}>{"<"}</button>
				<ul className={styles["slide-show"]}>
					{storeInfos.map((storeInfo, index)=>{
						return <li key={index} className={styles.item}><MainItem storeInfo={storeInfo}></MainItem></li>
					})}
				</ul>
				<button className={styles.arrow}>{">"}</button>
			</div>
		</div>
	</div>
};

export default MainSlide;