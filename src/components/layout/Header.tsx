import { Grid, TextField, Avatar, Badge } from "@mui/material";

/**
 * @description 헤더 컴포넌트
 */
function Header() {
  return (
    <Grid container spacing={2} marginTop="10px">
      <Grid item xs={2}>
        <img src="images/java-image.png" width="80px" />
      </Grid>
      <Grid item xs={8}>
        <TextField fullWidth label="fullWidth" id="fullWidth" />
      </Grid>
      <Grid item xs={2}>
        <Badge color="secondary" badgeContent={99}>
          <Avatar alt="Remy Sharp" src="images/monkey.png" />
        </Badge>
      </Grid>
    </Grid>
  );
}

export default Header;
