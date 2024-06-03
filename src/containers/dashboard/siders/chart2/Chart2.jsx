import React, { useState, useEffect, useRef } from "react";
import ReactApexChart from "react-apexcharts";
import './db.json';

function Chart2Content() {
  const [chartData, setChartData] = useState(null);
  const chartRef = useRef(null);

  useEffect(() => {
    fetch('./db.json')
      .then(response => {
        console.log(response);
        return response.text();
      })
      .then(data => {
        setChartData({
          series: data  === undefined ? [] : data.series,
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
              categories: data.categories
            }
          }
        });
        console.log(data);
      })
      .catch(error => console.error('Error:', error));
  }, []);

  useEffect(() => {
    if (chartRef.current) {
      chartRef.current.chart.updateOptions({});
    }
  }, [chartRef]);

  return (
    <div>
      <h2>Chart 2 Content</h2>
      {chartData && <ReactApexChart ref={chartRef} options={chartData.options} series={chartData.series} type="area" height={600} />}
    </div>
  );
}

export default Chart2Content;