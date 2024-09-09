import React from 'react'
import ApexCharts from 'react-apexcharts'
import { ChartContainer } from './styles'

interface DoctorSpecialtiesChartProps {
  data: { specialty: string; numberOfDoctors: number }[]
}

export const DoctorSpecialtiesChart: React.FC<DoctorSpecialtiesChartProps> = ({
  data,
}) => {
  const options: ApexCharts.ApexOptions = {
    series: [
      {
        name: 'Nombre de médecins par spécialité',
        data: data.map((spec) => spec.numberOfDoctors),
      },
    ],
    chart: {
      type: 'bar',
      height: 350,
    },
    plotOptions: {
      bar: {
        horizontal: true,
        dataLabels: {
          position: 'top',
        },
      },
    },
    colors: ['#6207ac'],
    dataLabels: {
      enabled: true,
      offsetX: -6,
      style: {
        fontSize: '12px',
        colors: ['#fff'],
      },
    },
    stroke: {
      show: true,
      width: 1,
      colors: ['#fff'],
    },
    xaxis: {
      categories: data.map((spec) => spec.specialty),
    },
  }

  return (
    <ChartContainer>
      <h3 aria-label="Graphique des médecins par spécialité">
        Médecins par spécialité
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
