import styles from "./MainLayout.module.css";
import SearchForm from "@/components/TestMain/Header/SearchForm";
import TagNavigator from "@/components/TestMain/Main/TagNavigator";
import MainSlide from "@/components/TestMain/Main/MainSlide";
import MainList from "@/components/TestMain/Main/MainList";

const dummyData = [
	{
		id: `${Math.round(Math.random() * 100)}`,
		images: ['images/cafe/starbucks_sample_1.jpg'],
		storeName: 'Starbucks',
		location: 'Seoul',
		tags: ['커피', '브런치'],
		reviewPoint: (Math.random() * 5).toFixed(1)
	},
	{
		id: `${Math.round(Math.random() * 100)}`,
		images: ['images/cafe/caffebene_sample_1.jpg'],
		storeName: 'Caffebene',
		location: 'Daegu',
		tags: ['공간', '풍경'],
		reviewPoint: (Math.random() * 5).toFixed(1)
	},
	{
		id: `${Math.round(Math.random() * 100)}`,
		images: ['images/cafe/angelinus_sample_1.jpg'],
		storeName: 'Angelinus',
		location: 'Busan',
		tags: ['디저트'],
		reviewPoint: (Math.random() * 5).toFixed(1)
	},
	{
		id: `${Math.round(Math.random() * 100)}`,
		images: ['images/cafe/tomntoms_sample_1.jpg'],
		storeName: 'Tom&Toms',
		location: 'Sungnam',
		tags: ['콘센트', '넓은 식탁'],
		reviewPoint: (Math.random() * 5).toFixed(1)
	},
	{
		id: `${Math.round(Math.random() * 100)}`,
		images: ['images/cafe/paulbassett_sample_1.jpg'],
		storeName: 'PaulBassett',
		location: 'Jamsil',
		tags: ['라떼', '콘센트', '넓은 식탁'],
		reviewPoint: (Math.random() * 5).toFixed(1)
	},
];

const MainLayout = () => {
    const storeInfos = dummyData;

    return <div className={styles.wrapper}>
        <div className={styles.header}>
            <SearchForm />
        </div>
        <div className={styles.navigator}>
            <TagNavigator />
        </div>
        <div className={styles.bodyTop}>
            <MainSlide storeInfos={storeInfos}/>
        </div>
        <div className={styles.bodyBottom}>
            <MainList storeInfos={storeInfos} />
        </div>
        <div className={styles.footer}>Footer</div>
    </div>
};

export default MainLayout;