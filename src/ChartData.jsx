import React, { MouseEvent, useRef } from 'react';
import { InteractionItem } from 'chart.js';
import {
  Chart as ChartJS,
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
} from 'chart.js';
import {
  Chart,
  getDatasetAtEvent,
  getElementAtEvent,
  getElementsAtEvent,
} from 'react-chartjs-2';
import faker from 'faker';

ChartJS.register(
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip
);

export const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'top',
      labels: {
        color: '#ffffff',
      },
    },
    title: {
      display: true,
      text: 'License Usage',
      color: '#ffffff',
    },
  },
  scales: {
    yAxes: {
      ticks: {
        color: '#ffffff',
      },
    },
    xAxes: {
      ticks: {
        color: '#ffffff',
      },
    },
  },
};

const labels = ['April', 'May', 'June', 'July'];

export const data = {
  labels,
  datasets: [
    {
      type: 'line',
      label: 'Dataset 1',
      borderColor: 'rgb(255, 99, 132)',
      borderWidth: 2,
      fill: false,
      data: labels.map(() => faker.datatype.number({ min: -10, max: 100 })),
    },
    {
      type: 'bar',
      label: 'Dataset 2',
      backgroundColor: 'rgb(75, 192, 192)',
      data: labels.map(() => faker.datatype.number({ min: -100, max: 100 })),
      borderColor: 'white',
      borderWidth: 2,
    },
  ],
};

export function ChartData() {
  const printDatasetAtEvent = (dataset) => {
    if (!dataset.length) return;

    const datasetIndex = dataset[0].datasetIndex;

    console.log(data.datasets[datasetIndex].label);
  };

  const printElementAtEvent = (element) => {
    if (!element.length) return;

    const { datasetIndex, index } = element[0];

    console.log(data.labels[index], data.datasets[datasetIndex].data[index]);
  };

  const printElementsAtEvent = (elements) => {
    if (!elements.length) return;

    console.log(elements.length);
  };

  const chartRef = useRef(null);

  const onClick = (event) => {
    const { current: chart } = chartRef;

    if (!chart) {
      return;
    }

    printDatasetAtEvent(getDatasetAtEvent(chart, event));
    printElementAtEvent(getElementAtEvent(chart, event));
    printElementsAtEvent(getElementsAtEvent(chart, event));
  };

  return (
    <Chart
      ref={chartRef}
      type="bar"
      onClick={onClick}
      options={options}
      data={data}
    />
  );
}
