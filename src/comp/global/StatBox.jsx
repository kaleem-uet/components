import { Box, Typography, useTheme } from "@mui/material";
import ProgressCircle from "../ProgressCircle";

const StatBox = ({ title, subtitle, icon, progress, increase }) => {
  return (
    <Box width="100%" m="0 30px">
      <Box display="flex" justifyContent="space-between">
        <Box>
          {icon}
          <Typography variant="h4" fontWeight="bold">
            {title}
          </Typography>
        </Box>
        <Box>
          <ProgressCircle value={30} />
        </Box>
      </Box>
      <Box display="flex" justifyContent="space-between" mt="2px">
        <Typography variant="h5">{subtitle}</Typography>
        <Typography variant="h5" fontStyle="italic">
          {increase}
        </Typography>
      </Box>
    </Box>
  );
};

export default StatBox;
