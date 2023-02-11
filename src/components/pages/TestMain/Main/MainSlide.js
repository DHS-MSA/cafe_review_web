import styles from "./MainSlide.module.css";
import MainItem from "./MainItem";

const MainSlide = (props) => {
	const storeInfos = props.storeInfos;

	return <div className={styles.container}>
		<button className={styles.arrow}>{"<"}</button>
		{/* <ul className={styles["slide-show"]}>
			<li className={styles.item}><img src='images/choki.jpg'></img></li>
			<li className={styles.item}><img src='images/ban_nim_2.jpg'></img></li>
			<li className={styles.item}><img src='images/natsue.jpg'></img></li>
		</ul> */}
		<ul className={styles["slide-show"]}>
			{storeInfos.map((storeInfo)=>{
				return <li className={styles.item}><MainItem storeInfo={storeInfo}></MainItem></li>
			})}
		</ul>
		<button className={styles.arrow}>{">"}</button>
	</div>
};

export default MainSlide;