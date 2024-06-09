import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Grid from "@mui/material/Grid";
import MDBox from "../../components/MDBox";
import DashboardLayout from "../../examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "../../examples/Navbars/DashboardNavbar";
import Footer from "../../examples/Footer";
import ComplexStatisticsCard from "../../examples/Cards/StatisticsCards/ComplexStatisticsCard";
import ReportsBarChart from "../../examples/Charts/BarCharts/ReportsBarChart";
import ReportsLineChart from "../../examples/Charts/LineCharts/ReportsLineChart";
import reportsBarChartData from "../../layouts/dashboard/data/reportsBarChartData";
import reportsLineChartData from "../../layouts/dashboard/data/reportsLineChartData";
import Projects from "../../layouts/dashboard/components/Projects";
import OrdersOverview from "../../layouts/dashboard/components/OrdersOverview";

function Dashboard() {
  const navigate = useNavigate();
  const { sales, tasks } = reportsLineChartData;
  const [searchQuery, setSearchQuery] = useState("");

  const handleCardClick = (orderCount) => {
    navigate("/Sales", { state: { orderCount } });
  };

  const handleSearch = (query) => {
    // Debounce the state update with a delay of 300 milliseconds
    setTimeout(() => {
      setSearchQuery(query.toLowerCase());
    }, 300);
  };

  const filterDivisions = (content) => {
    return content.toLowerCase().includes(searchQuery);
  };

  return (
    <DashboardLayout>
      <DashboardNavbar onSearch={handleSearch} />
      <MDBox py={3}>
        <Grid container spacing={3}>
          {filterDivisions("Total Orders") && (
            <Grid item xs={12} md={6} lg={3}>
              <MDBox mb={1.5} onClick={() => handleCardClick(42)} style={{ cursor: "pointer" }}>
                <ComplexStatisticsCard
                  color="dark"
                  icon="shopping_cart"
                  title="Total Orders"
                  count={42}
                  percentage={{
                    color: "success",
                    amount: "+55%",
                    label: "than last week",
                  }}
                />
              </MDBox>
            </Grid>
          )}
          {filterDivisions("Orders Dispatched") && (
            <Grid item xs={12} md={6} lg={3}>
              <MDBox mb={1.5} onClick={() => handleCardClick(22)} style={{ cursor: "pointer" }}>
                <ComplexStatisticsCard
                  icon="local_shipping"
                  title="Orders Dispatched"
                  count="22"
                  percentage={{
                    color: "success",
                    amount: "+3%",
                    label: "than last month",
                  }}
                />
              </MDBox>
            </Grid>
          )}
          {filterDivisions("Under Processing") && (
            <Grid item xs={12} md={6} lg={3}>
              <MDBox mb={1.5} onClick={() => handleCardClick(20)} style={{ cursor: "pointer" }}>
                <ComplexStatisticsCard
                  color="success"
                  icon="assignment"
                  title="Under Processing"
                  count="20"
                  percentage={{
                    color: "success",
                    amount: "+1%",
                    label: "than yesterday",
                  }}
                />
              </MDBox>
            </Grid>
          )}
        </Grid>
        <MDBox mt={4.5}>
          <Grid container spacing={3}>
            {filterDivisions("website views") && (
              <Grid item xs={12} md={6} lg={4}>
                <MDBox mb={3}>
                  <ReportsBarChart
                    color="info"
                    title="website views"
                    description="Last Campaign Performance"
                    date="campaign sent 2 days ago"
                    chart={reportsBarChartData}
                  />
                </MDBox>
              </Grid>
            )}
            {filterDivisions("daily sales") && (
              <Grid item xs={12} md={6} lg={4}>
                <MDBox mb={3}>
                  <ReportsLineChart
                    color="success"
                    title="daily sales"
                    description={
                      <>
                        (<strong>+15%</strong>) increase in today sales.
                      </>
                    }
                    date="updated 4 min ago"
                    chart={sales}
                  />
                </MDBox>
              </Grid>
            )}
            {filterDivisions("completed tasks") && (
              <Grid item xs={12} md={6} lg={4}>
                <MDBox mb={3}>
                  <ReportsLineChart
                    color="dark"
                    title="completed tasks"
                    description="Last Campaign Performance"
                    date="just updated"
                    chart={tasks}
                  />
                </MDBox>
              </Grid>
            )}
          </Grid>
        </MDBox>
        <MDBox>
          <Grid container spacing={3}>
            {filterDivisions("Projects") && (
              <Grid item xs={12} md={6} lg={8}>
                <Projects />
              </Grid>
            )}
            {filterDivisions("Orders Overview") && (
              <Grid item xs={12} md={6} lg={4}>
                <OrdersOverview />
              </Grid>
            )}
          </Grid>
        </MDBox>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Dashboard;
