import RoundedBox from "@/styled/RoundedBox";
import './TestPage.css';
import Header from "./Header/Header";
import MainSlide from "./Main/MainSlide";
import MainTag from "./Main/MainTag";
import MainList from "./Main/MainList";
import { ThemeProvider } from "styled-components";

/**
 * 연습용 페이지 : /testPage 로 접근
 */

const TestPage = () => {
	return <div className="wrap">
		<Header />
		{/*<RoundedBox></RoundedBox>*/}
		<RoundedBox customHeight='360px'>Main
			<MainSlide customHeight='50%' />
			<MainTag customHeight='5%'/>
			<MainList customHeight='38%'/>
		</RoundedBox>
		<RoundedBox>Footer</RoundedBox>
	</div>
};

export default TestPage;