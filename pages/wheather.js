import { useState } from 'react';

export default function WeatherPage() {
    const [city, setCity] = useState('Jakarta');
    const [weather, setWeather] = useState(null);
    const [loading, setLoading] = useState(false);

    const fetchWeather = async () => {
        setLoading(true);
        const res = await fetch(`/api/weather?city=${city}`);
        const data = await res.json();
        setWeather(data);
        setLoading(false);
    };

    return (
        <div>
            <h1>Informasi Cuaca</h1>
            <input
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder="Masukkan nama kota"
            />
            <button onClick={fetchWeather}>Cek Cuaca</button>

            {loading && <p>Memuat data...</p>}

            {weather && weather.main && (
                <div>
                    <h2>{weather.name}</h2>
                    <p>Suhu: {weather.main.temp}°C</p>
                    <p>Cuaca: {weather.weather[0].description}</p>
                    <p>Kecepatan Angin: {weather.wind.speed} m/s</p>
                </div>
            )}
        </div>
    );
}
