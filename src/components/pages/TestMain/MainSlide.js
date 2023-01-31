import './MainSlide.css';
import RoundedBox from "@/styled/RoundedBox";

const MainSlide = (props) => {
	return <RoundedBox customHeight={props.customHeight}>
		MainSlide
		<div className="container">
			<RoundedBox borderRadius='15px' customHeight='150px' customWidth='32%'>A Box</RoundedBox>
			<RoundedBox borderRadius='15px' customHeight='150px' customWidth='32%'>B Box</RoundedBox>
			<RoundedBox borderRadius='15px' customHeight='150px' customWidth='32%'>C Box</RoundedBox>
		</div>
		</RoundedBox>
};

export default MainSlide;