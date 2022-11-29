import { useState } from "react";
import IconsRadio from "../mui/IconsRadio";
import ChoiceChipCheckbox from "../mui/ChoiceChipCheckbox";

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
      <IconsRadio style={{ display: "flex", justifyContent: "center" }} />
      <hr />
      <ChoiceChipCheckbox
        style={{ display: "flex", justifyContent: "center" }}
      />
    </>
  );
}

export default Contents;
