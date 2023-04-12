import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import ChartJS, {
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js/auto";
import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const MyChart = () => {
  const [data, setData] = useState({
    labels: [],
    datasets: [
      {
        label: "Array Size",
        data: [],
        fill: "start",
        backgroundColor: "rgba(255, 0, 0,0.4)",
        borderColor: "rgba(75,192,192,1)",
        borderWidth: 1,
      },
    ],
  });

  const [selectedDate, setSelectedDate] = useState("2023/04/11");

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/api/reedApi", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ dates: selectedDate }),
      });
      const jsonData = await response.json();
      const dataArray = jsonData.data;

      if (dataArray && dataArray[0] && dataArray[0]["arraySize"]) {
        let start = 1;
        let max = parseInt(dataArray[0]["arraySize"]);
        let arr = [];
        for (let i = 0; i < 24; i++) {
          let val = start + (i * (max - start)) / 23;
          arr.push(val);
        }

        setData((prevData) => ({
          ...prevData,
          labels: Array.from({ length: 24 }, (_, i) => `${i < 10 ? "0" + i : i}:00`),
          datasets: [
            {
              ...prevData.datasets[0],
              data: arr,
            },
          ],
        }));
      } else {
        // Veri gelmediğinde grafiği sıfırla
        setData((prevData) => ({
          ...prevData,
          labels: Array.from({ length: 24 }, (_, i) => `${i < 10 ? "0" + i : i}:00`),
          datasets: [
            {
              ...prevData.datasets[0],
              data: Array(24).fill(0),
            },
          ],
        }));
      }
    };

    fetchData();
  }, [selectedDate]);

  const handleDateChange = (e) => {
    const selectedDate = e.target.value;
    const formattedDate = selectedDate.replace(/-/g, "/");

    setSelectedDate(formattedDate);
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
        min: 0,
      },
    },
  };

  return (
    <Card>
      <CardContent>
        <Typography variant="h6" 
        gutterBottom>
          Website Visits
        </Typography>
        <TextField
          label="Select Date"
          type="date"
          value={selectedDate}
          onChange={handleDateChange}
          InputLabelProps={{
            shrink: true,
          }}
        />
        &nbsp;&nbsp;&nbsp;&nbsp;
        <TextField
          label="Total Value"
          value={data.datasets[0].data[23]}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <Line data={data} 
        options={options} 
        />
      </CardContent>
    </Card>
  );
};

export default MyChart;
