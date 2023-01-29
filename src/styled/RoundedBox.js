import styled from "styled-components";

const RoundedBox = styled.div`
	border-radious: ${ props => props.borderRadious || 0 }px;
	border: 1px solid;
`

export default RoundedBox;