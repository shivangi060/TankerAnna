import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const MultibarChart = () => {
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'This Week',
        data: [65, 59, 80, 81, 56, 55,67],
        backgroundColor: '#FAFAFA',
      },
      {
        label: 'Last Week',
        data: [45, 69, 60, 91, 76, 65,87],
        backgroundColor: '#6FCCDD',
      },
    ],
  };

  const options = {
    responsive: true,
    borderRadius: 7,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Weekly Comparison',
      },
    },
  };

  return <Bar data={data} options={options}  style={{width:'100%'}}/>;
};

export default MultibarChart;
