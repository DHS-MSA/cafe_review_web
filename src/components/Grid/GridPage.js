import styles from "./GridPage.module.css";
import GridContainer from "./GridContainer";
import useWindowDimensions from './Util';

const GridPage = () => {
    const { width, height } = useWindowDimensions();
    let grid_columns = Math.floor(width / 230);

    return <GridContainer columns={grid_columns}>
       <div className={styles.item}>A</div>
       <div className={styles.item}>B</div>
       <div className={styles.item}>C</div>
       <div className={styles.item}>D</div>
       <div className={styles.item}>E</div>
       <div className={styles.item}>F</div>
       <div className={styles.item}>width: {width} height: {height}</div>
    </GridContainer>
};

export default GridPage;