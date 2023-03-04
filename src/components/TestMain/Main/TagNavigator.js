import styles from "./TagNavigator.module.css";

const button_dummy_data = ["전체", "공부", "분위기", "디저트", "뷰", "노키즈", "애견동반"];

const TagNavigator = () => {
    const tag_array = button_dummy_data;

    return <div className={styles.container}>
        {tag_array.map((tag, index) => {
            return <button key={index} className={styles["navi-button"]}>{tag}</button>
        })}
    </div>
};

export default TagNavigator;