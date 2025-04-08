// pages/api/weather.js

export default async function handler(req, res) {
    const city = req.query.city || 'Jakarta';
    const url = `https://wttr.in/${city}?format=j1`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        const result = {
            name: city,
            main: {
                temp: data.current_condition[0].temp_C,
            },
            weather: [
                {
                    description: data.current_condition[0].weatherDesc[0].value,
                },
            ],
            wind: {
                speed: data.current_condition[0].windspeedKmph,
            },
        };

        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ message: 'Gagal mengambil data', error: error.message });
    }
}
