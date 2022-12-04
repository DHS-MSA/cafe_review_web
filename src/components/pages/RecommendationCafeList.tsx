import { Container, Grid, Stack } from "@mui/material";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import CafeInfo from "@/components/pages/CafeInfo";

/**
 * @description 추천 매장 리스트 컴포넌트
 */
function RecommendationCafeList() {
    // state
    const [recommendList, setRecommendList] = useState<any[]>([]);

    useEffect(() => {
        const fetchRecommendList = async () => {
            const response = await axios.get(
                "http://localhost:8080/info/recommendList"
            );
            console.log(response.data);
            setRecommendList(response.data);
        };

        fetchRecommendList();
    }, []);

    // view
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
                    {recommendList.map((item, index) => (
                        <Grid item xs={3} key={index}>
                            <CafeInfo
                                name={item.name}
                                rating={item.rating}
                                likeCount={item.likeCount}
                                menuList={item.menuDTOList}
                            />
                        </Grid>
                    ))}
                </Grid>
            </Stack>
        </>
    );
}

export default RecommendationCafeList;
