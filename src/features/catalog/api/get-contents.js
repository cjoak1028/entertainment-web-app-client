import axios from "axios";

const apiUrl = import.meta.env.VITE_API_URL;

export const getContents = async () => {
  try {
    const res = await axios.get(`${apiUrl}/catalog`);
    return res.data;
  } catch (err) {
    console.error(err);
  }
};
