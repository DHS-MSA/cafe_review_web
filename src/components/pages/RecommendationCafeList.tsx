import CafeInfo from "@/components/pages/CafeInfo";
import { Container, Grid, Stack } from "@mui/material";
import { useState } from "react";

/**
 * @description 추천 매장 리스트 컴포넌트
 */
function RecommendationCafeList() {
  // state
  const [list, setList] = useState<string[]>([" ", " ", " ", " "]);

  console.log(list.length);
  return (
    <>
      <Container sx={{ zIndex: "tooltip" }}>
        <Stack>
          <h2>당신을 위한 이 지역 HOT 매장추천</h2>
          <Grid
            container
            direction="row"
            alignItems="center"
            justifyContent="center"
            spacing={20}
          >
            {list.map((item) => (
              <Grid item xs={3}>
                <CafeInfo />
              </Grid>
            ))}
          </Grid>
        </Stack>
      </Container>
    </>
  );
}

export default RecommendationCafeList;
