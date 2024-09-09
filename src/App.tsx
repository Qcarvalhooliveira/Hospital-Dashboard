import { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { HomePage } from './components/HomePage'
import { HospitalPage } from './components/HospitalPage'
import { Sidebar } from './components/Sidebar'
import { GlobalStyle } from './styles/GlobalStyle'
import { DataProvider } from './context/dataContext'

export function App() {
  useEffect(() => {
    const mainContent = document.querySelector('main')
    if (mainContent) {
      mainContent.focus()
    }
  }, [])

  return (
    <>
      <GlobalStyle />
      <DataProvider>
        <Router basename="/Hospital-Dashboard">
          <div className="app-container">
            <nav aria-label="Barre latérale avec filtres">
              <Sidebar />
            </nav>
            <main tabIndex={-1} aria-live="polite">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route
                  path="/hospital/:hospitalName"
                  element={<HospitalPage />}
                />
              </Routes>
            </main>
          </div>
        </Router>
      </DataProvider>
    </>
  )
}
