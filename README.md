# SentinelAPI

SentinelAPI is a comprehensive platform for monitoring API performance, tracking metrics, and managing API requests efficiently. The project includes a frontend built with React and Vite, along with a backend to handle API data processing.

## 🚀 Features
- Real-time API Metrics Visualization
- Crypto Trading Bot Integration
- User Authentication & Authorization
- API Monitoring & Logging
- Interactive Dashboard with `chart.js`

## 📂 Project Structure
```
SentinelAPI/
├── backend/               # Backend for API processing
├── frontend/              # Frontend using React + Vite
│   ├── src/
│   │   ├── components/    # UI Components
│   │   ├── pages/         # Application Pages
│   │   ├── utils/         # Helper functions
│   ├── public/            # Static files
│   ├── package.json       # Frontend dependencies
├── README.md              # Documentation
```

## 🛠 Installation
### Backend Setup
```sh
cd backend
pip install -r requirements.txt
python app.py
```

### Frontend Setup
```sh
cd frontend
npm install
npm run dev
```

## 📊 API Metrics Component (APIMetrics.jsx)
This component displays API metrics using `chart.js`.

```jsx
import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from "chart.js";

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
```

## 🔥 Troubleshooting
If you encounter issues, try the following:
- **Clear npm cache:** `npm cache clean --force`
- **Reinstall dependencies:** `rm -rf node_modules package-lock.json && npm install`
- **Restart Vite server:** `npm run dev`

## 📜 License
MIT License

## ✨ Contributors
- [ARSH VERMA] - Developer
- Open for Contributions 🚀


