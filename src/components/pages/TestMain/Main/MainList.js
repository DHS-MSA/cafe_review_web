import RoundedBox from "@/styled/RoundedBox";
import styles from "./MainList.module.css";


const dummyData = [
	{
		id: `${Math.round(Math.random() * 10)}`,
		images: [],
		storeName: 'A',
		location: 'Seoul',
		tags: [],
		score: Math.round(Math.random() * 5)
	},
	{
		id: `${Math.round(Math.random() * 10)}`,
		images: [],
		storeName: 'B',
		location: 'Daegu',
		tags: [],
		score: Math.round(Math.random() * 5)
	},
	{
		id: `${Math.round(Math.random() * 10)}`,
		images: [],
		storeName: 'C',
		location: 'Busan',
		tags: [],
		score: Math.round(Math.random() * 5)
	},
	{
		id: `${Math.round(Math.random() * 10)}`,
		images: [],
		storeName: 'D',
		location: 'Sungnam',
		tags: [],
		score: Math.round(Math.random() * 5)
	},
];

const MainList = (props) => {
	const dataSet = dummyData;

	const renderItem = (props) => {
		return <RoundedBox  borderRadius='15px' customHeight='105px' customWidth='18%'>{props.storeName}</RoundedBox>
	}

	return <div className={styles.container}>
			{dataSet.map(renderItem)}
		</div>
};

export default MainList;