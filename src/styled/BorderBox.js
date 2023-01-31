import styled from "styled-components";

/**
 * custom default style 을 가진 div
 */

const BorderBox = styled.div`
	border-radius: ${ props => props.borderRadius || null };
	border: 1px solid;
	width: ${ props => props.customWidth || null };
	height: ${ props => props.customHeight || '40px' };
	margin: ${ props => props.customMargin || '0, 0, 0, 0' };
	padding: ${ props => props.customPadding || '0, 0, 0 ,0' };
	justify-content: ${ props => props.justifyContent || null };
	align-items: ${ props => props.alignItems || null };
`

export default BorderBox;