import * as React from "react";
import Avatar from "@mui/joy/Avatar";
import FormLabel from "@mui/joy/FormLabel";
import Radio, { radioClasses } from "@mui/joy/Radio";
import RadioGroup from "@mui/joy/RadioGroup";
import Sheet from "@mui/joy/Sheet";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";

type Props = {
  style?: React.CSSProperties;
};

/**
 * @description 전체, 개인카페, 체인점 카테고리 컴포넌트
 */
function IconsRadio({ style }: Props) {
  return (
    <>
      <RadioGroup
        style={style}
        aria-label="platform"
        defaultValue="Website"
        overlay
        name="platform"
        sx={{
          flexDirection: "row",
          gap: 2,
          [`& .${radioClasses.checked}`]: {
            [`& .${radioClasses.action}`]: {
              inset: -1,
              border: "3px solid",
              borderColor: "primary.500",
            },
          },
          [`& .${radioClasses.radio}`]: {
            display: "contents",
            "& > svg": {
              zIndex: 2,
              position: "absolute",
              top: "-8px",
              right: "-8px",
              bgcolor: "background.body",
              borderRadius: "50%",
            },
          },
        }}
      >
        {["전체", "개인카페", "체인점"].map((value, index) => (
          <Sheet
            key={value}
            variant="outlined"
            sx={{
              borderRadius: "md",
              bgcolor: "background.body",
              boxShadow: "sm",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              p: 2,
              minWidth: 120,
            }}
          >
            <Radio id={value} value={value} />
            <FormLabel htmlFor={value}>{value}</FormLabel>
          </Sheet>
        ))}
      </RadioGroup>
    </>
  );
}

export default IconsRadio;
