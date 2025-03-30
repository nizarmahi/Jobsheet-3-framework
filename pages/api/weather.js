export default async function handler(req, res) {
    const API_KEY = "b6907d289e10d714a6e88b30761fae22";
    const city = req.query.city || 'Jakarta';
    const url = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`);
    const data = await url.json();
    res.status(200).json(data);
}