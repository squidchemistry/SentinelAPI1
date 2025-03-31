# SentinelAPI Frontend

## 📌 Overview
This is the frontend for SentinelAPI, which visualizes API metrics using **React** and **Chart.js**. The project uses **Vite** for fast development and **React Chart.js 2** for data visualization.

---

## 🚀 Features
- 📊 **API Metrics Dashboard**: Displays API request trends using a **Line Chart**.
- ⚡ **Built with Vite**: Fast and optimized development experience.
- 🎨 **Styled with CSS/Tailwind** (optional customization available).
- 📈 **Interactive Charts**: Uses **Chart.js** for smooth data visualization.

---

## 🛠️ Installation

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/yourusername/SentinelAPI-Frontend.git
cd SentinelAPI-Frontend
```

### 2️⃣ Install Dependencies
```bash
npm install
```

### 3️⃣ Start the Development Server
```bash
npm run dev
```

---

## 📁 Project Structure
```
SentinelAPI-Frontend/
│-- src/
│   │-- components/
│   │   │-- APIMetrics.jsx  # Line chart visualization of API requests
│   │-- App.jsx  # Main application component
│   │-- main.jsx  # React entry point
│-- public/  # Static assets
│-- index.html  # Root HTML file
│-- package.json  # Project dependencies
│-- README.md  # Documentation
```

---

## 🎨 Using Chart.js in React

### ✅ Import Chart.js Components
In `APIMetrics.jsx`, ensure you import **only once**:
```jsx
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
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);
```

### 📊 Example Chart Data
```jsx
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
```

---

## ❌ Common Errors & Fixes

### 1️⃣ **`Identifier 'ChartJS' has already been declared`**
**Solution:** Ensure `ChartJS` is only imported once in the entire project.

### 2️⃣ **`Line is not defined` error**
**Solution:** Make sure you import `Line` from `react-chartjs-2`:
```jsx
import { Line } from "react-chartjs-2";
```

---

## 📜 License
This project is licensed under the **MIT License**.

---

## 🤝 Contributing
Feel free to fork the repository and submit pull requests! 🚀

---

## 📧 Contact
For any questions, reach out at **arshvermaimm@gmail.com** or open an issue.

Happy coding! 🎉

