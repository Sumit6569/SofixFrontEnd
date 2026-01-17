// /pages/api/reviews.js
export default async function handler(req, res) {
  const apiKey = GOOGLE_MAPS_API_KEY;
  const placeId = 'Place ID: ChIJuYsT-wVA7DkR0cITDs9kOlM'; // Replace with your real place_id

  const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=reviews&key=${apiKey}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.status !== 'OK') {
      return res.status(400).json({ error: data.status });
    }

    const reviews = data.result.reviews?.slice(0, 10) || [];
    res.status(200).json(reviews);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
