import BorderBox from "@/styled/BorderBox";
import AddNewReview from "./AddNewReview";
import Logo from "./Logo";
import SearchForm from "./SearchForm";
import './Header.css';

const Header = () => {
	return <div className="header-container">
		<div className="header-subcontainer">
			<Logo />
		</div>
		<div className="header-subcontainer">
			<SearchForm />
		</div>
		<div className="header-subcontainer right">
			<AddNewReview />
		</div>
	</div>
};

export default Header;