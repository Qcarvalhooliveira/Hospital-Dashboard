import {
  createContext,
  useState,
  useEffect,
  ReactNode,
  useContext,
} from 'react'

interface Filters {
  hospitalName: string
  specialty: string
  startDate: string
  endDate: string
}

interface HospitalData {
  name: string
  location: string
  overview: {
    totalPatients: number
    satisfactionRate: string
    totalTreatments: number
    numberOfDoctors: number
    numberOfNurses: number
  }
  monthlyHospitalizations: Array<{ month: string; year: number; value: number }>
  doctorSpecialties: Array<{
    specialty: string
    numberOfDoctors: number
    satisfactionRate: string
  }>
  clinicalTrials: Array<{
    name: string
    status: string
    startDate: string
    endDate: string
    totalPatients: number
  }>
  hospitalDepartments: Array<{
    department: string
    patientsPerDay: number
    averageWaitTime: string
  }>
}

interface DataContextType {
  hospitals: HospitalData[]
  filters: Filters
  setFilters: (filters: Filters) => void
  getFilteredHospitals: () => HospitalData[]
}

const hospitalData: HospitalData[] = [
  {
    name: 'Hôpital Saint-Jean',
    location: 'Paris, France',
    overview: {
      totalPatients: 12345,
      satisfactionRate: '89%',
      totalTreatments: 8765,
      numberOfDoctors: 150,
      numberOfNurses: 300,
    },
    monthlyHospitalizations: [
      { month: 'Jan', year: 2023, value: 1500 },
      { month: 'Feb', year: 2023, value: 1600 },
      { month: 'Mar', year: 2023, value: 1700 },
      { month: 'Apr', year: 2023, value: 1800 },
      { month: 'May', year: 2023, value: 1900 },
      { month: 'Jun', year: 2023, value: 2000 },
      { month: 'Jul', year: 2023, value: 2100 },
      { month: 'Aug', year: 2023, value: 2200 },
      { month: 'Sep', year: 2023, value: 2300 },
      { month: 'Oct', year: 2023, value: 2400 },
      { month: 'Nov', year: 2023, value: 2500 },
      { month: 'Dec', year: 2023, value: 2600 },
      { month: 'Jan', year: 2024, value: 1500 },
      { month: 'Feb', year: 2024, value: 1600 },
      { month: 'Mar', year: 2024, value: 1700 },
      { month: 'Apr', year: 2024, value: 1800 },
      { month: 'May', year: 2024, value: 1900 },
      { month: 'Jun', year: 2024, value: 2000 },
      { month: 'Jul', year: 2024, value: 2100 },
      { month: 'Aug', year: 2024, value: 2200 },
    ],
    doctorSpecialties: [
      {
        specialty: 'Cardiologie',
        numberOfDoctors: 120,
        satisfactionRate: '89%',
      },
      {
        specialty: 'Neurologie',
        numberOfDoctors: 80,
        satisfactionRate: '80%',
      },
      {
        specialty: 'Oncologie',
        numberOfDoctors: 60,
        satisfactionRate: '70%',
      },
      {
        specialty: 'Pédiatrie',
        numberOfDoctors: 90,
        satisfactionRate: '60%',
      },
      {
        specialty: 'Médecine Générale',
        numberOfDoctors: 150,
        satisfactionRate: '90%',
      },
    ],
    clinicalTrials: [
      {
        name: 'Trial 1',
        status: 'En cours',
        startDate: '2023-01-01',
        endDate: '2025-06-30',
        totalPatients: 234,
      },
      {
        name: 'Trial 2',
        status: 'Terminé',
        startDate: '2023-01-01',
        endDate: '2023-06-30',
        totalPatients: 349,
      },
      {
        name: 'Trial 3',
        status: 'Terminé',
        startDate: '2023-01-01',
        endDate: '2023-06-30',
        totalPatients: 1289,
      },
      {
        name: 'Trial 4',
        status: 'En cours',
        startDate: '2023-01-01',
        endDate: '2024-12-30',
        totalPatients: 978,
      },
    ],
    hospitalDepartments: [
      {
        department: 'Urgences',
        patientsPerDay: 150,
        averageWaitTime: '45 min',
      },
      {
        department: 'Cardiologie',
        patientsPerDay: 80,
        averageWaitTime: '30 min',
      },
      {
        department: 'Neurologie',
        patientsPerDay: 60,
        averageWaitTime: '35 min',
      },
    ],
  },
  {
    name: 'Hôpital Lumière',
    location: 'Lyon, France',
    overview: {
      totalPatients: 9800,
      satisfactionRate: '85%',
      totalTreatments: 7400,
      numberOfDoctors: 130,
      numberOfNurses: 250,
    },
    monthlyHospitalizations: [
      { month: 'Jan', year: 2023, value: 1200 },
      { month: 'Feb', year: 2023, value: 1300 },
      { month: 'Mar', year: 2023, value: 1400 },
      { month: 'Apr', year: 2023, value: 1500 },
      { month: 'May', year: 2023, value: 1600 },
      { month: 'Jun', year: 2023, value: 1700 },
      { month: 'Jul', year: 2023, value: 1800 },
      { month: 'Aug', year: 2023, value: 1900 },
      { month: 'Sep', year: 2023, value: 2000 },
      { month: 'Oct', year: 2023, value: 2100 },
      { month: 'Nov', year: 2023, value: 2200 },
      { month: 'Dec', year: 2023, value: 2300 },
      { month: 'Jan', year: 2024, value: 1200 },
      { month: 'Feb', year: 2024, value: 1300 },
      { month: 'Mar', year: 2024, value: 1400 },
      { month: 'Apr', year: 2024, value: 1500 },
      { month: 'May', year: 2024, value: 1600 },
      { month: 'Jun', year: 2024, value: 1700 },
      { month: 'Jul', year: 2024, value: 1800 },
      { month: 'Aug', year: 2024, value: 1900 },
    ],
    doctorSpecialties: [
      {
        specialty: 'Cardiologie',
        numberOfDoctors: 110,
        satisfactionRate: '87%',
      },
      {
        specialty: 'Neurologie',
        numberOfDoctors: 75,
        satisfactionRate: '78%',
      },
      {
        specialty: 'Oncologie',
        numberOfDoctors: 65,
        satisfactionRate: '72%',
      },
      {
        specialty: 'Pédiatrie',
        numberOfDoctors: 85,
        satisfactionRate: '63%',
      },
      {
        specialty: 'Médecine Générale',
        numberOfDoctors: 140,
        satisfactionRate: '88%',
      },
    ],
    clinicalTrials: [
      {
        name: 'Trial A',
        status: 'En cours',
        startDate: '2023-02-01',
        endDate: '2025-01-31',
        totalPatients: 250,
      },
      {
        name: 'Trial B',
        status: 'Terminé',
        startDate: '2023-02-01',
        endDate: '2023-07-31',
        totalPatients: 360,
      },
      {
        name: 'Trial C',
        status: 'Terminé',
        startDate: '2023-02-01',
        endDate: '2023-07-31',
        totalPatients: 1300,
      },
      {
        name: 'Trial D',
        status: 'En cours',
        startDate: '2023-02-01',
        endDate: '2024-11-30',
        totalPatients: 990,
      },
    ],
    hospitalDepartments: [
      {
        department: 'Urgences',
        patientsPerDay: 140,
        averageWaitTime: '50 min',
      },
      {
        department: 'Cardiologie',
        patientsPerDay: 75,
        averageWaitTime: '25 min',
      },
      {
        department: 'Neurologie',
        patientsPerDay: 55,
        averageWaitTime: '40 min',
      },
    ],
  },
  {
    name: 'Hôpital du Midi',
    location: 'Marseille, France',
    overview: {
      totalPatients: 11500,
      satisfactionRate: '90%',
      totalTreatments: 8000,
      numberOfDoctors: 140,
      numberOfNurses: 280,
    },
    monthlyHospitalizations: [
      { month: 'Jan', year: 2023, value: 1400 },
      { month: 'Feb', year: 2023, value: 1500 },
      { month: 'Mar', year: 2023, value: 1600 },
      { month: 'Apr', year: 2023, value: 1700 },
      { month: 'May', year: 2023, value: 1800 },
      { month: 'Jun', year: 2023, value: 1900 },
      { month: 'Jul', year: 2023, value: 2000 },
      { month: 'Aug', year: 2023, value: 2100 },
      { month: 'Sep', year: 2023, value: 2200 },
      { month: 'Oct', year: 2023, value: 2300 },
      { month: 'Nov', year: 2023, value: 2400 },
      { month: 'Dec', year: 2023, value: 2500 },
      { month: 'Jan', year: 2024, value: 1400 },
      { month: 'Feb', year: 2024, value: 1500 },
      { month: 'Mar', year: 2024, value: 1600 },
      { month: 'Apr', year: 2024, value: 1700 },
      { month: 'May', year: 2024, value: 1800 },
      { month: 'Jun', year: 2024, value: 1900 },
      { month: 'Jul', year: 2024, value: 2000 },
      { month: 'Aug', year: 2024, value: 2100 },
    ],
    doctorSpecialties: [
      {
        specialty: 'Cardiologie',
        numberOfDoctors: 115,
        satisfactionRate: '86%',
      },
      {
        specialty: 'Neurologie',
        numberOfDoctors: 85,
        satisfactionRate: '82%',
      },
      {
        specialty: 'Oncologie',
        numberOfDoctors: 70,
        satisfactionRate: '75%',
      },
      {
        specialty: 'Pédiatrie',
        numberOfDoctors: 95,
        satisfactionRate: '65%',
      },
      {
        specialty: 'Médecine Générale',
        numberOfDoctors: 145,
        satisfactionRate: '92%',
      },
    ],
    clinicalTrials: [
      {
        name: 'Trial X',
        status: 'En cours',
        startDate: '2023-03-01',
        endDate: '2025-02-28',
        totalPatients: 270,
      },
      {
        name: 'Trial Y',
        status: 'Terminé',
        startDate: '2023-03-01',
        endDate: '2023-08-31',
        totalPatients: 370,
      },
      {
        name: 'Trial Z',
        status: 'Terminé',
        startDate: '2023-03-01',
        endDate: '2023-08-31',
        totalPatients: 1320,
      },
      {
        name: 'Trial W',
        status: 'En cours',
        startDate: '2023-03-01',
        endDate: '2024-10-31',
        totalPatients: 1000,
      },
    ],
    hospitalDepartments: [
      {
        department: 'Urgences',
        patientsPerDay: 160,
        averageWaitTime: '40 min',
      },
      {
        department: 'Cardiologie',
        patientsPerDay: 85,
        averageWaitTime: '28 min',
      },
      {
        department: 'Neurologie',
        patientsPerDay: 65,
        averageWaitTime: '32 min',
      },
    ],
  },
  {
    name: 'Hôpital du Nord',
    location: 'Lille, France',
    overview: {
      totalPatients: 10200,
      satisfactionRate: '87%',
      totalTreatments: 6700,
      numberOfDoctors: 125,
      numberOfNurses: 270,
    },
    monthlyHospitalizations: [
      { month: 'Jan', year: 2023, value: 1300 },
      { month: 'Feb', year: 2023, value: 1400 },
      { month: 'Mar', year: 2023, value: 1500 },
      { month: 'Apr', year: 2023, value: 1600 },
      { month: 'May', year: 2023, value: 1700 },
      { month: 'Jun', year: 2023, value: 1800 },
      { month: 'Jul', year: 2023, value: 1900 },
      { month: 'Aug', year: 2023, value: 2000 },
      { month: 'Sep', year: 2023, value: 2100 },
      { month: 'Oct', year: 2023, value: 2200 },
      { month: 'Nov', year: 2023, value: 2300 },
      { month: 'Dec', year: 2023, value: 2400 },
      { month: 'Jan', year: 2024, value: 1300 },
      { month: 'Feb', year: 2024, value: 1400 },
      { month: 'Mar', year: 2024, value: 1500 },
      { month: 'Apr', year: 2024, value: 1600 },
      { month: 'May', year: 2024, value: 1700 },
      { month: 'Jun', year: 2024, value: 1800 },
      { month: 'Jul', year: 2024, value: 1900 },
      { month: 'Aug', year: 2024, value: 2000 },
    ],
    doctorSpecialties: [
      {
        specialty: 'Cardiologie',
        numberOfDoctors: 100,
        satisfactionRate: '84%',
      },
      {
        specialty: 'Neurologie',
        numberOfDoctors: 70,
        satisfactionRate: '77%',
      },
      {
        specialty: 'Oncologie',
        numberOfDoctors: 55,
        satisfactionRate: '71%',
      },
      {
        specialty: 'Pédiatrie',
        numberOfDoctors: 80,
        satisfactionRate: '62%',
      },
      {
        specialty: 'Médecine Générale',
        numberOfDoctors: 130,
        satisfactionRate: '88%',
      },
    ],
    clinicalTrials: [
      {
        name: 'Trial M',
        status: 'En cours',
        startDate: '2023-04-01',
        endDate: '2025-03-31',
        totalPatients: 280,
      },
      {
        name: 'Trial N',
        status: 'Terminé',
        startDate: '2023-04-01',
        endDate: '2023-09-30',
        totalPatients: 380,
      },
      {
        name: 'Trial O',
        status: 'Terminé',
        startDate: '2023-04-01',
        endDate: '2023-09-30',
        totalPatients: 1350,
      },
      {
        name: 'Trial P',
        status: 'En cours',
        startDate: '2023-04-01',
        endDate: '2024-09-30',
        totalPatients: 1010,
      },
    ],
    hospitalDepartments: [
      {
        department: 'Urgences',
        patientsPerDay: 155,
        averageWaitTime: '42 min',
      },
      {
        department: 'Cardiologie',
        patientsPerDay: 80,
        averageWaitTime: '33 min',
      },
      {
        department: 'Neurologie',
        patientsPerDay: 60,
        averageWaitTime: '38 min',
      },
    ],
  },
]

const DataContext = createContext<DataContextType | undefined>(undefined)

export const DataProvider = ({ children }: { children: ReactNode }) => {
  const [data, setData] = useState<HospitalData[]>([])
  const [filters, setFilters] = useState<Filters>({
    hospitalName: 'all',
    specialty: 'all',
    startDate: '',
    endDate: '',
  })

  useEffect(() => {
    setData(hospitalData)
  }, [])

  const getFilteredHospitals = (): HospitalData[] => {
    return data
      .filter(
        (hospital) =>
          filters.hospitalName === 'all' ||
          hospital.name === filters.hospitalName,
      )
      .map((hospital) => ({
        ...hospital,
        monthlyHospitalizations: hospital.monthlyHospitalizations.filter(
          (entry) => {
            const entryDate = new Date(
              `${entry.year}-${entry.month}-01`,
            ).getTime()
            const startDate = filters.startDate
              ? new Date(`${filters.startDate}-01`).getTime()
              : null
            const endDate = filters.endDate
              ? new Date(`${filters.endDate}-01`).getTime()
              : null
            return (
              (!startDate || entryDate >= startDate) &&
              (!endDate || entryDate <= endDate)
            )
          },
        ),
        doctorSpecialties:
          filters.specialty === 'all'
            ? hospital.doctorSpecialties
            : hospital.doctorSpecialties.filter(
                (spec) => spec.specialty === filters.specialty,
              ),
      }))
  }

  return (
    <DataContext.Provider
      value={{ hospitals: data, filters, setFilters, getFilteredHospitals }}
    >
      {children}
    </DataContext.Provider>
  )
}

export const useHospitalData = () => {
  const context = useContext(DataContext)
  if (context === undefined) {
    throw new Error('useHospitalData must be used within a DataProvider')
  }
  return context
}
