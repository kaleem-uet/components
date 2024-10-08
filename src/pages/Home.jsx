import React from "react";
import Box from "@mui/material/Box";
import StatBox from "../comp/global/StatBox";

import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Grid from "@mui/material/Grid";
import { useTheme } from "@mui/material";
function Home() {
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === "dark";
  return (
    <Grid container spacing={1}>
      <Grid item md={3}>
        <Box
          sx={{
            padding: 1,
            bgcolor: isDarkMode ? "primary.600" : "primary.50",

            boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
            borderRadius: 2,
          }}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title={20}
            subtitle="Total Review"
            progress="1.0"
            icon={
              <AddShoppingCartIcon sx={{ color: "red", fontSize: "26px" }} />
            }
          />
        </Box>
      </Grid>
      <Grid item md={3}>
        <Box
          sx={{
            padding: 1,
            bgcolor: isDarkMode ? "primary.600" : "primary.50",

            boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)", // Example shadow
            borderRadius: 2,
          }}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title={20}
            subtitle="Total Review"
            progress="1.0"
            icon={
              <AddShoppingCartIcon sx={{ color: "red", fontSize: "26px" }} />
            }
          />
        </Box>
      </Grid>
      <Grid item md={3}>
        <Box
          sx={{
            padding: 1,
            bgcolor: isDarkMode ? "primary.600" : "primary.50",

            boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)", // Example shadow
            borderRadius: 2,
          }}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title={20}
            subtitle="Total Review"
            progress="1.0"
            icon={
              <AddShoppingCartIcon sx={{ color: "red", fontSize: "26px" }} />
            }
          />
        </Box>
      </Grid>
      <Grid item md={3}>
        <Box
          sx={{
            padding: 1,
            bgcolor: isDarkMode ? "primary.600" : "primary.50",

            boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)", // Example shadow
            borderRadius: 2,
          }}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title={20}
            subtitle="Total Review"
            progress="1.0"
            icon={
              <AddShoppingCartIcon sx={{ color: "red", fontSize: "26px" }} />
            }
          />
        </Box>
      </Grid>
    </Grid>
  );
}

export default Home;
