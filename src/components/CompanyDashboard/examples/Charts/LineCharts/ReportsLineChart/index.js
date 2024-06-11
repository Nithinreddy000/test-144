import { useMemo } from "react";
import PropTypes from "prop-types";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import Card from "@mui/material/Card";
import MDBox from "../../../../components/MDBox";
import configs from "../../../../examples/Charts/LineCharts/ReportsLineChart/configs";
import useMediaQuery from '@mui/material/useMediaQuery';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

function ReportsLineChart({ color, title, description, date, chart }) {
  const { data, options } = configs(chart.labels || [], chart.datasets || {});
  
  const isLargeScreen = useMediaQuery('(min-width:1024px) and (min-height:1366px)');
  const chartHeight = isLargeScreen ? "25rem" : "20rem"; // Adjust heights as needed

  return (
    <Card sx={{
      padding: "1rem",
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height:'45vh'
    }}>
      {useMemo(
        () => (
          <MDBox
            variant="gradient"
            bgColor={color}
            borderRadius="lg"
            py={2}
            pr={0.5}
            mt={-5}
            sx={{ height: chartHeight, width: isLargeScreen ? '100%' : '100%' }} // Adjust width if necessary
          >
            <Line data={data} options={options} redraw />
          </MDBox>
        ),
        [chart, color, chartHeight, isLargeScreen]
      )}
    </Card>
  );
}

ReportsLineChart.defaultProps = {
  color: "info",
  description: "",
};

ReportsLineChart.propTypes = {
  color: PropTypes.oneOf(["primary", "secondary", "info", "success", "warning", "error", "dark"]),
  title: PropTypes.string.isRequired,
  description: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  date: PropTypes.string.isRequired,
  chart: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.array, PropTypes.object])).isRequired,
};

export default ReportsLineChart;
