import styles from "./MainItem.module.css";

// main-wrap : 세로 정렬, 2등분
// sub-wrap : 가로 정렬, 2등분
// info-list : 세로 정렬, 나열

/*
props.storeInfo 멤버
{
		id: (number),
		images: ['', '', ...],
		storeName: (string),
		location: (string),
		tags: ['', '', ...],
		reviewPoint: (number)
	},
*/

const MainItem = (props) => {
    const storeName = props.storeInfo.storeName;
    const tags = props.storeInfo.tags;
    const reviewPoint = props.storeInfo.reviewPoint;
    const image = props.storeInfo.images[0];
    
    return <div className={styles['main-wrap']}>
        <div className={styles['review-image']}>
            <img src={image}></img>
        </div>
        <div className={styles['sub-wrap']}>
            <div className={styles['store-info']}>
                <p>{storeName}</p>
                <p>Seoul, Gangnam</p>
                <p>
                    {tags.map((tag) => {
                        return <span key={Math.round(Math.random() * 1000)}>{tag} </span>
                    })}
                </p>
            </div>
            <p className={styles['review-point']}>{reviewPoint}</p>
        </div>
    </div>
};

export default MainItem;