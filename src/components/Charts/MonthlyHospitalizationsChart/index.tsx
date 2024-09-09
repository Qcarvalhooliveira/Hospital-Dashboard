import React from 'react'
import ApexCharts from 'react-apexcharts'
import { ChartContainer } from './styles'

interface MonthlyHospitalizationsChartProps {
  data: { month: string; year: string | number; value: number }[]
}

export const MonthlyHospitalizationsChart: React.FC<
  MonthlyHospitalizationsChartProps
> = ({ data }) => {
  const options: ApexCharts.ApexOptions = {
    series: [
      {
        name: "Nombre d'hospitalisations",
        data: data.map((entry) => entry.value),
      },
    ],
    chart: {
      type: 'bar',
      height: 350,
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '55%',
        borderRadius: 10,
      },
    },
    colors: ['#007bff'],
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: data.map((entry) => `${entry.month} ${entry.year}`),
    },
    yaxis: {
      title: {
        text: 'Hospitalisations',
      },
    },
    fill: {
      opacity: 1,
    },
    tooltip: {
      y: {
        formatter: function (val: number) {
          return val + ' hospitalisations'
        },
      },
    },
  }

  return (
    <ChartContainer>
      <h3 aria-label="Graphique des hospitalisations mensuelles">
        Hospitalisations mensuelles
      </h3>
      <ApexCharts
        options={options}
        series={options.series}
        type="bar"
        height={350}
      />
    </ChartContainer>
  )
}
