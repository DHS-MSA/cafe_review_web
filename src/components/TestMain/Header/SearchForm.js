import styles from "./SearchForm.module.css";

const SearchForm = () => {
	return <form className={styles['search-form']}>
		<input className={styles["search-input"]} placeholder="Store name"></input>
		<input className={styles["search-input"]} placeholder="Location"></input>
		<button className={styles["search-button"]}>B</button>
	</form>
};

export default SearchForm;