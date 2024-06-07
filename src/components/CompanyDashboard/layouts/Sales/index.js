import React from "react";
import Grid from "@mui/material/Grid";
import MDBox from "../../components/MDBox";
import MDTypography from "../../components/MDTypography";  // Import MDTypography here
import DashboardLayout from "../../examples/LayoutContainers/DashboardLayout"; 
import DashboardNavbar from "../../examples/Navbars/DashboardNavbar";
import Footer from "../../examples/Footer";
import ComplexStatisticsCard from "../../examples/Cards/StatisticsCards/ComplexStatisticsCard";

function Dashboard() {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox py={3}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="dark"
                icon="weekend"
                title="ORDER 1"
                percentage={{
                  color: "success",
                  amount: "+55%",
                  label: "than last week",
                }}
                details={(
                  <>
                    <MDTypography variant="body2" color="textSecondary">
                    <strong>Order ID:</strong> 11223
                    </MDTypography>
                    <MDTypography variant="body2" color="textSecondary">
                    <strong>Customer Name:</strong> Bob Johnson
                    </MDTypography>
                    <MDTypography variant="body2" color="textSecondary">
                    <strong>Order Date:</strong> 2024-06-03
                    </MDTypography>
                    <MDTypography variant="body2" color="textSecondary">
                    <strong>Items Ordered:</strong> Product M, Product N, Product O
                    </MDTypography>
                    <MDTypography variant="body2" color="textSecondary">
                    <strong>Total Amount:</strong> $250
                    </MDTypography>
                    <MDTypography variant="body2" color="textSecondary">
                    <strong>Payment Status:</strong> Paid
                    </MDTypography>
                    <MDTypography variant="body2" color="textSecondary">
                    <strong>Shipping Address:</strong> 9101 Pine St, Capital City, IL
                    </MDTypography>
                    <MDTypography variant="body2" color="textSecondary">
                    <strong>Expected Delivery:</strong> 2024-06-09
                    </MDTypography>
                  </>
                )}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                icon="leaderboard"
                title="ORDER 2"
                percentage={{
                  color: "success",
                  amount: "+3%",
                  label: "than last month",
                }}
                details={(
                  <>
                    <MDTypography variant="body2" color="textSecondary">
                    <strong>Order ID:</strong> 67890
                    </MDTypography> 
                    <MDTypography variant="body2" color="textSecondary">
                    <strong>Customer Name:</strong> Jane Smith
                    </MDTypography>
                    <MDTypography variant="body2" color="textSecondary">
                    <strong>Order Date:</strong> 2024-06-02
                    </MDTypography>
                    <MDTypography variant="body2" color="textSecondary">
                    <strong>Items Ordered:</strong> Product X, Product Y
                    </MDTypography>
                    <MDTypography variant="body2" color="textSecondary">
                    <strong>Total Amount:</strong> $200
                    </MDTypography>
                    <MDTypography variant="body2" color="textSecondary">
                    <strong>Payment Status:</strong> Pending
                    </MDTypography>
                    <MDTypography variant="body2" color="textSecondary">
                    <strong>Shipping Address:</strong> 5678 Oak St, Shelbyville, IL
                    </MDTypography>
                    <MDTypography variant="body2" color="textSecondary">
                    <strong>Expected Delivery:</strong> 2024-06-08
                    </MDTypography>
                  </>
                )}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="success"
                icon="store"
                title="ORDER 3"
                percentage={{
                  color: "success",
                  amount: "+1%",
                  label: "than yesterday",
                }}
                details={(
                  <>
                    <MDTypography variant="body2" color="textSecondary">
                    <strong>Order ID:</strong> 12345
                    </MDTypography>
                    <MDTypography variant="body2" color="textSecondary">
                    <strong>Customer Name:</strong> John Doe
                    </MDTypography>
                    <MDTypography variant="body2" color="textSecondary">
                    <strong>Order Date:</strong> 2024-06-01
                    </MDTypography>
                    <MDTypography variant="body2" color="textSecondary">
                    <strong>Items Ordered:</strong> Product A, Product B, Product C
                    </MDTypography>
                    <MDTypography variant="body2" color="textSecondary">
                    <strong>Total Amount:</strong> $150
                    </MDTypography> 
                    <MDTypography variant="body2" color="textSecondary">
                    <strong>Payment Status:</strong> Paid
                    </MDTypography>
                    <MDTypography variant="body2" color="textSecondary">
                    <strong>Shipping Address:</strong> 1234 Elm St, Springfield, IL
                    </MDTypography>
                    <MDTypography variant="body2" color="textSecondary">
                    <strong>Expected Delivery:</strong> 2024-06-07
                    </MDTypography>
                  </>
                )}
              />
            </MDBox>
          </Grid>
        </Grid>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Dashboard;
