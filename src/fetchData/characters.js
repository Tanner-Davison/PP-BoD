import axios from "axios";

const url = "http://localhost:3001";

export const fetchChars = async () => {
  try {
    const response = await axios.get(`${url}/api/bookOfDead`);
    return response.data.data || null;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
};
