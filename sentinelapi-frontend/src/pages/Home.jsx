import APIMetrics from "../components/APIMetrics";
import { useEffect, useState } from "react";
import axios from "axios";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);


const Home = () => {
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/metrics");
        setApiData(response.data);
      } catch (error) {
        console.error("Error fetching API data", error);
      }
    };
  
    fetchData();
    const interval = setInterval(fetchData, 5000);
    return () => clearInterval(interval);
  }, []);
  
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold">API Performance Metrics</h2>
      <APIMetrics data={apiData} />
    </div>
  );
};
export default Home;
