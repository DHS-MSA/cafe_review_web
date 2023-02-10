import Logo from "./Logo";
import SearchForm from "./SearchForm";
import AddNewReview from "./AddNewReview";
import styles from "./Header.module.css";

const Header = () => {
	return <div className={styles.container}>
		<div className={styles['sub-container']}>
			<Logo />
		</div>
		<div className={styles['sub-container']}>
			<SearchForm />
		</div>
		<div className={styles['sub-container']}>
			<AddNewReview />
		</div>
	</div>
};

export default Header;