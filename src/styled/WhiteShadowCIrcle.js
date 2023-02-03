import styled from "styled-components";

/**
 * custom default style 을 가진 div
 */

const WhiteShadowCircle = styled.div`
	display: flex;
	justify-content: ${ props => props.justifyContent || center };
	align-items: ${ props => props.alignItems || center };
	border-radius: ${ props => props.borderRadius || '1rem' };
	border: 1px solid;
	width: ${ props => props.customWidth || null };
	height: ${ props => props.customHeight || '40px' };
	margin: ${ props => props.customMargin || '0, 0, 0, 0' };
	padding: ${ props => props.customPadding || '0, 0, 0 ,0' };
`

export default WhiteShadowCircle;