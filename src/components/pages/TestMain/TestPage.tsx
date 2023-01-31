import RoundedBox from "@/styled/RoundedBox";
import './TestPage.css';
import Header from "./Header/Header";
import MainSlide from "./MainSlide";
import MainTag from "./MainTag";
import MainList from "./MainList";

/**
 * 연습용 페이지 : /testPage 로 접근
 */

const TestPage = () => {
	return <div>
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