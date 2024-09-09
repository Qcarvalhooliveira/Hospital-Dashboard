import { Link, useParams } from 'react-router-dom'
import { useHospitalData } from '../../context/dataContext'
import { HospitalContainer, KPIContainer, ChartSection } from './styles'
import { SlActionUndo } from 'react-icons/sl'
import { MonthlyHospitalizationsChart } from '../Charts/MonthlyHospitalizationsChart/index'
import { DoctorSpecialtiesChart } from '../Charts/DoctorSpecialtiesChart/index'

export function HospitalPage() {
  const { hospitalName } = useParams<{ hospitalName: string }>()

  const { getFilteredHospitals } = useHospitalData()

  if (!hospitalName) {
    return (
      <p role="alert" aria-live="assertive">
        Hôpital introuvable
      </p>
    )
  }

  const filteredHospitals = getFilteredHospitals()
  const hospital = filteredHospitals.find((h) => h.name === hospitalName)

  if (!hospital) {
    return (
      <p role="alert" aria-live="assertive">
        Hôpital introuvable
      </p>
    )
  }

  return (
    <HospitalContainer>
      <Link className="link" to="/" aria-label="Retour à la page d'accueil">
        <SlActionUndo />
      </Link>

      <h1>{hospital.name}</h1>
      <KPIContainer>
        <div aria-label="Nombre total de patients" className="kpi">
          <h3>Nombre total de patients</h3>
          <p aria-live="polite">{hospital.overview.totalPatients}</p>
        </div>
        <div aria-label="Taux de satisfaction" className="kpi">
          <h3>Taux de satisfaction</h3>
          <p aria-live="polite">{hospital.overview.satisfactionRate}</p>
        </div>
        <div aria-label="Taux de satisfaction" className="kpi">
          <h3>Traitements totaux</h3>
          <p aria-live="polite">{hospital.overview.totalTreatments}</p>
        </div>
        <div aria-label="Nombre de médecins" className="kpi">
          <h3>Nombre de médecins</h3>
          <p aria-live="polite">{hospital.overview.numberOfDoctors}</p>
        </div>
        <div aria-label="Nombre d'infirmières" className="kpi">
          <h3>Nombre d&apos;infirmières</h3>
          <p aria-live="polite">{hospital.overview.numberOfNurses}</p>
        </div>
      </KPIContainer>

      <ChartSection>
        <MonthlyHospitalizationsChart data={hospital.monthlyHospitalizations} />
        <DoctorSpecialtiesChart data={hospital.doctorSpecialties} />
      </ChartSection>
    </HospitalContainer>
  )
}
