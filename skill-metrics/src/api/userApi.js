import axios from "axios";

const API_BASE = "https://insights-api.terrificminds.com";

export const getUserProfile = async (userId) => {
  const res = await axios.get(`${API_BASE}/user/${userId}/profile`);
  return res.data;
};

export const getUserSkills = async (userId) => {
  const res = await axios.get(`${API_BASE}/user/${userId}/skills`);
  return res.data;
};
