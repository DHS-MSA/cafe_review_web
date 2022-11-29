import Checkbox from "@mui/joy/Checkbox";
import List from "@mui/joy/List";
import ListItem from "@mui/joy/ListItem";
import Done from "@mui/icons-material/Done";
import { ChangeEvent, useState } from "react";

type Props = {
  style?: React.CSSProperties;
};

/**
 *
 * @description 카페 카테고리 컴포넌트
 */
export default function ChoiceChipCheckbox({ style }: Props) {
  // state
  const [value, setValue] = useState<string[]>([]);

  // event
  const onChange = (e: ChangeEvent<HTMLInputElement>, item: string) => {
    if (e.target.checked) {
      setValue((val) => [...val, item]);
    } else {
      setValue((val) => val.filter((text) => text !== item));
    }
  };

  return (
    <>
      <List
        style={style}
        row
        wrap
        sx={{
          "--List-gap": "8px",
          "--List-item-radius": "20px",
          "--List-item-minHeight": "32px",
        }}
      >
        {["전체", "공부", "분위기", "디저트", "뷰", "노키즈", "애견동반"].map(
          (item, index) => (
            <ListItem key={item}>
              {value.includes(item) && (
                <Done
                  // fontSize="md"
                  color="primary"
                  sx={{ ml: -0.5, mr: 0.5, zIndex: 2, pointerEvents: "none" }}
                />
              )}
              <Checkbox
                size="sm"
                disableIcon
                overlay
                label={item}
                checked={value.includes(item)}
                variant={value.includes(item) ? "soft" : "outlined"}
                onChange={(event) => onChange(event, item)}
                componentsProps={{
                  action: ({ checked }) => ({
                    sx: checked
                      ? {
                          border: "1px solid",
                          borderColor: "primary.500",
                        }
                      : {},
                  }),
                }}
              />
            </ListItem>
          )
        )}
      </List>
    </>
  );
}
