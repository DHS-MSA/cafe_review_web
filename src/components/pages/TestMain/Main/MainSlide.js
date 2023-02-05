import './MainSlide.css';
import RoundedBox from "@/styled/RoundedBox";

const MainSlide = (props) => {
	return <RoundedBox customHeight={props.customHeight}>
		MainSlide
		{/* <div className="container"> */}
		<ul className="slide">
			<p className='item left-arrow'>left</p>
			<li className="item"><img src='images/choki.jpg'></img></li>
			<li className="item"><img src='images/ban_nim_2.jpg'></img></li>
			<li className="item"><img src='images/natsue.jpg'></img></li>
			<p className='item right-arrow'>right</p>
		</ul>
			{/* <RoundedBox borderRadius='15px' customHeight='150px' customWidth='32%'>A Box</RoundedBox>
			<RoundedBox borderRadius='15px' customHeight='150px' customWidth='32%'>B Box</RoundedBox>
			<RoundedBox borderRadius='15px' customHeight='150px' customWidth='32%'>C Box</RoundedBox> */}
		{/* </div> */}
		</RoundedBox>
};

export default MainSlide;