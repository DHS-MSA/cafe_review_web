import styled from "styled-components";

const RoundedBox = styled.div`
	border-radius: ${ props => props.borderRadius || null };
	border: 1px solid;
	width: ${ props => props.customWidth || null };
	height: ${ props => props.customHeight || '40px' };
	justify-content: ${ props => props.justifyContent || null };
`

export default RoundedBox;