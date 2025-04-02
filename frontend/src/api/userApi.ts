import axios from "axios";

const API_URL = "http://localhost:4000/api/v1/user/auth"; // Adjust as needed

export const fetchUsers = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const createUser = async (data: { email: string; password: string }) => {
  return await axios.post(API_URL, data);
};
