import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  SidebarContainer,
  SidebarContent,
  HamburgerMenu,
  Overlay,
} from './styles'
import { useHospitalData } from '../../context/dataContext'

export function Sidebar() {
  const { filters, setFilters, hospitals } = useHospitalData()
  const [isOpen, setIsOpen] = useState(false)

  const navigate = useNavigate()

  const toggleSidebar = () => {
    setIsOpen(!isOpen)
  }

  const applyFilters = () => {
    setFilters({
      hospitalName: filters.hospitalName,
      specialty: filters.specialty,
      startDate: filters.startDate,
      endDate: filters.endDate,
    })
    if (filters.hospitalName !== 'all') {
      navigate(`/hospital/${filters.hospitalName}`)
    }
    toggleSidebar()
  }

  const clearFilters = () => {
    setFilters({
      hospitalName: 'all',
      specialty: 'all',
      startDate: '',
      endDate: '',
    })
  }

  const uniqueHospitals = Array.from(
    new Set(hospitals.map((hospital) => hospital.name)),
  )

  return (
    <>
      <HamburgerMenu
        $isOpen={isOpen}
        onClick={toggleSidebar}
        aria-label={isOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
        aria-controls="sidebar"
        aria-expanded={isOpen}
      >
        ☰
      </HamburgerMenu>
      <Overlay
        $isOpen={isOpen}
        onClick={toggleSidebar}
        aria-hidden={!isOpen}
        tabIndex={isOpen ? 0 : -1}
      />
      <SidebarContainer
        $isOpen={isOpen}
        id="sidebar"
        role="dialog"
        aria-labelledby="sidebar-title"
      >
        <SidebarContent>
          <h3 id="sidebar-title">Filtres</h3>

          <div className="filter-group">
            <label htmlFor="hospitalName">Nom de l&apos;hôpital :</label>
            <select
              id="hospitalName"
              value={filters.hospitalName}
              onChange={(e) =>
                setFilters({ ...filters, hospitalName: e.target.value })
              }
              aria-label="Filtrer par nom de l'hôpital"
            >
              <option value="all">Tous</option>
              {uniqueHospitals.map((name) => (
                <option key={name} value={name}>
                  {name}
                </option>
              ))}
            </select>
          </div>

          <div className="filter-group">
            <label htmlFor="specialty">Spécialité:</label>
            <select
              id="specialty"
              value={filters.specialty}
              onChange={(e) =>
                setFilters({ ...filters, specialty: e.target.value })
              }
              aria-label="Filtrer par spécialité"
            >
              <option value="all">Tous</option>
              <option value="Cardiologie">Cardiologie</option>
              <option value="Neurologie">Neurologie</option>
              <option value="Oncologie">Oncologie</option>
              <option value="Pédiatrie">Pédiatrie</option>
              <option value="Médecine Générale">Médecine Générale</option>
            </select>
          </div>

          <div className="filter-group">
            <label htmlFor="startDate">
              Période d&apos;hospitalisation (début):
            </label>
            <input
              type="month"
              id="startDate"
              min="2023-01"
              max="2024-12"
              value={filters.startDate}
              onChange={(e) =>
                setFilters({ ...filters, startDate: e.target.value })
              }
              aria-label="Filtrer par date de début"
            />
          </div>

          <div className="filter-group">
            <label htmlFor="endDate">
              Période d&apos;hospitalisation (Fin):
            </label>
            <input
              type="month"
              id="endDate"
              min="2023-01"
              max="2024-12"
              value={filters.endDate}
              onChange={(e) =>
                setFilters({ ...filters, endDate: e.target.value })
              }
              aria-label="Filtrer par date de fin"
            />
          </div>

          <div>
            <button onClick={applyFilters} aria-label="Appliquer les filtres">
              Appliquer des filtres
            </button>
            <button
              onClick={clearFilters}
              style={{ marginLeft: '10px' }}
              aria-label="Effacer les filtres"
            >
              Effacer les filtres
            </button>
          </div>
        </SidebarContent>
      </SidebarContainer>
    </>
  )
}
