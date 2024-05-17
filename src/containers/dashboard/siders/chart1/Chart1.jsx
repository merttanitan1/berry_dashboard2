import React, { useState, useEffect, useRef } from "react";
import ReactApexChart from "react-apexcharts";

function Chart1Content() {
  const [chartData, setChartData] = useState(null);
  const chartRef = useRef(null);

  useEffect(() => {
    setChartData({
      series: [
        {
          name: "Veri 1",
          data: [30, 40, 45, 50, 49, 60, 70, 91, 125]
        },
        {
          name: "Veri 2",
          data: [15, 20, 25, 30, 35, 40, 45, 50, 55]
        }
      ],
      options: {
        chart: {
          type: 'line',
          height: 350
        },
        title: {
          text: 'Apex Chart Veri Örneği',
          align: 'left'
        },
        xaxis: {
          categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep']
        }
      }
    });
  }, []);

  useEffect(() => {
    if (chartRef.current) {
      chartRef.current.chart.updateOptions({});
    }
  }, [chartRef]);

  return (
    <div>
      <h2>Chart 1 Content</h2>
      {chartData && <ReactApexChart ref={chartRef} options={chartData.options} series={chartData.series} type="line" height={350} />}
    </div>
  );
}

export default Chart1Content;

/*
useEffect(() => {
  fetch('./db.json')
    .then(response => response.json())
    .then(data => {
      setChartData({
        series: data.series,
        options: {
          chart: {
            type: 'spline',
            height: 350
          },
          title: {
            text: 'My First Apex Chart',
            align: 'left'
          },
          xaxis: {
            categories: data.categories
          }
        }
      });
    });
}, []);
*/