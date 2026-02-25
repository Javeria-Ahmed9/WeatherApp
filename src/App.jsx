import { useState } from 'react'

const API_KEY = '22f95b9e23b27b9a2acfabb47b7414af'

export default function App() {
  const [city, setCity] = useState('')
  const [data, setData] = useState(null)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  async function search() {
    if (!city.trim()) return
    setLoading(true)
    setError('')
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${API_KEY}`
      )
      if (!res.ok) throw new Error('City not found')
      const json = await res.json()
      setData(json)
    } catch {
      setError('City not found. Try again.')
      setData(null)
    }
    setLoading(false)
  }

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white flex flex-col items-center py-16 px-4">
      <div className="w-full max-w-sm">
        <p className="text-gray-600 text-xs uppercase tracking-widest mb-8 text-center">Weather</p>

        <div className="flex gap-2 mb-8">
          <input
            className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm outline-none focus:border-white/25 placeholder:text-gray-600 transition-colors"
            placeholder="Enter city name..."
            value={city}
            onChange={e => setCity(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && search()}
          />
          <button
            onClick={search}
            className="bg-white text-black px-5 py-3 rounded-xl text-sm font-medium hover:bg-gray-200 transition-colors"
          >
            Search
          </button>
        </div>

        {loading && <p className="text-center text-gray-600 text-sm">Loading...</p>}
        {error && <p className="text-center text-red-400 text-sm">{error}</p>}

        {data && (
          <div className="bg-white/3 border border-white/8 rounded-2xl p-6 text-center">
            <p className="text-gray-500 text-sm mb-1">{data.name}, {data.sys.country}</p>
            <p className="text-6xl font-bold mb-2">{Math.round(data.main.temp)}°</p>
            <p className="text-gray-400 text-sm capitalize mb-6">{data.weather[0].description}</p>

            <div className="grid grid-cols-3 gap-3">
              {[
                { label: 'Feels like', value: `${Math.round(data.main.feels_like)}°` },
                { label: 'Humidity', value: `${data.main.humidity}%` },
                { label: 'Wind', value: `${Math.round(data.wind.speed)} m/s` },
              ].map(s => (
                <div key={s.label} className="bg-white/3 border border-white/8 rounded-xl p-3">
                  <p className="text-white font-medium text-sm">{s.value}</p>
                  <p className="text-gray-600 text-xs mt-0.5">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
