import { CircularProgress } from "@mui/joy";

const ProgressCircle = ({ value }) => {
  return (
    <CircularProgress
      color="success"
      determinate
      variant="outlined"
      value={value}
    />
  );
};

export default ProgressCircle;
