import {
    Grid,
    Avatar,
    Badge,
    InputAdornment,
    OutlinedInput,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";

/**
 * @description 헤더 컴포넌트
 */
function Header() {
    return (
        <Grid container spacing={2} mt="10px">
            <Grid item xs={1}>
                <img src="images/java-image.png" width="80px" />
            </Grid>
            <Grid item xs={1}></Grid>
            <Grid item xs={8} mt="15px">
                <OutlinedInput
                    id="outlined-adornment-weight"
                    fullWidth
                    value=""
                    endAdornment={
                        <InputAdornment position="end">
                            <SearchIcon
                                aria-label="toggl visibility"
                                style={{ cursor: "pointer" }}
                            />
                        </InputAdornment>
                    }
                />
            </Grid>
            <Grid item xs={1}>
                <Link to="/registration">카페 등록하기</Link>
            </Grid>
            <Grid item xs={1} container justifyContent="center">
                <Badge color="secondary" badgeContent={99} showZero>
                    <Avatar alt="Remy Sharp" src="images/monkey.png" />
                </Badge>
            </Grid>
        </Grid>
    );
}

export default Header;
