import MainSlide from "./MainSlide";
import MainTag from "./MainTag";
import MainList from "./MainList";
import styles from "./Main.module.css";

const dummyData = [
	{
		id: `${Math.round(Math.random() * 100)}`,
		images: ['images/starbucks_sample_1.jpg'],
		storeName: 'Starbucks',
		location: 'Seoul',
		tags: ['커피', '브런치'],
		reviewPoint: (Math.random() * 5).toFixed(1)
	},
	{
		id: `${Math.round(Math.random() * 100)}`,
		images: ['images/caffebene_sample_1.jpg'],
		storeName: 'Caffebene',
		location: 'Daegu',
		tags: ['공간', '풍경'],
		reviewPoint: (Math.random() * 5).toFixed(1)
	},
	{
		id: `${Math.round(Math.random() * 100)}`,
		images: ['images/angelinus_sample_1.jpg'],
		storeName: 'Angelinus',
		location: 'Busan',
		tags: ['디저트'],
		reviewPoint: (Math.random() * 5).toFixed(1)
	},
	{
		id: `${Math.round(Math.random() * 100)}`,
		images: ['images/tomntoms_sample_1.jpg'],
		storeName: 'Tom&Toms',
		location: 'Sungnam',
		tags: ['콘센트', '넓은 식탁'],
		reviewPoint: (Math.random() * 5).toFixed(1)
	},
	{
		id: `${Math.round(Math.random() * 100)}`,
		images: ['images/paulbassett_sample_1.jpg'],
		storeName: 'PaulBassett',
		location: 'Jamsil',
		tags: ['라떼', '콘센트', '넓은 식탁'],
		reviewPoint: (Math.random() * 5).toFixed(1)
	},
];

const Main = () => {
	const storeInfos = dummyData;

	return <div className={styles.container}>
		<MainSlide storeInfos={storeInfos}/>
		<MainTag />
		<MainList storeInfos={storeInfos}/>
	</div>
};

export default Main