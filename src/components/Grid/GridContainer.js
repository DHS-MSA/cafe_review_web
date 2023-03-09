import styled from "styled-components";

const GridContainer = styled.div`
	display: grid;
    margin: 10px;
    grid-template-columns: repeat(${ props => props.columns || '1' }, minmax(200px, auto));
    grid-auto-rows: minmax(300px, auto);
    gap: 20px;
`

export default GridContainer;