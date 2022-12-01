import CafeInfo from "@/components/pages/CafeInfo";
import { Container, Grid, Stack } from "@mui/material";
import { useEffect, useState } from "react";

/**
 * @description 추천 매장 리스트 컴포넌트
 */
function RecommendationCafeList() {
  // state
  const [list, setList] = useState<any[]>([]);
  console.log(list);
  useEffect(() => {
    const cafeInfoList = [
      { name: "스타벅스", rating: 5.0, likeCount: 112 },
      { name: "카페베네", rating: 4.0, likeCount: 89 },
      { name: "투썸플레이스", rating: 3.0, likeCount: 152 },
      { name: "카페가가", rating: 3.5, likeCount: 10 },
    ];
    setList(cafeInfoList);
  }, []);

  return (
    <>
      <Stack>
        <h2>당신을 위한 이 지역 HOT 매장추천</h2>
        <Grid
          container
          direction="row"
          alignItems="center"
          justifyContent="center"
          spacing={20}
        >
          {list.map((item, index) => (
            <Grid item xs={3} key={index}>
              <CafeInfo
                name={item.name}
                rating={item.rating}
                likeCount={item.likeCount}
              />
            </Grid>
          ))}
        </Grid>
      </Stack>
    </>
  );
}

export default RecommendationCafeList;
