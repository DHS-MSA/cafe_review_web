import BorderBox from "@/styled/BorderBox";
import './SearchForm.css';

const SearchForm = () => {
	return <BorderBox borderRadius='15px' alignItems='center'>
		<form className="search-form">
			<input placeholder="Store name"></input>
			<input placeholder="Location"></input>
			<button><a href="https://www.flaticon.com/free-icons/search" title="search icons">B</a></button>
		</form>
	</BorderBox>
};

export default SearchForm;