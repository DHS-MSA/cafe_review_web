import RoundedBox from "@/styled/RoundedBox";

const MainList = (props) => {
	return <RoundedBox customHeight={props.customHeight}>
		MainList
		<div className="container">
			<RoundedBox borderRadius='15px' customHeight='105px' customWidth='18%'>A</RoundedBox>
			<RoundedBox borderRadius='15px' customHeight='105px' customWidth='18%'>B</RoundedBox>
			<RoundedBox borderRadius='15px' customHeight='105px' customWidth='18%'>C</RoundedBox>
			<RoundedBox borderRadius='15px' customHeight='105px' customWidth='18%'>D</RoundedBox>
			<RoundedBox borderRadius='15px' customHeight='105px' customWidth='18%'>E</RoundedBox>
		</div>
	</RoundedBox>
};

export default MainList;