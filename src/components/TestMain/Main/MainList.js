import styles from "./MainList.module.css";
import useWindowDimensions from "@/components/Grid/Util";
import GridContainer from "@/components/Grid/GridContainer";
import MainItem from "./MainItem";


const MainList = (props) => {
	const storeInfos = props.storeInfos;
	const { width, height } = useWindowDimensions();
    let grid_columns = 4;
	
	if (width <= 1120) {
		grid_columns = Math.floor(width / 300);
	};

	// return <div className={styles.container}>
	// 		{storeInfos.map((storeInfo) => {
	// 			return <MainItem storeInfo={storeInfo} key={storeInfo.id}></MainItem>
	// 		})}
	// 	</div>
	return <GridContainer columns={grid_columns}>
			{storeInfos.map((storeInfo, index) => {
				return <MainItem key={index} storeInfo={storeInfo}></MainItem>
			})}
		</GridContainer>
};

export default MainList;