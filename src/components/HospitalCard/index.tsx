import { useNavigate } from 'react-router-dom'
import { HospitalCardContainer } from './styles'

interface HospitalCardProps {
  name: string
}

export function HospitalCard({ name }: HospitalCardProps) {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate(`/hospital/${name}`)
  }

  return (
    <HospitalCardContainer>
      <button
        className="hospital-card"
        onClick={handleClick}
        aria-label={`Voir les détails de l'hôpital ${name}`}
      >
        <h2>{name}</h2>
      </button>
    </HospitalCardContainer>
  )
}
