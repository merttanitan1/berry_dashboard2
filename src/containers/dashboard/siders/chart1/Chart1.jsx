import React, { useState, useEffect, useRef } from "react";
import ReactApexChart from "react-apexcharts";

function Chart1Content() {
  /*const datajs = fetch("./db.json")
    .then(response => response.json())
    .then(data => {
      console.log(data);
    })
    .catch(error => console.error('Error:', error));*/
  const [chartData, setChartData] = useState(null);
  const chartRef = useRef(null);

  useEffect(() => {
    fetch("./db.json")
      .then(response => response.json())
      .then (data => {
        console.log(data);
        setChartData({
          series: data.series,
          options: {
            chart: {
              type: 'bar',
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
      })
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