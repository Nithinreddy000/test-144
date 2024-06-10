// data.js
import colors from "../../../../../assets/theme/base/colors";

export default function data() {
  const chartData = {
    labels: ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: {
      label: "Mobile apps", // Label for the dataset
      data: [50, 40, 300, 320, 500, 350, 200, 230, 500], // Array of data points
    },
  };
  

  return {
    columns: [],
    rows: [],
    chartData,
  };
}
