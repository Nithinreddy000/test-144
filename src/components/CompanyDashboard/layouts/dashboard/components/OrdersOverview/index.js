import React from "react";
// @mui/material components
import Card from "@mui/material/Card";
import Icon from "@mui/material/Icon";
// Material Dashboard 2 React components
import MDBox from "../../../../components/MDBox";
import MDTypography from "../../../../components/MDTypography";
// Material Dashboard 2 React example components
import TimelineItem from "../../../../examples/Timeline/TimelineItem";
// Custom scrollbar component
import { Scrollbars } from 'react-custom-scrollbars-2';

function OrdersOverview() {
  const timelineItems = [
    { color: "success", icon: "notifications", title: "New order #1832412", dateTime: "22 DEC 7:20 PM" },
    { color: "error", icon: "inventory_2", title: "New order #1832412", dateTime: "21 DEC 11 PM" },
    { color: "info", icon: "shopping_cart", title: "New order #1832412", dateTime: "21 DEC 9:34 PM" },
    { color: "warning", icon: "payment", title: "New order #1832412", dateTime: "20 DEC 2:20 AM" },
    { color: "primary", icon: "vpn_key", title: "New order #1832412", dateTime: "18 DEC 4:54 AM" },
    { color: "primary", icon: "vpn_key", title: "New order #1832412", dateTime: "18 DEC 4:54 AM" },
    { color: "primary", icon: "vpn_key", title: "New order #1832412", dateTime: "18 DEC 4:54 AM" },
    { color: "primary", icon: "vpn_key", title: "New order #1832412", dateTime: "18 DEC 4:54 AM" },
    { color: "primary", icon: "vpn_key", title: "New order #1832412", dateTime: "18 DEC 4:54 AM" },
    { color: "primary", icon: "vpn_key", title: "New order #1832412", dateTime: "18 DEC 4:54 AM" },
    { color: "primary", icon: "vpn_key", title: "New order #1832412", dateTime: "18 DEC 4:54 AM" },
  ];

  const focusedStyle = {
    transform: 'scale(1.05)',  // Adjust the scale to fit better
    transition: 'transform 0.3s ease',
    zIndex: 1,  // Bring the focused item to the front
  };

  const itemStyle = {
    transition: 'transform 0.3s ease',
    padding: '0 8px',  // Add some padding to give room for scaling
  };

  return (
    <Card sx={{ height: "100%" }}>
      <MDBox pt={3} px={3}>
        <MDTypography variant="h4" fontWeight="medium">
          Approval Pending
        </MDTypography>
        <MDBox mt={0} mb={2}>
          <MDTypography variant="button" color="text" fontWeight="regular">
            <MDTypography display="inline" variant="body2" verticalAlign="middle">
              <Icon sx={{ color: ({ palette: { success } }) => success.main }}>arrow_upward</Icon>
            </MDTypography>
            &nbsp;
            <MDTypography variant="button" color="text" fontWeight="medium">
              24%
            </MDTypography>{" "}
            this month
          </MDTypography>
        </MDBox>
      </MDBox>
      <MDBox p={2} sx={{ height: '50vh', position: 'relative', overflow: 'hidden' }}>
        <Scrollbars autoHide style={{ width: '100%' }}>
          <MDBox sx={{ width: '100%' }}>
            {timelineItems.map((item, index) => (
              <div
                key={index}
                style={itemStyle}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
              >
                <TimelineItem
                  color={item.color}
                  icon={item.icon}
                  title={item.title}
                  dateTime={item.dateTime}
                  lastItem={index === timelineItems.length - 1}
                />
              </div>
            ))}
          </MDBox>
        </Scrollbars>
      </MDBox>
    </Card>
  );
}

export default OrdersOverview;
