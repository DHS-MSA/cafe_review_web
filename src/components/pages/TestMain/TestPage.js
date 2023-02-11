import RoundedBox from "@/styled/RoundedBox";
import './TestPage.css';
import Header from "./Header/Header";
import Main from "./Main/Main";
import Footer from "./Footer/Footer";
import MainItem from "./Main/MainItem";

const TestPage = () => {
	return <div className="wrap">
		<Header />
		<Main />
		<Footer />
		{/* <MainItem /> */}
	</div>
};

export default TestPage;