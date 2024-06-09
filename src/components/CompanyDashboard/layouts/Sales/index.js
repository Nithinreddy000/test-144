import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Grid from "@mui/material/Grid";
import MDBox from "../../components/MDBox";
import DashboardLayout from "../../examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "../../examples/Navbars/DashboardNavbar";
import Footer from "../../examples/Footer";
import MDTypography from "../../components/MDTypography";
import ComplexStatisticsCard from "../../examples/Cards/StatisticsCards/ComplexStatisticsCard";

function Sales() {
  const location = useLocation();
  const { orderCount } = location.state || { orderCount: 0 };
  const colors = ["success", "dark", "info"];
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (query) => {
    // Debounce the state update with a delay of 300 milliseconds
    setTimeout(() => {
      setSearchQuery(query.toLowerCase());
    }, 300);
  };

  const filterOrder = (orderIndex) => {
    const orderDetails = [
      `ORDER ${orderIndex + 1}`,
      `Order ID: ${11223 + orderIndex}`,
      `Customer Name: Customer ${orderIndex + 1}`,
      `Order Date: 2024-06-${String(orderIndex + 1).padStart(2, "0")}`,
      `Items Ordered: Product ${String.fromCharCode(65 + (orderIndex % 26))}`,
      `Total Amount: $${100 + orderIndex}`,
      `Payment Status: ${orderIndex % 2 === 0 ? "Paid" : "Pending"}`,
      `Shipping Address: ${1234 + orderIndex} Elm St, Springfield, IL`,
      `Expected Delivery: 2024-06-${String(orderIndex + 7).padStart(2, "0")}`,
    ];

    return orderDetails.some((detail) => detail.toLowerCase().includes(searchQuery));
  };

  return (
    <DashboardLayout>
      <DashboardNavbar onSearch={handleSearch} />
      <MDBox py={3}>
        <Grid container spacing={3}>
          {Array.from({ length: orderCount }, (_, index) =>
            filterOrder(index) ? (
              <Grid item xs={12} md={6} lg={3} key={index}>
                <MDBox mb={1.5}>
                  <ComplexStatisticsCard
                    color={colors[index % colors.length]} // Alternate colors
                    icon="shopping_cart"
                    title={`ORDER ${index + 1}`}
                    percentage={{
                      color: "success",
                      amount: "+55%",
                      label: "than last week",
                    }}
                    details={
                      <>
                        <MDTypography variant="body2" color="textSecondary">
                          <strong>Order ID:</strong> {11223 + index}
                        </MDTypography>
                        <MDTypography variant="body2" color="textSecondary">
                          <strong>Customer Name:</strong> Customer {index + 1}
                        </MDTypography>
                        <MDTypography variant="body2" color="textSecondary">
                          <strong>Order Date:</strong> 2024-06-{String(index + 1).padStart(2, "0")}
                        </MDTypography>
                        <MDTypography variant="body2" color="textSecondary">
                          <strong>Items Ordered:</strong> Product {String.fromCharCode(65 + (index % 26))}
                        </MDTypography>
                        <MDTypography variant="body2" color="textSecondary">
                          <strong>Total Amount:</strong> ${100 + index}
                        </MDTypography>
                        <MDTypography variant="body2" color="textSecondary">
                          <strong>Payment Status:</strong> {index % 2 === 0 ? "Paid" : "Pending"}
                        </MDTypography>
                        <MDTypography variant="body2" color="textSecondary">
                          <strong>Shipping Address:</strong> {1234 + index} Elm St, Springfield, IL
                        </MDTypography>
                        <MDTypography variant="body2" color="textSecondary">
                          <strong>Expected Delivery:</strong> 2024-06-{String(index + 7).padStart(2, "0")}
                        </MDTypography>
                      </>
                    }
                  />
                </MDBox>
              </Grid>
            ) : null
          )}
        </Grid>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Sales;
