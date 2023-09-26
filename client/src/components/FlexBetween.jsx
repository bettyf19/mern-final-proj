import { Box } from "@mui/material";
import { styled } from "@mui/system";

//good for using css in components
const FlexBetween = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

export default FlexBetween;
