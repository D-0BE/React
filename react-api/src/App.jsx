import { useState, useEffect } from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import './App.css'

function App() {
  const [digimons, setDigimons] = useState([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    fetchDigimons()
  }, [])

  const fetchDigimons = async () => {
    try {
      const response = await fetch('https://digi-api.com/api/v1/digimon?pageSize=20')
      const data = await response.json()
      setDigimons(data.content)
      setLoading(false)
    } catch (error) {
      console.error("Error fetching digimons:", error)
      setLoading(false)
    }
  }

  const filteredDigimons = digimons.filter(digimon =>
    digimon.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  // Preparamos datos para el gráfico (ejemplo: ID vs Nombre para visualizar algo numérico)
  const chartData = filteredDigimons.map(d => ({
    name: d.name,
    idValue: d.id,
  }));

  return (
    <div className="app-container">
      <header className="header">
        <h1>Digimon Dashboard</h1>
        <p>Explorador básico de la API de Digimon</p>
        
        <input
          type="text"
          placeholder="Buscar Digimon..."
          className="search-input"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </header>

      {/* Sección del Gráfico */}
      {!loading && filteredDigimons.length > 0 && (
        <div className="chart-container">
          <h3>Niveles de ID de Digimon</h3>
          <div style={{ width: '100%', height: 300 }}>
            <ResponsiveContainer>
              <BarChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="idValue" fill="#8884d8" name="ID Digimon" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      )}

      {loading ? (
        <div className="loading">Cargando datos...</div>
      ) : (
        <div className="digimon-grid">
          {filteredDigimons.map((digimon) => (
            <div key={digimon.id} className="digimon-card">
              <img 
                src={digimon.image} 
                alt={digimon.name} 
                className="digimon-image" 
              />
              <p className="digimon-id">#{digimon.id}</p>
              <h3 className="digimon-name">{digimon.name}</h3>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default App
