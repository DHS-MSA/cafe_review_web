import Header from "@/components/layout/Header";
import { Button, Container, Grid } from "@mui/material";

function Registration() {
    return (
        <>
            <Header />
            <hr />
            <Container fixed>
                <Grid container spacing={3}>
                    <Grid item xs="auto">
                        <h2>현하님, 안녕하세요!</h2>
                    </Grid>
                    <Grid item xs={6}></Grid>
                    <Grid
                        item
                        xs={3}
                        mt="20px"
                        display="flex"
                        justifyContent="flex-end"
                        alignItems="flex-end"
                    >
                        <Button variant="outlined">카페 등록하기</Button>
                    </Grid>
                </Grid>
            </Container>
        </>
    );
}

export default Registration;
