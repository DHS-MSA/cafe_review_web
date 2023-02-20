import IconsRadio from "../mui/IconsRadio";
// import ChoiceChipCheckbox from "../mui/ChoiceChipCheckbox";
import { Container, Stack } from "@mui/material";
import RecommendationCafeList from "@/components/pages/RecommendationCafeList";

function Contents() {
    return (
        <>
            <Stack spacing={2} mt="10px">
                <IconsRadio />
                {/* <ChoiceChipCheckbox /> */}
                <Container maxWidth={false} disableGutters={true}>
                    {/* <RecommendationCafeList /> */}
                </Container>
            </Stack>
        </>
    );
}

export default Contents;
