import React from "react";
import { Line } from "react-chartjs-2"; // ✅ Correctly import Line chart
import {
  Chart as ChartJS, // ✅ Ensure this is declared only once
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from "chart.js";

// ✅ Register Chart.js components once
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const data = {
  labels: ["Jan", "Feb", "Mar", "Apr"],
  datasets: [
    {
      label: "API Requests",
      data: [100, 200, 150, 300],
      borderColor: "blue",
      backgroundColor: "rgba(0, 0, 255, 0.2)",
    }
  ],
};

export default function APIMetrics() {
  return (
    <div>
      <h2>API Metrics</h2>
      <Line data={data} />
    </div>
  );
}
