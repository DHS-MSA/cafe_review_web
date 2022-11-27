import { useState } from "react";

import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import { Margin } from "@mui/icons-material";

function Contents() {
  const [alignment, setAlignment] = useState<string>("web");

  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string
  ) => {
    setAlignment(newAlignment);
  };

  return (
    <>
      <ToggleButtonGroup
        color="primary"
        value={alignment}
        exclusive
        size="large"
        onChange={handleChange}
        aria-label="Platform"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <ToggleButton value="web" aria-checked>
          전체
        </ToggleButton>
        <ToggleButton value="android">체인점</ToggleButton>
        <ToggleButton value="ios">개인카페</ToggleButton>
      </ToggleButtonGroup>
    </>
  );
}

export default Contents;
