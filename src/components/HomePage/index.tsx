import { HospitalComparisonChart } from '../Charts/HospitalComparisonChart/index'
import { HospitalCard } from '../HospitalCard/index'
import { HomePageContainer } from './styles'

export function HomePage() {
  return (
    <HomePageContainer>
      <main>
        <h1 aria-label="Dashboard des performances hospitalières">
          Tableau de bord
        </h1>

        <section
          aria-labelledby="hospital-section"
          aria-label="Sélection des hôpitaux"
        >
          <div
            className="hospital-buttons"
            role="group"
            aria-label="Liste des hôpitaux"
          >
            <HospitalCard name="Hôpital Saint-Jean" />
            <HospitalCard name="Hôpital Lumière" />
            <HospitalCard name="Hôpital du Midi" />
            <HospitalCard name="Hôpital du Nord" />
          </div>
        </section>

        <section
          aria-labelledby="charts-section"
          aria-label="Graphiques de comparaison des performances hospitalières"
        >
          <div className="charts-container">
            <HospitalComparisonChart />
          </div>
        </section>
      </main>
    </HomePageContainer>
  )
}
