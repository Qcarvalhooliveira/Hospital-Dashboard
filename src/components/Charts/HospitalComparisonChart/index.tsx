import ApexCharts from 'react-apexcharts'
import { useHospitalData } from '../../../context/dataContext'
import {
  ChartContainer,
  Hospitalizations,
  Specialties,
  Satisfaction,
  KPIs,
  LeftContainer,
  RightContainer,
} from './styles'

export function HospitalComparisonChart() {
  const { hospitals, getFilteredHospitals } = useHospitalData()

  if (!hospitals || hospitals.length === 0) {
    return (
      <div role="alert" aria-live="polite">
        Chargement des données...
      </div>
    )
  }

  const filteredHospitals = getFilteredHospitals()

  const barOptions: ApexCharts.ApexOptions = {
    series: filteredHospitals.map((hospital) => ({
      name: hospital.name,
      data: hospital.monthlyHospitalizations.map((item) => item.value),
    })),
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
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent'],
    },
    xaxis: {
      categories: filteredHospitals[0]?.monthlyHospitalizations.map(
        (item) => item.month,
      ),
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
          return val + ' Hospitalisations'
        },
      },
    },
  }

  const groupedBarOptions: ApexCharts.ApexOptions = {
    series: filteredHospitals.map((hospital) => ({
      name: hospital.name,
      data: hospital.doctorSpecialties.map((spec) => spec.numberOfDoctors),
    })),
    chart: {
      type: 'bar',
      height: 430,
    },
    plotOptions: {
      bar: {
        horizontal: true,
        dataLabels: {
          position: 'top',
        },
      },
    },
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
    tooltip: {
      shared: true,
      intersect: false,
    },
    xaxis: {
      categories: filteredHospitals[0]?.doctorSpecialties.map(
        (spec) => spec.specialty,
      ),
    },
  }

  const donutOptions: ApexCharts.ApexOptions = {
    series: filteredHospitals.map((hospital) =>
      parseFloat(hospital.overview.satisfactionRate),
    ),
    chart: {
      type: 'donut',
    },
    plotOptions: {
      pie: {
        startAngle: -90,
        endAngle: 90,
        offsetY: 10,
      },
    },
    grid: {
      padding: {
        bottom: -80,
      },
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: 'bottom',
          },
        },
      },
    ],
    labels: hospitals.map((hospital) => hospital.name),
    legend: {
      position: 'bottom',
      horizontalAlign: 'center',
    },
  }

  const kpiData = hospitals.map((hospital) => ({
    hospital: hospital.name,
    numberOfDoctors: hospital.overview.numberOfDoctors,
    numberOfNurses: hospital.overview.numberOfNurses,
  }))

  return (
    <ChartContainer>
      <LeftContainer>
        <Hospitalizations>
          <div aria-label="Graphique montrant les hospitalisations mensuelles au cours des années 2023 et 2024">
            <h3>Hospitalisations mensuelles - 2023 et 2024</h3>
            <ApexCharts
              options={barOptions}
              series={barOptions.series}
              type="bar"
              height={350}
            />
          </div>
        </Hospitalizations>
        <Specialties>
          <div aria-label="Graphique montrant le nombre de médecins par spécialité">
            <h3>Nombre de médecins par spécialité</h3>
            <ApexCharts
              options={groupedBarOptions}
              series={groupedBarOptions.series}
              type="bar"
              height={430}
            />
          </div>
        </Specialties>
      </LeftContainer>
      <RightContainer>
        <KPIs aria-label="KPI hospitalier - Indicateur clé de performance">
          <h3>KPI hospitaliers</h3>
          <ul>
            {kpiData.map((kpi, index) => (
              <li key={index}>
                <strong>{kpi.hospital}</strong>
                <br />
                Médecins: {kpi.numberOfDoctors}
                <br />
                Infirmières: {kpi.numberOfNurses}
              </li>
            ))}
          </ul>
        </KPIs>
        <Satisfaction>
          <div aria-label="Graphique montrant les taux de satisfaction des hôpitaux">
            <h3>Taux de satisfaction des hôpitaux</h3>
            <ApexCharts
              options={donutOptions}
              series={donutOptions.series}
              type="donut"
              height={350}
            />
          </div>
        </Satisfaction>
      </RightContainer>
    </ChartContainer>
  )
}
