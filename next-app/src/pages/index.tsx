import React, { MouseEvent, useRef } from 'react'
import type { InteractionItem } from 'chart.js'
import {
  Chart as ChartJS,
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
} from 'chart.js'
import { Chart, getDatasetAtEvent, getElementAtEvent, getElementsAtEvent } from 'react-chartjs-2'

import { faker } from '@faker-js/faker'
import { Flex } from '@chakra-ui/react'

export default function Home() {
  ChartJS.register(
    LinearScale,
    CategoryScale,
    BarElement,
    PointElement,
    LineElement,
    Legend,
    Tooltip,
  )

  const options = {
    indexAxis: 'y' as const,

    responsive: true,
    plugins: {
      legend: {
        position: 'right' as const,
      },
      title: {
        display: true,
        text: 'Valuation',
      },
    },
    scales: {
      x: {
        min: 10000000,
        max: 15000000,
      },
    },
  }
  const labels = ['Valuation']
  const data = {
    labels,
    datasets: [
      {
        type: 'line' as const,
        label: 'Average',
        borderColor: 'rgb(255, 99, 132)',
        borderWidth: 2,
        fill: false,
        data: [11800000, 11800000],
      },
      {
        type: 'bar' as const,
        label: 'Market',
        backgroundColor: 'rgba(1, 125, 81, 0.60)',
        data: [[10700000, 13400000]],
      },
      {
        type: 'bar' as const,
        label: 'Cap Earnings',
        backgroundColor: 'rgba(1, 125, 81, 0.60)',
        data: [[11500000, 13600000]],
      },
    ],
  }
  const printDatasetAtEvent = (dataset: InteractionItem[]) => {
    if (!dataset.length) return

    const datasetIndex = dataset[0].datasetIndex

    console.log(data.datasets[datasetIndex].label)
  }

  const printElementAtEvent = (element: InteractionItem[]) => {
    if (!element.length) return

    const { datasetIndex, index } = element[0]

    console.log(data.labels[index], data.datasets[datasetIndex].data[index])
  }

  const printElementsAtEvent = (elements: InteractionItem[]) => {
    if (!elements.length) return

    console.log(elements.length)
  }

  const chartRef = useRef<ChartJS>(null)

  const onClick = (event: MouseEvent<HTMLCanvasElement>) => {
    const { current: chart } = chartRef

    if (!chart) {
      return
    }

    printDatasetAtEvent(getDatasetAtEvent(chart, event))
    printElementAtEvent(getElementAtEvent(chart, event))
    printElementsAtEvent(getElementsAtEvent(chart, event))
  }
  return (
    <>
      <Flex backgroundColor={'greyscale.grey-900'} flexDir={'column'} w={'100vw'}>
        <Flex boxSize="75rem">
          <Chart ref={chartRef} type="bar" onClick={onClick} options={options} data={data} />
        </Flex>
      </Flex>
    </>
  )
}
