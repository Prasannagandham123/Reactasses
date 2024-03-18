// api.js
import axios from 'axios';

export async function fetchData() {
  try {
    const response = await axios.get('https://api.example.com/data');
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    return null;
  }
}
