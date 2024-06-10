import { useState } from "react";
import Card from "@mui/material/Card";
import Icon from "@mui/material/Icon";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Grid from "@mui/material/Grid";
import MDBox from "../../../../components/MDBox";
import MDTypography from "../../../../components/MDTypography";
import ReportsLineChart from "../../../../examples/Charts/LineCharts/ReportsLineChart";
import data from "../../../../layouts/dashboard/components/Projects/data";

function Projects() {
  const { chartData } = data();
  const [menu, setMenu] = useState(null);

  const openMenu = ({ currentTarget }) => setMenu(currentTarget);
  const closeMenu = () => setMenu(null);

  return (
    <Card sx={{ height: "100%" }}>
      <MDBox display="flex" justifyContent="space-between" alignItems="center" p={3}>
        <MDBox>
          <MDTypography variant="h4" gutterBottom>
            Price Trend
          </MDTypography>
          <MDBox display="flex" alignItems="center" lineHeight={0}>
            <Icon
              sx={{
                fontWeight: "bold",
                color: ({ palette: { info } }) => info.main,
                mt: -0.5,
              }}
            >
              trending_up
            </Icon>
            <MDTypography variant="button" fontWeight="regular" color="text">
              &nbsp;<strong></strong>
            </MDTypography>
          </MDBox>
        </MDBox>
        <MDBox color="text" px={2}>
          <Icon sx={{ cursor: "pointer", fontWeight: "bold" }} fontSize="small" onClick={openMenu}>
            more_vert
          </Icon>
        </MDBox>
        <Menu
          anchorEl={menu}
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
          transformOrigin={{ vertical: "top", horizontal: "right" }}
          open={Boolean(menu)}
          onClose={closeMenu}
        >
          <MenuItem onClick={closeMenu}>Action</MenuItem>
          <MenuItem onClick={closeMenu}>Another action</MenuItem>
          <MenuItem onClick={closeMenu}>Something else here</MenuItem>
        </Menu>
      </MDBox>
      <Grid container justifyContent="center">
      <Grid item xs={14} md={12} lg={10} >
            <ReportsLineChart
              color="success"
              chart={chartData}
            />
            </Grid>
  </Grid>
    </Card>
  );
}

export default Projects;
