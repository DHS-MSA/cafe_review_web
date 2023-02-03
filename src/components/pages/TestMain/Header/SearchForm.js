import BorderBox from "@/styled/BorderBox";
import './SearchForm.css';

const SearchForm = () => {
	// return <BorderBox borderRadius='15px' alignItems='center'>
	// 	<form className="search-form">
	// 		<input placeholder="Store name"></input>
	// 		<input placeholder="Location"></input>
	// 		<button>B</button>
	// 	</form>
	// </BorderBox>
	return <form className="search-form">
		<input placeholder="Store name"></input>
		<input placeholder="Location"></input>
		<button>B</button>
	</form>
};

export default SearchForm;