import Box from "@mui/joy/Box";
import Breadcrumbs from "@mui/joy/Breadcrumbs";
import Link from "@mui/joy/Link";
import Typography from "@mui/joy/Typography";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";

export default function BreadCrumb({ Icon }) {
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Breadcrumbs
        size="sm"
        aria-label="breadcrumbs"
        separator={<ChevronRightRoundedIcon fontSize="sm" />}
        sx={{ pl: 0 }}
      >
        <Link
          underline="none"
          color="neutral"
          href="#some-link"
          aria-label="Home"
        >
          <Icon />
        </Link>
        <Link
          underline="hover"
          color="neutral"
          href="#some-link"
          fontSize={12}
          fontWeight={500}
        >
          Dashboard
        </Link>
        <Typography color="primary" fontWeight={500} fontSize={12}>
          Orders
        </Typography>
        <Typography color="primary" fontWeight={500} fontSize={12}>
          Orders
        </Typography>
        <Typography color="primary" fontWeight={500} fontSize={12}>
          Orders
        </Typography>
      </Breadcrumbs>
    </Box>
  );
}
